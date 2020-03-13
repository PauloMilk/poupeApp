function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-categoria-categoria-module~pages-lancamento-lancamento-module"], {
  /***/
  "./src/app/interfaces/page.ts":
  /*!************************************!*\
    !*** ./src/app/interfaces/page.ts ***!
    \************************************/

  /*! exports provided: Page */

  /***/
  function srcAppInterfacesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page", function () {
      return Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Page =
    /*#__PURE__*/
    function () {
      function Page() {
        _classCallCheck(this, Page);
      }

      _createClass(Page, null, [{
        key: "fromJson",
        value: function fromJson(jsonData) {
          return Object.assign(new Page(), jsonData);
        }
      }]);

      return Page;
    }();
    /***/

  },

  /***/
  "./src/app/pages/categoria/shared/categoria.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/categoria/shared/categoria.service.ts ***!
    \*************************************************************/

  /*! exports provided: CategoriaService */

  /***/
  function srcAppPagesCategoriaSharedCategoriaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriaService", function () {
      return CategoriaService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_pages_categoria_shared_categoria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/pages/categoria/shared/categoria */
    "./src/app/pages/categoria/shared/categoria.ts");
    /* harmony import */


    var src_app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/base-resource.service */
    "./src/app/shared/services/base-resource.service.ts");
    /* harmony import */


    var src_app_interfaces_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/interfaces/page */
    "./src/app/interfaces/page.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var CategoriaService =
    /*#__PURE__*/
    function (_src_app_shared_servi) {
      _inherits(CategoriaService, _src_app_shared_servi);

      function CategoriaService(injector) {
        var _this;

        _classCallCheck(this, CategoriaService);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(CategoriaService).call(this, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI + '/categorias', injector, src_app_pages_categoria_shared_categoria__WEBPACK_IMPORTED_MODULE_3__["Categoria"].fromJson));
        _this.injector = injector;
        return _this;
      }

      _createClass(CategoriaService, [{
        key: "getAll",
        value: function getAll(page, size, filter) {
          page--;
          var url;

          if (filter !== null) {
            url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI, "/categorias?page=").concat(page, "&size=").concat(size, "&nome=").concat(filter, "&descricao=").concat(filter);
          } else {
            url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI, "/categorias?page=").concat(page, "&size=").concat(size);
          }

          console.log(url);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(src_app_interfaces_page__WEBPACK_IMPORTED_MODULE_5__["Page"].fromJson.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }]);

      return CategoriaService;
    }(src_app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_4__["BaseResourceService"]);

    CategoriaService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    CategoriaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CategoriaService);
    /***/
  },

  /***/
  "./src/app/pages/categoria/shared/categoria.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/categoria/shared/categoria.ts ***!
    \*****************************************************/

  /*! exports provided: Categoria */

  /***/
  function srcAppPagesCategoriaSharedCategoriaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Categoria", function () {
      return Categoria;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/models/base-resource-model */
    "./src/app/shared/models/base-resource-model.ts");

    var Categoria =
    /*#__PURE__*/
    function (_src_app_shared_model) {
      _inherits(Categoria, _src_app_shared_model);

      function Categoria(id, nome, descricao) {
        var _this2;

        _classCallCheck(this, Categoria);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Categoria).call(this));
        _this2.id = id;
        _this2.nome = nome;
        _this2.descricao = descricao;
        return _this2;
      }

      _createClass(Categoria, null, [{
        key: "fromJson",
        value: function fromJson(jsonData) {
          return Object.assign(new Categoria(), jsonData);
        }
      }]);

      return Categoria;
    }(src_app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__["BaseResourceModel"]);
    /***/

  },

  /***/
  "./src/app/shared/components/base-resource-form/base-resource-form.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/shared/components/base-resource-form/base-resource-form.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: BaseResourceFormComponent */

  /***/
  function srcAppSharedComponentsBaseResourceFormBaseResourceFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseResourceFormComponent", function () {
      return BaseResourceFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BaseResourceFormComponent =
    /*#__PURE__*/
    function () {
      function BaseResourceFormComponent(injector, resource, resourceService, jsonDataToResourceFn, toastService) {
        _classCallCheck(this, BaseResourceFormComponent);

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

      _createClass(BaseResourceFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setCurrentAction();
          this.buildResourceForm();
          this.loadResource();
        }
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this.setPageTitle();
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          this.submittingForm = true;

          if (this.currentAction == "new") {
            this.createResource();
          } else {
            this.updateResource();
          }
        } // PRIVATE METHODS

      }, {
        key: "setCurrentAction",
        value: function setCurrentAction() {
          if (this.route.snapshot.url[0].path == "new") {
            this.currentAction = "new";
          } else {
            this.currentAction = "edit";
          }
        }
      }, {
        key: "loadResource",
        value: function loadResource() {
          var _this3 = this;

          if (this.currentAction == "edit") {
            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
              return _this3.resourceService.getById(+params.get("id"));
            })).subscribe(function (resource) {
              _this3.resource = resource;

              _this3.editorResourceAttributes();

              _this3.resourceForm.patchValue(resource); //binds loaded resource data to resourceForm

            }, function (error) {
              _this3.toastService.show('Ocorreu um erro no servidor, tente mais tarde.', {
                classname: 'bg-danger text-light',
                delay: 10000
              });

              _this3.goBackPage();
            });
          }
        }
      }, {
        key: "setPageTitle",
        value: function setPageTitle() {
          if (this.currentAction == "new") {
            this.pageTitle = this.creationPageTitle();
          } else {
            this.pageTitle = this.editPageTitle();
          }
        }
      }, {
        key: "creationPageTitle",
        value: function creationPageTitle() {
          return "Novo";
        }
      }, {
        key: "editPageTitle",
        value: function editPageTitle() {
          return "Editando";
        }
      }, {
        key: "createResource",
        value: function createResource() {
          var _this4 = this;

          var resource = this.jsonDataToResourceFn(this.resourceForm.value);
          this.resourceService.create(resource).subscribe(function (resource) {
            return _this4.actionsForSuccess(resource);
          }, function (error) {
            return _this4.actionsForError(error);
          });
        }
      }, {
        key: "editorResourceAttributes",
        value: function editorResourceAttributes() {}
      }, {
        key: "updateResource",
        value: function updateResource() {
          var _this5 = this;

          var resource = this.jsonDataToResourceFn(this.resourceForm.value);
          this.resourceService.update(resource).subscribe(function (resource) {
            return _this5.actionsForSuccess(resource);
          }, function (error) {
            return _this5.actionsForError(error);
          });
        }
      }, {
        key: "actionsForSuccess",
        value: function actionsForSuccess(resource) {
          this.toastService.show('Operação realizada com sucesso!', {
            classname: 'bg-success text-light',
            delay: 3000
          });
          this.goBackPage();
        }
      }, {
        key: "goBackPage",
        value: function goBackPage() {
          var _this6 = this;

          var baseComponentPath = this.route.snapshot.parent.url[0].path;
          console.log(baseComponentPath);
          this.router.navigateByUrl(baseComponentPath, {
            skipLocationChange: true
          }).then(function () {
            return _this6.router.navigate([baseComponentPath]);
          });
        }
      }, {
        key: "actionsForError",
        value: function actionsForError(error) {
          this.toastService.show('Ocorreu um erro ao processar a sua solicitação!', {
            classname: 'bg-danger text-light',
            delay: 3000
          });
          this.submittingForm = false;

          if (error.status === 422) {
            this.serverErrorMessages = JSON.parse(error._body).errors;
          } else {
            this.serverErrorMessages = ["Falha na comunicação com o servidor, Por favor, tente mais tarde."];
          }
        }
      }]);

      return BaseResourceFormComponent;
    }();
    /***/

  },

  /***/
  "./src/app/shared/components/base-resource-list/base-resource-list.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/shared/components/base-resource-list/base-resource-list.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: BaseResourceListComponent */

  /***/
  function srcAppSharedComponentsBaseResourceListBaseResourceListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseResourceListComponent", function () {
      return BaseResourceListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../modal-confirm/modal-confirm.component */
    "./src/app/shared/components/modal-confirm/modal-confirm.component.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BaseResourceListComponent =
    /*#__PURE__*/
    function () {
      function BaseResourceListComponent(resourceService, modalService, toastService) {
        var _this7 = this;

        _classCallCheck(this, BaseResourceListComponent);

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
        this.modelChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function () {
          return _this7.getAll();
        });
      }

      _createClass(BaseResourceListComponent, [{
        key: "changed",
        value: function changed(text) {
          this.modelChanged.next(text);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAll();
        }
      }, {
        key: "getAll",
        value: function getAll() {
          var _this8 = this;

          this.loading = true;
          this.resourceService.getAll(this.page, this.size, this.search).subscribe(function (entries) {
            _this8.resources = entries.content;
            _this8.collectionSize = entries.totalElements;
            _this8.loading = false;
          }, function (error) {
            _this8.toastService.show('Erro ao tentar carregar a lista, tente mais tarde!', {
              classname: 'bg-danger text-light',
              delay: 3000
            });
          });
        }
      }, {
        key: "deleteResource",
        value: function deleteResource(resource) {
          var _this9 = this;

          var modalRef = this.modalService.open(_modal_confirm_modal_confirm_component__WEBPACK_IMPORTED_MODULE_1__["ModalConfirmComponent"], {
            windowClass: 'light-blue-backdrop',
            centered: true
          });
          this.setTitleAndMessageModal(resource);
          modalRef.componentInstance.message = this.messageModal;
          modalRef.componentInstance.title = this.titleModal;
          modalRef.result.then(function (result) {
            if (result) {
              _this9.delete(resource);
            }
          });
        }
      }, {
        key: "delete",
        value: function _delete(resource) {
          var _this10 = this;

          this.resourceService.delete(resource.id).subscribe(function () {
            _this10.resources = _this10.resources.filter(function (element) {
              return element !== resource;
            });

            if (_this10.resources.length === 0) {
              _this10.page--;

              _this10.getAll();
            }

            _this10.toastService.show('Operação realizada com sucesso!', {
              classname: 'bg-success text-light',
              delay: 3000
            });
          }, function (error) {
            _this10.toastService.show('Erro ao tentar efetuar a operação, por favor tente mais tarde!', {
              classname: 'bg-danger text-light',
              delay: 3000
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this11 = this;

          this.toastService.toasts.forEach(function (x) {
            _this11.toastService.remove(x);
          });
        }
      }]);

      return BaseResourceListComponent;
    }();
    /***/

  },

  /***/
  "./src/app/shared/models/base-resource-model.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/models/base-resource-model.ts ***!
    \******************************************************/

  /*! exports provided: BaseResourceModel */

  /***/
  function srcAppSharedModelsBaseResourceModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseResourceModel", function () {
      return BaseResourceModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var BaseResourceModel = function BaseResourceModel() {
      _classCallCheck(this, BaseResourceModel);
    };
    /***/

  },

  /***/
  "./src/app/shared/services/base-resource.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/base-resource.service.ts ***!
    \**********************************************************/

  /*! exports provided: BaseResourceService */

  /***/
  function srcAppSharedServicesBaseResourceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseResourceService", function () {
      return BaseResourceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_interfaces_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/interfaces/page */
    "./src/app/interfaces/page.ts");

    var BaseResourceService =
    /*#__PURE__*/
    function () {
      function BaseResourceService(apiPath, injetor, jsonDataToResourceFn) {
        _classCallCheck(this, BaseResourceService);

        this.apiPath = apiPath;
        this.injetor = injetor;
        this.jsonDataToResourceFn = jsonDataToResourceFn;
        this.http = injetor.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]);
      }

      _createClass(BaseResourceService, [{
        key: "getAll",
        value: function getAll(page, size, filter) {
          page--;
          return this.http.get(this.apiPath + "?page=".concat(page, "&size=").concat(size)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(src_app_interfaces_page__WEBPACK_IMPORTED_MODULE_4__["Page"].fromJson.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          var url = "".concat(this.apiPath, "/").concat(id);
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.jsonDataToResource.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "create",
        value: function create(resource) {
          return this.http.post(this.apiPath, resource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.jsonDataToResource.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "update",
        value: function update(resource) {
          var url = "".concat(this.apiPath, "/").concat(resource.id);
          return this.http.put(url, resource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return resource;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var url = "".concat(this.apiPath, "/").concat(id);
          return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return null;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        } // PROTECTED METHODS

      }, {
        key: "jsonDataToResources",
        value: function jsonDataToResources(jsonData) {
          var _this12 = this;

          var resources = [];
          jsonData.forEach(function (element) {
            return resources.push(_this12.jsonDataToResourceFn(element));
          });
          return resources;
        }
      }, {
        key: "jsonDataToResource",
        value: function jsonDataToResource(jsonData) {
          return this.jsonDataToResourceFn(jsonData);
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.log('ERRO NA REQUISIÇÃO => ', error);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }
      }]);

      return BaseResourceService;
    }();
    /***/

  }
}]);
//# sourceMappingURL=default~pages-categoria-categoria-module~pages-lancamento-lancamento-module-es5.js.map