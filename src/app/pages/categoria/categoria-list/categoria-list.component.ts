import { Component, Injector } from '@angular/core';
import { CategoriaService } from 'src/app/pages/categoria/shared/categoria.service';
import { Categoria } from '../shared/categoria';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent extends BaseResourceListComponent<Categoria> {

  constructor(private service: CategoriaService, injector: Injector, protected toastService: ToastrService) {
    super(service, injector.get(NgbModal), toastService);

  }

  setTitleAndMessageModal(resource: Categoria) {
    this.titleModal = 'Remoção da categoria: ' + resource.nome;
    this.messageModal = 'Você realmente deseja remover a categoria ' + resource.nome + ' ?';
  }



}
