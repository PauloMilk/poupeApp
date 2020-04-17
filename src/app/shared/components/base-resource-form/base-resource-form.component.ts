import { OnInit, AfterContentChecked, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { switchMap } from 'rxjs/operators';

import { BaseResourceService } from '../../services/base-resource.service';
import { BaseResourceModel } from '../../models/base-resource-model';
import { ToastrService } from 'ngx-toastr';

export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit, AfterContentChecked {
  currentAction: string; // new or edit
  resourceForm: FormGroup;
  pageTitle: string; //create or edit
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;

  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;


  constructor(
    protected injector: Injector,
    public resource: T,
    protected resourceService: BaseResourceService<T>,
    protected jsonDataToResourceFn: (jsonData: any) => T,
    protected toastService: ToastrService
  ) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.formBuilder = this.injector.get(FormBuilder);
  }

  ngOnInit() {
    this.setCurrentAction();
    this.buildResourceForm();
    this.loadResource();
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }


  submitForm() {
    this.submittingForm = true;
    if (this.currentAction === 'new') {
      this.createResource();
    } else {
      this.updateResource();
    }

  }

  protected setCurrentAction() {
    if (this.route.snapshot.url[0].path === 'new') {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }


  protected loadResource() {
    if (this.currentAction === 'edit') {
      this.route.paramMap.pipe(
        switchMap(params => this.resourceService.getById(+params.get('id')))
      )
        .subscribe(
          (resource) => {
            this.resource = resource;
            this.editorResourceAttributes();
            this.resourceForm.patchValue(resource);
          },
          (error) => {
            this.toastService.error('Ocorreu um erro no servidor, tente mais tarde.', null, {
              progressBar: true, closeButton: true, positionClass: 'toast-bottom-right'
            });
            this.goBackPage();
          }
        );
    }
  }

  protected setPageTitle() {
    if (this.currentAction === 'new') {
      this.pageTitle = this.creationPageTitle();
    } else {
      this.pageTitle = this.editPageTitle();
    }
  }

  protected creationPageTitle() {
    return 'Novo';
  }

  protected editPageTitle() {
    return 'Editando';
  }

  private createResource() {
    const resource: T = this.jsonDataToResourceFn(this.resourceForm.value);
    this.resourceService.create(resource)
      .subscribe(
        (recurso) => this.actionsForSuccess(recurso),
        (error) => this.actionsForError(error)
      );
  }

  protected editorResourceAttributes() { };

  private updateResource() {
    const resource: T = this.jsonDataToResourceFn(this.resourceForm.value);
    this.resourceService.update(resource)
      .subscribe(
        (recurso) => this.actionsForSuccess(recurso),
        (error) => this.actionsForError(error)
      );
  }

  protected actionsForSuccess(resource: T) {
    this.toastService.success('Operação realizada com sucesso!', null, {
      progressBar: true, closeButton: true, positionClass: 'toast-bottom-right'
    });
    this.goBackPage();
  }

  private goBackPage() {
    const baseComponentPath: string = this.route.snapshot.parent.url[0].path;
    this.router.navigateByUrl(baseComponentPath, { skipLocationChange: true }).then(
      () => this.router.navigate([baseComponentPath])
    );
  }

  protected actionsForError(error) {
    const erroMessage = error.error.errors[0] != null
      ? error.error.errors[0]
      : 'Ocorreu um erro ao processar a sua solicitação!';
    this.toastService.error(erroMessage, null, {
      progressBar: true, closeButton: true, positionClass: 'toast-bottom-right'
    });

    this.submittingForm = false;
    if (error.status === 422) {
      this.serverErrorMessages = JSON.parse(error._body).errors;
    } else {
      this.serverErrorMessages = ['Falha na comunicação com o servidor, Por favor, tente mais tarde.'];
    }

  }

  protected abstract buildResourceForm(): void;
}
