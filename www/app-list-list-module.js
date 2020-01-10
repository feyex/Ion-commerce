(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-list-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/list/list.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/list/list.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let user of users\">\n      <ion-avatar slot=\"start\">\n        <text-avatar [text]=\"user.name + 'i'\" [color]=\"user.color\"></text-avatar>\n      </ion-avatar>\n      \n      <ion-label>\n        <ion-text>\n          <h3>{{ user.name }}</h3>\n        </ion-text>\n        <p>{{ user.company }} - {{ user.job_title }}</p>\n      </ion-label>\n    </ion-item>\n    <ion-item *ngFor=\"let item of items\">\n      <ion-avatar color=\"primary\" slot=\"start\">\n        <ion-icon [name]=\"item.icon\"></ion-icon>\n      </ion-avatar>\n      <ion-label>\n        <ion-text><h3>{{item.title}}</h3></ion-text>\n        <p>{{item.note}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/app/list/list.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/app/list/list.module.ts ***!
  \***********************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/app/list/list.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_components_ui_text_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/ui/text-avatar */ "./src/app/components/ui/text-avatar/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                src_app_components_ui_text_avatar__WEBPACK_IMPORTED_MODULE_7__["TextAvatarModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _list_page__WEBPACK_IMPORTED_MODULE_5__["ListPage"]
                    }
                ])
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_5__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/app/list/list.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/app/list/list.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcC9saXN0L2xpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/app/list/list.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/app/list/list.page.ts ***!
  \*********************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
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

var ListPage = /** @class */ (function () {
    function ListPage() {
        this.color = "#ff0000";
        this.icons = [
            'flask',
            'wifi',
            'beer',
            'football',
            'basketball',
            'paper-plane',
            'american-football',
            'boat',
            'bluetooth',
            'build'
        ];
        this.users = [
            { name: "Abdul Basit", company: "Siemens", job_title: "Technical Lead", color: '#ccc' },
            { name: "Amin Ullah", company: "NBS", job_title: "BI Engineer" },
            { name: "Haris Altaf", company: "Siemens", job_title: "Technical Lead" },
            { name: "Muhammad Umair", company: "Siemens", job_title: "Software Engineer" },
            { name: "Talal", company: "Siemens", job_title: "Software Engineer" },
            { name: "Usman Iftkhar", company: "Siemens", job_title: "Sr. Technical Lead" },
            { name: "Umar Hayat", company: "NBS", job_title: "Software Engineer" }
        ];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.ngOnInit = function () {
    };
    ListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/app/list/list.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./list.page.scss */ "./src/app/pages/app/list/list.page.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ListPage);
    return ListPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-list-list-module.js.map