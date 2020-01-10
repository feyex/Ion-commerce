(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-feed-feed-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/feed/feed.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/feed/feed.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons *ngIf=\"globals.splitPaneToggle\" slot=\"start\">\n      <ion-button clear=\"true\" (click)=\"globals.toggleMenu()\">\n        <i class=\"material-icons\">menu</i>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Activities</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\" size-sm=\"8\" size-md=\"7\">\n        <ion-card class=\"no-shadow\" fullscreen *ngFor=\"let user of activities\">\n          <ion-card-content class=\"no-padding\">\n            <ion-item lines=\"none\">\n              <ion-avatar slot=\"start\">\n                <text-avatar [text]=\"user.name + 'i'\" [color]=\"color\"></text-avatar>\n              </ion-avatar>\n              <ion-label>\n                <ion-text>\n                  <h3>{{ user.name }}</h3>\n                </ion-text>\n                <p slot=\"end\">12 Febouray 2019</p>\n              </ion-label>\n            </ion-item>\n            <ion-item style=\"margin-top: -10px; background-color: transparent\" lines=\"none\">\n              <ion-avatar slot=\"start\"></ion-avatar>\n              <ion-label class=\"ion-text-wrap\">\n                <ion-grid class=\"no-padding\">\n                  <ion-row class=\"no-padding\">\n                    <ion-col *ngFor=\"let img of user.images\" size=\"6\">\n                      <img height=\"150px\" [src]=\"img\" />\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n                <p>By default, Firebase does not store fine-grain analytics data - only a sample is taken. does not store fine-grain analytics data - only a sample is taken.</p>\n              </ion-label>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/app/feed/feed.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/app/feed/feed.module.ts ***!
  \***********************************************/
/*! exports provided: FeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feed.page */ "./src/app/pages/app/feed/feed.page.ts");
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
        component: _feed_page__WEBPACK_IMPORTED_MODULE_5__["FeedPage"]
    }
];
var FeedPageModule = /** @class */ (function () {
    function FeedPageModule() {
    }
    FeedPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                src_app_components_ui_text_avatar__WEBPACK_IMPORTED_MODULE_6__["TextAvatarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_5__["FeedPage"]]
        })
    ], FeedPageModule);
    return FeedPageModule;
}());



/***/ }),

/***/ "./src/app/pages/app/feed/feed.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/app/feed/feed.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcC9mZWVkL2ZlZWQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/app/feed/feed.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/app/feed/feed.page.ts ***!
  \*********************************************/
/*! exports provided: FeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPage", function() { return FeedPage; });
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


var FeedPage = /** @class */ (function () {
    function FeedPage(globals) {
        this.globals = globals;
        this.color = "#ccc";
        this.activities = [
            { name: "Abdul Basit", company: "Siemens", job_title: "Technical Lead", images: [
                    "assets/img/wallpapers/God's Plan Reminders 1 Corinthians 6 19 - 20.jpg", "assets/img/wallpapers/God's Plan Reminders John 8 31 - 32.jpg"
                ] },
            { name: "Amin Ullah", company: "NBS", job_title: "BI Engineer" },
            { name: "Haris Altaf", company: "Siemens", job_title: "Technical Lead" },
            { name: "Muhammad Umair", company: "Siemens", job_title: "Software Engineer", images: [
                    "assets/img/wallpapers/God's Plan Reminders 1 Corinthians 6 19 - 20.jpg", "assets/img/wallpapers/God's Plan Reminders John 8 31 - 32.jpg"
                ] },
            { name: "Talal", company: "Siemens", job_title: "Software Engineer" },
            { name: "Usman Iftkhar", company: "Siemens", job_title: "Sr. Technical Lead" },
            { name: "Umar Hayat", company: "NBS", job_title: "Software Engineer", images: [
                    "assets/img/wallpapers/God's Plan Reminders 1 Corinthians 6 19 - 20.jpg", "assets/img/wallpapers/God's Plan Reminders John 8 31 - 32.jpg"
                ] }
        ];
    }
    FeedPage.prototype.ngOnInit = function () {
    };
    FeedPage.ctorParameters = function () { return [
        { type: src_app_providers_core_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalsProvider"] }
    ]; };
    FeedPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __importDefault(__webpack_require__(/*! raw-loader!./feed.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/feed/feed.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./feed.page.scss */ "./src/app/pages/app/feed/feed.page.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_providers_core_globals__WEBPACK_IMPORTED_MODULE_1__["GlobalsProvider"]])
    ], FeedPage);
    return FeedPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-feed-feed-module.js.map