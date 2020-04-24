import { Component, Injector } from '@angular/core';
import { Lancamento } from 'src/app/pages/lancamento/shared/lancamento';
import { LancamentoService } from 'src/app/pages/lancamento/shared/lancamento.service';
import { Validators } from '@angular/forms';
import { switchMap, debounceTime, distinctUntilChanged, map, tap, catchError, repeat } from 'rxjs/operators';
import { CategoriaService } from 'src/app/pages/categoria/shared/categoria.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Observable, of } from 'rxjs';
import { NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../../categoria/shared/categoria';

@Component({
  selector: 'app-lancamento-form',
  templateUrl: './lancamento-form.component.html',
  styleUrls: ['./lancamento-form.component.css'],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }]
})
export class LancamentoFormComponent extends BaseResourceFormComponent<Lancamento> {
  searching = false;
  searchFailed = false;

  constructor(protected injector: Injector,
              service: LancamentoService,
              private categoriaService: CategoriaService, protected toastService: ToastrService) {
    super(injector, new Lancamento(), service, Lancamento.fromJson, toastService);
  }



  protected editorResourceAttributes() {
    if (this.resource.data !== undefined) {
      this.resource.data = new Date(this.resource.data);
      this.resource.data
        .setMinutes(this.resource.data.getMinutes() + this.resource.data.getTimezoneOffset());
    }
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.categoriaService.getAll(0, 20, term).pipe(
          map((response: any) => 
            Array.from(response.content).map(value => Categoria.fromJson(value))
            ),
            tap(console.log),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      tipo: ['DESPESA', [Validators.required]],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      valor: [0.00, [Validators.required, Validators.min(0.01)]],
      data: [new Date(Date.now()), [Validators.required]],
      statusPagamento: ['PAGO', [Validators.required]],
      categoria: [null, [Validators.required]],
      descricao: [null, [Validators.maxLength(150)]]
    });
  }

  formatter = (x: Categoria) => x.nome;

  protected creationPageTitle() {
    return 'Cadastro de Novo Lançamento';
  }

  protected editPageTitle() {
    const lancamentoNome = this.resource.nome || '';
    return 'Editando Lançamento: ' + lancamentoNome;
  }
}
