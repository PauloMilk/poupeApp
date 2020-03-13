(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/interfaces/usuario.ts":
/*!***************************************!*\
  !*** ./src/app/interfaces/usuario.ts ***!
  \***************************************/
/*! exports provided: Usuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Usuario", function() { return Usuario; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/models/base-resource-model */ "./src/app/shared/models/base-resource-model.ts");


class Usuario extends _shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__["BaseResourceModel"] {
    constructor(nome, username, password, senhaConfirm, codigo) {
        super();
        this.nome = nome;
        this.username = username;
        this.password = password;
        this.senhaConfirm = senhaConfirm;
        this.codigo = codigo;
    }
    static fromJson(jsonData) {
        return Object.assign(new Usuario(), jsonData);
    }
}


/***/ }),

/***/ "./src/app/pages/cadastro-usuario/shared/usuario.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/cadastro-usuario/shared/usuario.service.ts ***!
  \******************************************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/interfaces/usuario */ "./src/app/interfaces/usuario.ts");
/* harmony import */ var src_app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/base-resource.service */ "./src/app/shared/services/base-resource.service.ts");





let UsuarioService = class UsuarioService extends src_app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_4__["BaseResourceService"] {
    constructor(injector) {
        super(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI + '/usuarios', injector, src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"].fromJson);
        this.injector = injector;
    }
    ativarConta(codigo) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI}/usuarios/confirmacao/${codigo}`;
        return this.http.get(url);
    }
    getDadosUsuario() {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI}/usuarios`;
        return this.http.get(url);
    }
};
UsuarioService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsuarioService);



/***/ })

}]);