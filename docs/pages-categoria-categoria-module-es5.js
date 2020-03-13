function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categoria-categoria-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categoria/categoria-form/categoria-form.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categoria/categoria-form/categoria-form.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCategoriaCategoriaFormCategoriaFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <app-page-title [page-title]=\"pageTitle\" button-text=\"<< Voltar\" button-link=\"/categoria\"\n    button-class=\"btn-outline-info\">\n  </app-page-title>\n\n  <form [formGroup]=\"resourceForm\" (ngSubmit)=\"submitForm()\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Informações sobre a categoria\n      </div>\n      <div class=\"card-body\">\n\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-4\">\n            <label for=\"name\">Nome</label>\n            <input type=\"text\" name=\"name\" id=\"nome\" class=\"form-control\"\n              [class.is-invalid]=\"resourceForm.get('nome').invalid && resourceForm.get('nome').touched\"\n              formControlName=\"nome\" />\n            <div class=\"text-danger\" *ngIf=\"resourceForm.get('nome').invalid && resourceForm.get('nome').touched\">\n              <div *ngIf=\"resourceForm.get('nome').errors.required\">\n                O campo nome é obrigatório.\n              </div>\n              <div *ngIf=\"resourceForm.get('nome').errors.minlength\">\n                O campo nome deve ter no mínimo 3 caracteres.\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group col-md-8\">\n            <label for=\"descricao\">Descrição</label>\n            <input type=\"text\" name=\"descricao\" id=\"descricao\" maxlength=\"150\"\n              [class.is-invalid]=\"resourceForm.get('descricao').invalid && resourceForm.get('descricao').touched\"\n              class=\"form-control\" formControlName=\"descricao\" />\n            <div class=\"text-danger\"\n              *ngIf=\"resourceForm.get('descricao').invalid && resourceForm.get('descricao').touched\">\n              <div *ngIf=\"resourceForm.get('descricao').errors.required\">\n                O campo descrição não deve conter mais de 150 caracteres.\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <button [disabled]=\"submittingForm || resourceForm.invalid\" type=\"submit\"\n      class=\"btn btn-primary btn-lg float-right mt-3\">Salvar</button>\n  </form>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categoria/categoria-list/categoria-list.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categoria/categoria-list/categoria-list.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCategoriaCategoriaListCategoriaListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <app-page-title page-title=\"Categoria\" button-text=\"+ Nova Categoria\" button-link=\"new\" button-class=\"btn-primary\">\n  </app-page-title>\n\n  <form>\n    <div class=\"form-group form-inline\">\n      Busque pelo nome ou descrição: <input class=\"form-control ml-2\" type=\"text\" name=\"searchTerm\" [(ngModel)]=\"search\"\n        (ngModelChange)='changed($event)' />\n    </div>\n    <ng-container *ngIf=\"!loading && resources.length > 0 else noData\">\n      <table class=\"table table-striped \">\n        <thead>\n          <tr class=\"d-flex\">\n            <th class=\"col-4\">Nome</th>\n            <th class=\"col-6\">Descrição</th>\n            <th class=\"col-sm-2\">Ações</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let categoria of resources\" class=\"d-flex\">\n            <td class=\"col-sm-4\">{{ categoria.nome }}</td>\n            <td class=\"col-sm-6\">{{ categoria.descricao }}</td>\n            <td class=\"col-sm-2\">\n              <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n                <button type=\"button\" class=\"btn btn-info\" [routerLink]=\"['edit', categoria.id]\">Editar</button>\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteResource(categoria)\">Remover</button>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n\n      <div class=\"d-flex justify-content-between p-2\">\n        <ngb-pagination [collectionSize]=\"collectionSize\" [(page)]=\"page\" [pageSize]=\"size\" (pageChange)=\"getAll()\">\n        </ngb-pagination>\n\n        <select class=\"custom-select\" style=\"width: auto\" [(ngModel)]=\"size\" name=\"size\" (change)=\"getAll()\">\n          <option [ngValue]=\"5\">5 itens por página</option>\n          <option [ngValue]=\"10\">10 itens por página</option>\n          <option [ngValue]=\"20\">20 itens por página</option>\n        </select>\n      </div>\n    </ng-container>\n\n    <ng-template #noData>\n      <hr />\n      <div *ngIf=\"loading\" class=\"d-flex justify-content-center\">\n        <div class=\"spinner-border\" role=\"status\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <ngb-alert [dismissible]=\"false\" class=\"text-center\" *ngIf=\"!loading\">\n        <strong>Sinto muito!</strong> Não foi encontrado nenhum lançamento.\n      </ngb-alert>\n    </ng-template>\n  </form>\n</div>\n\n\n<app-toasts aria-live=\"polite\" aria-atomic=\"true\"></app-toasts>\n";
    /***/
  },

  /***/
  "./src/app/pages/categoria/categoria-form/categoria-form.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/categoria/categoria-form/categoria-form.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCategoriaCategoriaFormCategoriaFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpYS9jYXRlZ29yaWEtZm9ybS9jYXRlZ29yaWEtZm9ybS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/categoria/categoria-form/categoria-form.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/categoria/categoria-form/categoria-form.component.ts ***!
    \****************************************************************************/

  /*! exports provided: CategoriaFormComponent */

  /***/
  function srcAppPagesCategoriaCategoriaFormCategoriaFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriaFormComponent", function () {
      return CategoriaFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_pages_categoria_shared_categoria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/pages/categoria/shared/categoria */
    "./src/app/pages/categoria/shared/categoria.ts");
    /* harmony import */


    var src_app_pages_categoria_shared_categoria_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/pages/categoria/shared/categoria.service */
    "./src/app/pages/categoria/shared/categoria.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/components/base-resource-form/base-resource-form.component */
    "./src/app/shared/components/base-resource-form/base-resource-form.component.ts");
    /* harmony import */


    var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/toast.service */
    "./src/app/shared/services/toast.service.ts");

    var CategoriaFormComponent =
    /*#__PURE__*/
    function (_src_app_shared_compo) {
      _inherits(CategoriaFormComponent, _src_app_shared_compo);

      function CategoriaFormComponent(service, injector, toastService) {
        var _this;

        _classCallCheck(this, CategoriaFormComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(CategoriaFormComponent).call(this, injector, new src_app_pages_categoria_shared_categoria__WEBPACK_IMPORTED_MODULE_2__["Categoria"](), service, src_app_pages_categoria_shared_categoria__WEBPACK_IMPORTED_MODULE_2__["Categoria"].fromJson, toastService));
        _this.service = service;
        _this.injector = injector;
        _this.toastService = toastService;
        return _this;
      }

      _createClass(CategoriaFormComponent, [{
        key: "buildResourceForm",
        value: function buildResourceForm() {
          this.resourceForm = this.formBuilder.group({
            id: [null],
            nome: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
            descricao: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(150)]]
          });
        }
      }, {
        key: "creationPageTitle",
        value: function creationPageTitle() {
          return 'Cadastro de Nova Categoria';
        }
      }, {
        key: "editPageTitle",
        value: function editPageTitle() {
          var categoriaNome = this.resource.nome || '';
          return 'Editandto Categoria: ' + categoriaNome;
        }
      }]);

      return CategoriaFormComponent;
    }(src_app_shared_components_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_5__["BaseResourceFormComponent"]);

    CategoriaFormComponent.ctorParameters = function () {
      return [{
        type: src_app_pages_categoria_shared_categoria_service__WEBPACK_IMPORTED_MODULE_3__["CategoriaService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
      }];
    };

    CategoriaFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categoria-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categoria-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categoria/categoria-form/categoria-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categoria-form.component.css */
      "./src/app/pages/categoria/categoria-form/categoria-form.component.css")).default]
    })], CategoriaFormComponent);
    /***/
  },

  /***/
  "./src/app/pages/categoria/categoria-list/categoria-list.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/categoria/categoria-list/categoria-list.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCategoriaCategoriaListCategoriaListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "td{\r\n  word-wrap:break-word;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n  table-layout:fixed;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmlhL2NhdGVnb3JpYS1saXN0L2NhdGVnb3JpYS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2F0ZWdvcmlhL2NhdGVnb3JpYS1saXN0L2NhdGVnb3JpYS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZHtcclxuICB3b3JkLXdyYXA6YnJlYWstd29yZDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRhYmxlLWxheW91dDpmaXhlZDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/categoria/categoria-list/categoria-list.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/categoria/categoria-list/categoria-list.component.ts ***!
    \****************************************************************************/

  /*! exports provided: CategoriaListComponent */

  /***/
  function srcAppPagesCategoriaCategoriaListCategoriaListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriaListComponent", function () {
      return CategoriaListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_pages_categoria_shared_categoria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/pages/categoria/shared/categoria.service */
    "./src/app/pages/categoria/shared/categoria.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var src_app_shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/components/base-resource-list/base-resource-list.component */
    "./src/app/shared/components/base-resource-list/base-resource-list.component.ts");
    /* harmony import */


    var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/toast.service */
    "./src/app/shared/services/toast.service.ts");

    var CategoriaListComponent =
    /*#__PURE__*/
    function (_src_app_shared_compo2) {
      _inherits(CategoriaListComponent, _src_app_shared_compo2);

      function CategoriaListComponent(service, injector, toastService) {
        var _this2;

        _classCallCheck(this, CategoriaListComponent);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(CategoriaListComponent).call(this, service, injector.get(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), toastService));
        _this2.service = service;
        _this2.toastService = toastService;
        return _this2;
      }

      _createClass(CategoriaListComponent, [{
        key: "setTitleAndMessageModal",
        value: function setTitleAndMessageModal(resource) {
          this.titleModal = 'Remoção da categoria: ' + resource.nome;
          this.messageModal = 'Você realmente deseja remover a categoria ' + resource.nome + ' ?';
        }
      }]);

      return CategoriaListComponent;
    }(src_app_shared_components_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_4__["BaseResourceListComponent"]);

    CategoriaListComponent.ctorParameters = function () {
      return [{
        type: src_app_pages_categoria_shared_categoria_service__WEBPACK_IMPORTED_MODULE_2__["CategoriaService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]
      }];
    };

    CategoriaListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categoria-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categoria-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categoria/categoria-list/categoria-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categoria-list.component.css */
      "./src/app/pages/categoria/categoria-list/categoria-list.component.css")).default]
    })], CategoriaListComponent);
    /***/
  },

  /***/
  "./src/app/pages/categoria/categoria-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/categoria/categoria-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: CategoriaRoutingModule */

  /***/
  function srcAppPagesCategoriaCategoriaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriaRoutingModule", function () {
      return CategoriaRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _categoria_list_categoria_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./categoria-list/categoria-list.component */
    "./src/app/pages/categoria/categoria-list/categoria-list.component.ts");
    /* harmony import */


    var _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./categoria-form/categoria-form.component */
    "./src/app/pages/categoria/categoria-form/categoria-form.component.ts");

    var routes = [{
      path: '',
      component: _categoria_list_categoria_list_component__WEBPACK_IMPORTED_MODULE_3__["CategoriaListComponent"]
    }, {
      path: 'new',
      component: _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_4__["CategoriaFormComponent"]
    }, {
      path: 'edit/:id',
      component: _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_4__["CategoriaFormComponent"]
    }];

    var CategoriaRoutingModule = function CategoriaRoutingModule() {
      _classCallCheck(this, CategoriaRoutingModule);
    };

    CategoriaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoriaRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/categoria/categoria.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/categoria/categoria.module.ts ***!
    \*****************************************************/

  /*! exports provided: CategoriaModule */

  /***/
  function srcAppPagesCategoriaCategoriaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriaModule", function () {
      return CategoriaModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _categoria_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./categoria-routing.module */
    "./src/app/pages/categoria/categoria-routing.module.ts");
    /* harmony import */


    var _categoria_list_categoria_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./categoria-list/categoria-list.component */
    "./src/app/pages/categoria/categoria-list/categoria-list.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./categoria-form/categoria-form.component */
    "./src/app/pages/categoria/categoria-form/categoria-form.component.ts");

    var CategoriaModule = function CategoriaModule() {
      _classCallCheck(this, CategoriaModule);
    };

    CategoriaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_categoria_list_categoria_list_component__WEBPACK_IMPORTED_MODULE_4__["CategoriaListComponent"], _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_6__["CategoriaFormComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _categoria_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoriaRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]
    })], CategoriaModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-categoria-categoria-module-es5.js.map