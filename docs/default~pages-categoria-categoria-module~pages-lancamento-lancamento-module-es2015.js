(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-categoria-categoria-module~pages-lancamento-lancamento-module"],{

/***/ "./src/app/interfaces/page.ts":
/*!************************************!*\
  !*** ./src/app/interfaces/page.ts ***!
  \************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Page {
    static fromJson(jsonData) {
        return Object.assign(new Page(), jsonData);
    }
}


/***/ }),

/***/ "./src/app/pages/categoria/shared/categoria.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/categoria/shared/categoria.service.ts ***!
  \*************************************************************/
/*! exports provided: CategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaService", function() { return CategoriaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_pages_categoria_shared_categoria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/categoria/shared/categoria */ "./src/app/pages/categoria/shared/categoria.ts");
/* harmony import */ var src_app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/base-resource.service */ "./src/app/shared/services/base-resource.service.ts");
/* harmony import */ var src_app_interfaces_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/interfaces/page */ "./src/app/interfaces/page.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let CategoriaService = class CategoriaService extends src_app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_4__["BaseResourceService"] {
    constructor(injector) {
        super(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI + '/categorias', injector, src_app_pages_categoria_shared_categoria__WEBPACK_IMPORTED_MODULE_3__["Categoria"].fromJson);
        this.injector = injector;
    }
    getAll(page, size, filter) {
        page--;
        let url;
        if (filter !== null) {
            url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI}/categorias?page=${page}&size=${size}&nome=${filter}&descricao=${filter}`;
        }
        else {
            url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI}/categorias?page=${page}&size=${size}`;
        }
        console.log(url);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(src_app_interfaces_page__WEBPACK_IMPORTED_MODULE_5__["Page"].fromJson.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    }
};
CategoriaService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
CategoriaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoriaService);



/***/ }),

/***/ "./src/app/pages/categoria/shared/categoria.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/categoria/shared/categoria.ts ***!
  \*****************************************************/
/*! exports provided: Categoria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categoria", function() { return Categoria; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/base-resource-model */ "./src/app/shared/models/base-resource-model.ts");


class Categoria extends src_app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__["BaseResourceModel"] {
    constructor(id, nome, descricao) {
        super();
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
    static fromJson(jsonData) {
        return Object.assign(new Categoria(), jsonData);
    }
}


/***/ }),

/***/ "./src/app/shared/components/base-resource-form/base-resource-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/base-resource-form/base-resource-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BaseResourceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResourceFormComponent", function() { return BaseResourceFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class BaseResourceFormComponent {
    constructor(injector, resource, resourceService, jsonDataToResourceFn, toastService) {
        this.injector = injector;
        this.resource = resource;
        this.resourceService = resourceService;
        this.jsonDataToResourceFn = jsonDataToResourceFn;
        this.toastService = toastService;
        this.serverErrorMessages = null;
        this.submittingForm = false;
        this.route = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]);
        this.router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
        this.formBuilder = this.injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]);
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
        if (this.currentAction == "new") {
            this.createResource();
        }
        else {
            this.updateResource();
        }
    }
    // PRIVATE METHODS
    setCurrentAction() {
        if (this.route.snapshot.url[0].path == "new") {
            this.currentAction = "new";
        }
        else {
            this.currentAction = "edit";
        }
    }
    loadResource() {
        if (this.currentAction == "edit") {
            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(params => this.resourceService.getById(+params.get("id"))))
                .subscribe((resource) => {
                this.resource = resource;
                this.editorResourceAttributes();
                this.resourceForm.patchValue(resource); //binds loaded resource data to resourceForm
            }, (error) => {
                this.toastService.show('Ocorreu um erro no servidor, tente mais tarde.', { classname: 'bg-danger text-light', delay: 10000 });
                this.goBackPage();
            });
        }
    }
    setPageTitle() {
        if (this.currentAction == "new") {
            this.pageTitle = this.creationPageTitle();
        }
        else {
            this.pageTitle = this.editPageTitle();
        }
    }
    creationPageTitle() {
        return "Novo";
    }
    editPageTitle() {
        return "Editando";
    }
    createResource() {
        const resource = this.jsonDataToResourceFn(this.resourceForm.value);
        this.resourceService.create(resource)
            .subscribe(resource => this.actionsForSuccess(resource), (error) => this.actionsForError(error));
    }
    editorResourceAttributes() { }
    ;
    updateResource() {
        const resource = this.jsonDataToResourceFn(this.resourceForm.value);
        this.resourceService.update(resource)
            .subscribe(resource => this.actionsForSuccess(resource), error => this.actionsForError(error));
    }
    actionsForSuccess(resource) {
        this.toastService.show('Operação realizada com sucesso!', { classname: 'bg-success text-light', delay: 3000 });
        this.goBackPage();
    }
    goBackPage() {
        const baseComponentPath = this.route.snapshot.parent.url[0].path;
        console.log(baseComponentPath);
        this.router.navigateByUrl(baseComponentPath, { skipLocationChange: true }).then(() => this.router.navigate([baseComponentPath]));
    }
    actionsForError(error) {
        this.toastService.show('Ocorreu um erro ao processar a sua solicitação!', { classname: 'bg-danger text-light', delay: 3000 });
        this.submittingForm = false;
        if (error.status === 422) {
            this.serverErrorMessages = JSON.parse(error._body).errors;
        }
        else {
            this.serverErrorMessages = ["Falha na comunicação com o servidor, Por favor, tente mais tarde."];
        }
    }
}


/***/ }),

/***/ "./src/app/shared/components/base-resource-list/base-resource-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/base-resource-list/base-resource-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: BaseResourceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResourceListComponent", function() { return BaseResourceListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-confirm/modal-confirm.component */ "./src/app/shared/components/modal-confirm/modal-confirm.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class BaseResourceListComponent {
    constructor(resourceService, modalService, toastService) {
        this.resourceService = resourceService;
        this.modalService = modalService;
        this.toastService = toastService;
        this.search = null;
        this.loading = false;
        this.page = 1;
        this.size = 5;
        this.collectionSize = 0;
        this.resources = [];
        this.modelChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.modelChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(() => this.getAll());
    }
    changed(text) {
        this.modelChanged.next(text);
    }
    ngOnInit() {
        this.getAll();
    }
    getAll() {
        this.loading = true;
        this.resourceService.getAll(this.page, this.size, this.search).subscribe(entries => {
            this.resources = entries.content;
            this.collectionSize = entries.totalElements;
            this.loading = false;
        }, error => {
            this.toastService.show('Erro ao tentar carregar a lista, tente mais tarde!', { classname: 'bg-danger text-light', delay: 3000 });
        });
    }
    deleteResource(resource) {
        const modalRef = this.modalService.open(_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_1__["ModalConfirmComponent"], {
            windowClass: 'light-blue-backdrop',
            centered: true
        });
        this.setTitleAndMessageModal(resource);
        modalRef.componentInstance.message = this.messageModal;
        modalRef.componentInstance.title = this.titleModal;
        modalRef.result.then((result) => {
            if (result) {
                this.delete(resource);
            }
        });
    }
    delete(resource) {
        this.resourceService.delete(resource.id).subscribe(() => {
            this.resources = this.resources.filter(element => element !== resource);
            if (this.resources.length === 0) {
                this.page--;
                this.getAll();
            }
            this.toastService.show('Operação realizada com sucesso!', { classname: 'bg-success text-light', delay: 3000 });
        }, (error) => {
            this.toastService.show('Erro ao tentar efetuar a operação, por favor tente mais tarde!', { classname: 'bg-danger text-light', delay: 3000 });
        });
    }
    ngOnDestroy() {
        this.toastService.toasts.forEach(x => {
            this.toastService.remove(x);
        });
    }
}


/***/ }),

/***/ "./src/app/shared/models/base-resource-model.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/models/base-resource-model.ts ***!
  \******************************************************/
/*! exports provided: BaseResourceModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResourceModel", function() { return BaseResourceModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class BaseResourceModel {
}


/***/ }),

/***/ "./src/app/shared/services/base-resource.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/base-resource.service.ts ***!
  \**********************************************************/
/*! exports provided: BaseResourceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResourceService", function() { return BaseResourceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_interfaces_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/interfaces/page */ "./src/app/interfaces/page.ts");





class BaseResourceService {
    constructor(apiPath, injetor, jsonDataToResourceFn) {
        this.apiPath = apiPath;
        this.injetor = injetor;
        this.jsonDataToResourceFn = jsonDataToResourceFn;
        this.http = injetor.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]);
    }
    getAll(page, size, filter) {
        page--;
        return this.http.get(this.apiPath + `?page=${page}&size=${size}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(src_app_interfaces_page__WEBPACK_IMPORTED_MODULE_4__["Page"].fromJson.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getById(id) {
        const url = `${this.apiPath}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.jsonDataToResource.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    create(resource) {
        return this.http.post(this.apiPath, resource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.jsonDataToResource.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    update(resource) {
        const url = `${this.apiPath}/${resource.id}`;
        return this.http.put(url, resource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => resource), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    delete(id) {
        const url = `${this.apiPath}/${id}`;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    // PROTECTED METHODS
    jsonDataToResources(jsonData) {
        const resources = [];
        jsonData.forEach(element => resources.push(this.jsonDataToResourceFn(element)));
        return resources;
    }
    jsonDataToResource(jsonData) {
        return this.jsonDataToResourceFn(jsonData);
    }
    handleError(error) {
        console.log('ERRO NA REQUISIÇÃO => ', error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    }
}


/***/ })

}]);