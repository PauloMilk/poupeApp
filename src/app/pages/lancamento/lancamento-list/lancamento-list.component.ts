import { Component, OnInit, Injector } from '@angular/core';
import { Lancamento } from 'src/app/pages/lancamento/shared/lancamento';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LancamentoService } from 'src/app/pages/lancamento/shared/lancamento.service';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-lancamento-list',
  templateUrl: './lancamento-list.component.html',
  styleUrls: ['./lancamento-list.component.css']
})
export class LancamentoListComponent extends BaseResourceListComponent<Lancamento> {
  constructor(private service: LancamentoService, private injector: Injector, protected toastService: ToastService) {
    super(service, injector.get(NgbModal), toastService);
  }

  setTitleAndMessageModal(resource: Lancamento) {
    this.titleModal = 'Remoção do lançamento: ' + resource.nome;
    this.messageModal = 'Você realmente deseja remover o lancamento ' + resource.nome + ' ?';
  }


}
