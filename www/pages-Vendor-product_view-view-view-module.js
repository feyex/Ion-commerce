(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Vendor-product_view-view-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Vendor/product_view/view/view.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Vendor/product_view/view/view.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>view</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/Vendor/product_view/view/view-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/Vendor/product_view/view/view-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageRoutingModule", function() { return ViewPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.page */ "./src/app/pages/Vendor/product_view/view/view.page.ts");
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
        component: _view_page__WEBPACK_IMPORTED_MODULE_2__["ViewPage"]
    }
];
var ViewPageRoutingModule = /** @class */ (function () {
    function ViewPageRoutingModule() {
    }
    ViewPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ViewPageRoutingModule);
    return ViewPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/Vendor/product_view/view/view.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/Vendor/product_view/view/view.module.ts ***!
  \***************************************************************/
/*! exports provided: ViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPageModule", function() { return ViewPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-routing.module */ "./src/app/pages/Vendor/product_view/view/view-routing.module.ts");
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view.page */ "./src/app/pages/Vendor/product_view/view/view.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var ViewPageModule = /** @class */ (function () {
    function ViewPageModule() {
    }
    ViewPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _view_routing_module__WEBPACK_IMPORTED_MODULE_4__["ViewPageRoutingModule"]
            ],
            declarations: [_view_page__WEBPACK_IMPORTED_MODULE_5__["ViewPage"]]
        })
    ], ViewPageModule);
    return ViewPageModule;
}());



/***/ }),

/***/ "./src/app/pages/Vendor/product_view/view/view.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/Vendor/product_view/view/view.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL1ZlbmRvci9wcm9kdWN0X3ZpZXcvdmlldy92aWV3LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/Vendor/product_view/view/view.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/Vendor/product_view/view/view.page.ts ***!
  \*************************************************************/
/*! exports provided: ViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPage", function() { return ViewPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var ViewPage = /** @class */ (function () {
    function ViewPage() {
    }
    ViewPage.prototype.ngOnInit = function () {
    };
    ViewPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __importDefault(__webpack_require__(/*! raw-loader!./view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Vendor/product_view/view/view.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./view.page.scss */ "./src/app/pages/Vendor/product_view/view/view.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ViewPage);
    return ViewPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Vendor-product_view-view-view-module.js.map