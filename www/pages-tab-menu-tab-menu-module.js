(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tab-menu-tab-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab-menu/tab-menu.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab-menu/tab-menu.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <ion-tabs>\n      <ion-tab-bar mode=\"md\" slot=\"bottom\" *ngIf=\"hideTabs\">\n        <ion-tab-button tab=\"dashboard\" [layout]=\"tabsLayout\">\n          <i item-start class=\"material-icons\">store_mall_directory</i>\n          <ion-label>Dashboard</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"speakers\" [layout]=\"tabsLayout\">\n          <i item-start class=\"material-icons\">store_mall_directory</i>\n          <ion-label>Speakers</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"feeds\" [layout]=\"tabsLayout\">\n          <ion-icon name=\"contacts\"></ion-icon>\n          <ion-label>Speakers</ion-label>\n        </ion-tab-button>\n    \n        <ion-tab-button tab=\"settings\" [layout]=\"tabsLayout\">\n          <ion-icon name=\"settings\"></ion-icon>\n          <ion-label>Settings</ion-label>\n        </ion-tab-button>\n      </ion-tab-bar>\n    </ion-tabs>\n");

/***/ }),

/***/ "./src/app/pages/tab-menu/tab-menu.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tab-menu/tab-menu.module.ts ***!
  \***************************************************/
/*! exports provided: TabMenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMenuPageModule", function() { return TabMenuPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_menu_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-menu.page */ "./src/app/pages/tab-menu/tab-menu.page.ts");
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
        path: "",
        component: _tab_menu_page__WEBPACK_IMPORTED_MODULE_5__["TabMenuPage"],
        children: [
            {
                path: 'dashboard',
                children: [
                    {
                        path: '',
                        loadChildren: '../app/dashboard/dashboard.module#DashboardPageModule'
                    }
                ]
            },
            {
                path: 'feeds',
                children: [
                    {
                        path: '',
                        loadChildren: '../app/feed/feed.module#FeedPageModule'
                    }
                ]
            },
            {
                path: 'speakers',
                children: [
                    {
                        path: '',
                        loadChildren: '../app/list/list.module#ListPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/app/dashboard',
                pathMatch: 'full'
            }
        ]
    }
];
var TabMenuPageModule = /** @class */ (function () {
    function TabMenuPageModule() {
    }
    TabMenuPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab_menu_page__WEBPACK_IMPORTED_MODULE_5__["TabMenuPage"]]
        })
    ], TabMenuPageModule);
    return TabMenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tab-menu/tab-menu.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/tab-menu/tab-menu.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ion-tab-bar {\n  box-shadow: 0px !important;\n  height: 45px !important;\n}\n:host ion-tab-bar ion-tab-button.tab-selected * {\n  --ion-text-color: --ion-color-success !important;\n}\n:host ion-tab-bar ion-tab-button.tab-selected ion-icon, :host ion-tab-bar ion-tab-button.tab-selected i {\n  font-size: 25px !important;\n  margin-left: -2px !important;\n  --ion-text-color: --ion-color-success !important;\n}\n:host ion-tab-bar ion-tab-button.tab-selected ion-label {\n  font-size: 12px !important;\n  margin-top: 3px !important;\n  --ion-text-color: --ion-color-success !important;\n}\n:host ion-tab-bar ion-tab-button ion-icon, :host ion-tab-bar ion-tab-button i {\n  height: 23px !important;\n  font-size: 23px !important;\n}\n:host ion-tab-bar ion-tab-button ion-label {\n  margin-top: 3px !important;\n  font-size: 11px !important;\n}\n:host ion-tab-bar ion-tab-button ion-icon {\n  margin-bottom: -3px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyL0RldmVsb3BtZW50L2lvbmljUHJvamVjdHMvYmFzZUFQUC9pb25pYzRDb3Jkb3ZhL3NyYy9hcHAvcGFnZXMvdGFiLW1lbnUvdGFiLW1lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90YWItbWVudS90YWItbWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSwwQkFBQTtFQUNBLHVCQUFBO0FDRFo7QURHZ0I7RUFDSSxnREFBQTtBQ0RwQjtBREdnQjtFQUNJLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnREFBQTtBQ0RwQjtBREdnQjtFQUNJLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnREFBQTtBQ0RwQjtBREtnQjtFQUNJLHVCQUFBO0VBQ0EsMEJBQUE7QUNIcEI7QURLZ0I7RUFDSSwwQkFBQTtFQUNBLDBCQUFBO0FDSHBCO0FES2dCO0VBQ0ksOEJBQUE7QUNIcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90YWItbWVudS90YWItbWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLy8gYXBwLXRhYi1tZW51IHtcbiAgICAgICAgaW9uLXRhYi1iYXIge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgICAgIC0taW9uLXRleHQtY29sb3I6IC0taW9uLWNvbG9yLXN1Y2Nlc3MgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLWljb24sIGkge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0ycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgLS1pb24tdGV4dC1jb2xvcjogLS1pb24tY29sb3Itc3VjY2VzcyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIC0taW9uLXRleHQtY29sb3I6IC0taW9uLWNvbG9yLXN1Y2Nlc3MgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tdGFiLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgaW9uLWljb24sIGkge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIzcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgLy8gfVxufSIsIjpob3N0IGlvbi10YWItYmFyIHtcbiAgYm94LXNoYWRvdzogMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkICoge1xuICAtLWlvbi10ZXh0LWNvbG9yOiAtLWlvbi1jb2xvci1zdWNjZXNzICFpbXBvcnRhbnQ7XG59XG46aG9zdCBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgaW9uLWljb24sIDpob3N0IGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCBpIHtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAtMnB4ICFpbXBvcnRhbnQ7XG4gIC0taW9uLXRleHQtY29sb3I6IC0taW9uLWNvbG9yLXN1Y2Nlc3MgIWltcG9ydGFudDtcbn1cbjpob3N0IGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG4gIC0taW9uLXRleHQtY29sb3I6IC0taW9uLWNvbG9yLXN1Y2Nlc3MgIWltcG9ydGFudDtcbn1cbjpob3N0IGlvbi10YWItYmFyIGlvbi10YWItYnV0dG9uIGlvbi1pY29uLCA6aG9zdCBpb24tdGFiLWJhciBpb24tdGFiLWJ1dHRvbiBpIHtcbiAgaGVpZ2h0OiAyM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjNweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24gaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTFweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgaW9uLXRhYi1iYXIgaW9uLXRhYi1idXR0b24gaW9uLWljb24ge1xuICBtYXJnaW4tYm90dG9tOiAtM3B4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/tab-menu/tab-menu.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/tab-menu/tab-menu.page.ts ***!
  \*************************************************/
/*! exports provided: TabMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMenuPage", function() { return TabMenuPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_core_globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/core/globals */ "./src/app/providers/core/globals.ts");
/* harmony import */ var _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/spinner-dialog/ngx */ "./node_modules/@ionic-native/spinner-dialog/ngx/index.js");
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



var TabMenuPage = /** @class */ (function () {
    function TabMenuPage(globals, spinnerDialog) {
        var _this = this;
        this.globals = globals;
        this.spinnerDialog = spinnerDialog;
        this.hideTabs = true;
        this.tabsPlacement = 'top';
        this.tabsLayout = 'icon-top';
        this.globals.fullScreen = true;
        this.spinnerDialog.show();
        setTimeout(function () {
            _this.spinnerDialog.hide();
        }, 5000);
    }
    TabMenuPage.prototype.ngOnInit = function () {
        if (!this.globals.platform.is('mobile')) {
            this.tabsPlacement = 'top';
            this.tabsLayout = 'icon-start';
            this.hideTabs = true;
            this.globals.router.navigateByUrl("overview");
        }
    };
    TabMenuPage.ctorParameters = function () { return [
        { type: src_app_providers_core_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalsProvider"] },
        { type: _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_2__["SpinnerDialog"] }
    ]; };
    TabMenuPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab-menu',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tab-menu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab-menu/tab-menu.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tab-menu.page.scss */ "./src/app/pages/tab-menu/tab-menu.page.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_providers_core_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalsProvider"],
            _ionic_native_spinner_dialog_ngx__WEBPACK_IMPORTED_MODULE_2__["SpinnerDialog"]])
    ], TabMenuPage);
    return TabMenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tab-menu-tab-menu-module.js.map