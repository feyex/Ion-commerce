(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-authentication-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/login/login.page.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/login/login.page.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-refresher pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" slot=\"fixed\" (ionRefresh)=\"globals.doRefresh($event)\">\n    <ion-refresher-content\n    pullingIcon=\"arrow-dropdown\"\n    pullingText=\"Pull to refresh\"\n    refreshingSpinner=\"circles\"\n    refreshingText=\"Refreshing...\">\n  </ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"4\" offset-sm=\"8\" size-sm=\"5\" offset-sm=\"7\" size=\"12\" class=\"h-100 bg-primary\">\n        <div class=\"form\">\n          <h2 class=\"logo\">Ionic 4</h2>\n          <ion-item lines=\"none\">\n            <ion-label>\n              <h2 color=\"dark\" class=\"fs-20\">Let's get started:</h2>\n              <p class=\"fs-12\"class=\"ion-text-wrap\">access your account information using your device phone number</p>\n            </ion-label>\n          </ion-item>\n          <login></login>\n        </div>\n      </ion-col>\n      <ion-col class=\"visible-md h-100\">\n        <div> 2 of 3 </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/authentication/login/login.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/authentication/login/login.module.ts ***!
  \************************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/authentication/login/login.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/authentication/login/login.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/authentication/login/login.page.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col div.form {\n  display: table-cell !important;\n  vertical-align: middle !important;\n  margin-top: 70px !important;\n}\n\nion-bottom-drawer {\n  border-top: 1px solid #999 !important;\n  box-shadow: inset 0px 11px 8px -10px #999, inset 0px -11px 8px -10px #999 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyL0RldmVsb3BtZW50L2lvbmljUHJvamVjdHMvYmFzZUFQUC9pb25pYzRDb3Jkb3ZhL3NyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24vbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hdXRoZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURHQTtFQUNJLHFDQUFBO0VBQ0Esb0ZBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGhlbnRpY2F0aW9uL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wgZGl2LmZvcm0ge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogNzBweCAhaW1wb3J0YW50O1xufVxuXG5cbmlvbi1ib3R0b20tZHJhd2VyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzk5OSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxMXB4IDhweCAtMTBweCAjOTk5LFxuICAgIGluc2V0IDBweCAtMTFweCA4cHggLTEwcHggIzk5OSAhaW1wb3J0YW50O1xufSIsImlvbi1jb2wgZGl2LmZvcm0ge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsICFpbXBvcnRhbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNzBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tYm90dG9tLWRyYXdlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTk5ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAxMXB4IDhweCAtMTBweCAjOTk5LCBpbnNldCAwcHggLTExcHggOHB4IC0xMHB4ICM5OTkgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/authentication/login/login.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/authentication/login/login.page.ts ***!
  \**********************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_core_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/core/globals */ "./src/app/providers/core/globals.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var LoginPage = /** @class */ (function () {
    function LoginPage(globals) {
        this.globals = globals;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.globals.fullScreen = true;
    };
    LoginPage.ctorParameters = function () { return [
        { type: src_app_providers_core_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalsProvider"] }
    ]; };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/authentication/login/login.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/authentication/login/login.page.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_providers_core_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalsProvider"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-authentication-login-login-module.js.map