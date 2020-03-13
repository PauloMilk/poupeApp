function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/interfaces/usuario.ts":
  /*!***************************************!*\
    !*** ./src/app/interfaces/usuario.ts ***!
    \***************************************/

  /*! exports provided: Usuario */

  /***/
  function srcAppInterfacesUsuarioTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Usuario", function () {
      return Usuario;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/models/base-resource-model */
    "./src/app/shared/models/base-resource-model.ts");

    var Usuario =
    /*#__PURE__*/
    function (_shared_models_base_r) {
      _inherits(Usuario, _shared_models_base_r);

      function Usuario(nome, username, password, senhaConfirm, codigo) {
        var _this;

        _classCallCheck(this, Usuario);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Usuario).call(this));
        _this.nome = nome;
        _this.username = username;
        _this.password = password;
        _this.senhaConfirm = senhaConfirm;
        _this.codigo = codigo;
        return _this;
      }

      _createClass(Usuario, null, [{
        key: "fromJson",
        value: function fromJson(jsonData) {
          return Object.assign(new Usuario(), jsonData);
        }
      }]);

      return Usuario;
    }(_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__["BaseResourceModel"]);
    /***/

  },

  /***/
  "./src/app/pages/cadastro-usuario/shared/usuario.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/cadastro-usuario/shared/usuario.service.ts ***!
    \******************************************************************/

  /*! exports provided: UsuarioService */

  /***/
  function srcAppPagesCadastroUsuarioSharedUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
      return UsuarioService;
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


    var src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/interfaces/usuario */
    "./src/app/interfaces/usuario.ts");
    /* harmony import */


    var src_app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/base-resource.service */
    "./src/app/shared/services/base-resource.service.ts");

    var UsuarioService =
    /*#__PURE__*/
    function (_src_app_shared_servi) {
      _inherits(UsuarioService, _src_app_shared_servi);

      function UsuarioService(injector) {
        var _this2;

        _classCallCheck(this, UsuarioService);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(UsuarioService).call(this, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI + '/usuarios', injector, src_app_interfaces_usuario__WEBPACK_IMPORTED_MODULE_3__["Usuario"].fromJson));
        _this2.injector = injector;
        return _this2;
      }

      _createClass(UsuarioService, [{
        key: "ativarConta",
        value: function ativarConta(codigo) {
          var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI, "/usuarios/confirmacao/").concat(codigo);
          return this.http.get(url);
        }
      }, {
        key: "getDadosUsuario",
        value: function getDadosUsuario() {
          var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].urlAPI, "/usuarios");
          return this.http.get(url);
        }
      }]);

      return UsuarioService;
    }(src_app_shared_services_base_resource_service__WEBPACK_IMPORTED_MODULE_4__["BaseResourceService"]);

    UsuarioService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }];
    };

    UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UsuarioService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map