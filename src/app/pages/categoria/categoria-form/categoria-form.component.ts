import { Component, Injector } from '@angular/core';
import { Categoria } from 'src/app/pages/categoria/shared/categoria';
import { CategoriaService } from 'src/app/pages/categoria/shared/categoria.service';
import { Validators } from '@angular/forms';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent extends BaseResourceFormComponent<Categoria> {

  constructor(
    protected service: CategoriaService,
    protected injector: Injector,
    protected toastService: ToastService
  ) {
    super(injector, new Categoria(), service, Categoria.fromJson, toastService);
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      descricao: [null, [Validators.maxLength(150)]]
    });
  }

  protected creationPageTitle() {
    return 'Cadastro de Nova Categoria';
  }

  protected editPageTitle() {
    const categoriaNome = this.resource.nome || '';
    return 'Editandto Categoria: ' + categoriaNome;
  }


}
