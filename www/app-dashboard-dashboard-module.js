(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/dashboard/dashboard.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/dashboard/dashboard.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border translucent>\n    <ion-toolbar class=\"no-shadow hidden-md\" lines=\"none\">\n      <!-- <ion-buttons class=\"title\" slot=\"start\">\n        <i class=\"material-icons\">subject</i>\n        <span>My accounts</span>\n      </ion-buttons> -->\n    <ion-buttons *ngIf=\"globals.splitPaneToggle\" slot=\"start\">\n      <ion-button clear=\"true\" (click)=\"globals.toggleMenu()\">\n        <i class=\"material-icons\">menu</i>\n      </ion-button>\n    </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-menu-button>\n          <i class=\"material-icons flip\">subject</i>\n        </ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n    <ion-toolbar class=\"hidden-xs\">\n      <ion-title>Overview</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-card fullscreen>\n      <img \n        (click)=\"media.previewImage('assets/icon/favicon.png')\"\n        src=\"assets/icon/favicon.png\" />\n    </ion-card>\n    <br />\n    <ion-card fullscreen>\n      <ion-card-header>\n        <ion-card-title class=\"fs-18\">Recent Account</ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"no-padding\">\n        <ion-item *ngFor=\"let user of users\">\n          <ion-avatar slot=\"end\">\n            <text-avatar [text]=\"user.name + 'i'\" [color]=\"user.color\"></text-avatar>\n          </ion-avatar>\n          \n          <ion-label>\n            <ion-text>\n              <h3>{{ user.name }}</h3>\n            </ion-text>\n            <p>{{ user.company }} - {{ user.job_title }}</p>\n          </ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n");

/***/ }),

/***/ "./src/app/pages/app/dashboard/dashboard.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/app/dashboard/dashboard.module.ts ***!
  \*********************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/app/dashboard/dashboard.page.ts");
/* harmony import */ var src_app_components_ui_text_avatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/ui/text-avatar */ "./src/app/components/ui/text-avatar/index.ts");
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
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_5__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_components_ui_text_avatar__WEBPACK_IMPORTED_MODULE_6__["TextAvatarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_5__["DashboardPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/app/dashboard/dashboard.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/app/dashboard/dashboard.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sc-ion-card-md-h {\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n}\n.sc-ion-card-md-h img {\n  min-height: 100px !important;\n  max-height: 300px !important;\n}\nion-toolbar ion-buttons {\n  margin-left: 5px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXBwL2Rhc2hib2FyZC9EOlxcbWluZVxca3JlYWRvci9zcmNcXGFwcFxccGFnZXNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7QUNBSjtBRENJO0VBQ0ksNEJBQUE7RUFDQSw0QkFBQTtBQ0NSO0FER0E7RUFDSSwyQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2MtaW9uLWNhcmQtbWQtaCB7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogMHB4O1xuICAgIGltZyB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5pb24tdG9vbGJhciBpb24tYnV0dG9ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xufSIsIi5zYy1pb24tY2FyZC1tZC1oIHtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAtd2Via2l0LW1hcmdpbi1lbmQ6IDBweDtcbn1cbi5zYy1pb24tY2FyZC1tZC1oIGltZyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10b29sYmFyIGlvbi1idXR0b25zIHtcbiAgbWFyZ2luLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/app/dashboard/dashboard.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/app/dashboard/dashboard.page.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_core_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/core/globals */ "./src/app/providers/core/globals.ts");
/* harmony import */ var src_app_providers_core_media__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/core/media */ "./src/app/providers/core/media.ts");
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



var DashboardPage = /** @class */ (function () {
    function DashboardPage(globals, media) {
        this.globals = globals;
        this.media = media;
        this.users = [
            { name: "Abdul Basit", company: "Siemens", job_title: "Technical Lead", color: '#ccc' },
            { name: "Amin Ullah", company: "NBS", job_title: "BI Engineer" },
            { name: "Haris Altaf", company: "Siemens", job_title: "Technical Lead" },
            { name: "Muhammad Umair", company: "Siemens", job_title: "Software Engineer" },
            { name: "Talal", company: "Siemens", job_title: "Software Engineer" },
            { name: "Usman Iftkhar", company: "Siemens", job_title: "Sr. Technical Lead" },
            { name: "Umar Hayat", company: "NBS", job_title: "Software Engineer" }
        ];
        this.globals.fullScreen = false;
    }
    DashboardPage.prototype.ngOnInit = function () {
    };
    DashboardPage.ctorParameters = function () { return [
        { type: src_app_providers_core_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalsProvider"] },
        { type: src_app_providers_core_media__WEBPACK_IMPORTED_MODULE_2__["MediaProvider"] }
    ]; };
    DashboardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/dashboard/dashboard.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/app/dashboard/dashboard.page.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_providers_core_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalsProvider"],
            src_app_providers_core_media__WEBPACK_IMPORTED_MODULE_2__["MediaProvider"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-dashboard-dashboard-module.js.map