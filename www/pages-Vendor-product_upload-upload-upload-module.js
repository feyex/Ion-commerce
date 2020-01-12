(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Vendor-product_upload-upload-upload-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Vendor/product_upload/upload/upload.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Vendor/product_upload/upload/upload.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content color=\"light\">\n  <form [formGroup]=\"productForm\" (ngSubmit)=\"Register()\">\n    <ion-grid>\n      <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg = \"5\" size-xs = \"12\">\n          <div text-center>\n            <h3>Upload Products and Sell !</h3>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-label color=\"dark\">Product Name</ion-label>\n              <ion-input formControlName=\"product_name\" type=\"text\"  required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label color=\"dark\">Product_Image</ion-label>\n              <ion-input name=\"photo\" type=\"file\"  required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label color=\"dark\">Quantity</ion-label>\n              <ion-input formControlName=\"quantity\" type=\"number\" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label color=\"dark\">Color</ion-label>\n              <ion-input formControlName=\"color\" type=\"text\" ></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label color=\"dark\">Product SKU</ion-label>\n              <ion-input formControlName=\"sku\" type=\"text\" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label color=\"dark\">Price</ion-label>\n              <ion-input formControlName=\"price\" type=\"number\" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label color=\"dark\">Previous Price</ion-label>\n              <ion-input formControlName=\"previous_price\" type=\"password\" placeholder=\"Password\"  required></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button size=\"large\" type=\"submit\" [disabled]=\"!productForm.valid\" expand=\"block\">Upload</ion-button>\n          </div>\n        </ion-col>\n  \n      </ion-row>\n    </ion-grid>\n  \n  </form>\n  \n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/Vendor/product_upload/upload/upload.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/Vendor/product_upload/upload/upload.module.ts ***!
  \*********************************************************************/
/*! exports provided: UploadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPageModule", function() { return UploadPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _upload_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload.page */ "./src/app/pages/Vendor/product_upload/upload/upload.page.ts");
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
        component: _upload_page__WEBPACK_IMPORTED_MODULE_5__["UploadPage"]
    }
];
var UploadPageModule = /** @class */ (function () {
    function UploadPageModule() {
    }
    UploadPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_upload_page__WEBPACK_IMPORTED_MODULE_5__["UploadPage"]]
        })
    ], UploadPageModule);
    return UploadPageModule;
}());



/***/ }),

/***/ "./src/app/pages/Vendor/product_upload/upload/upload.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/Vendor/product_upload/upload/upload.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: #f9f9fa;\n  --color: #fff;\n}\n\nion-button {\n  --background: #062f77;\n}\n\nion-label {\n  --color: #000;\n}\n\na {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvVmVuZG9yL3Byb2R1Y3RfdXBsb2FkL3VwbG9hZC9EOlxcbWluZVxca3JlYWRvci9zcmNcXGFwcFxccGFnZXNcXFZlbmRvclxccHJvZHVjdF91cGxvYWRcXHVwbG9hZFxcdXBsb2FkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvVmVuZG9yL3Byb2R1Y3RfdXBsb2FkL3VwbG9hZC91cGxvYWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvVmVuZG9yL3Byb2R1Y3RfdXBsb2FkL3VwbG9hZC91cGxvYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOWY5ZmE7XHJcbiAgICAtLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24tYnV0dG9ue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDYyZjc3O1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICAtLWNvbG9yOiAjMDAwO1xyXG59XHJcbmF7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufSIsImlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjlmOWZhO1xuICAtLWNvbG9yOiAjZmZmO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDYyZjc3O1xufVxuXG5pb24tbGFiZWwge1xuICAtLWNvbG9yOiAjMDAwO1xufVxuXG5hIHtcbiAgY29sb3I6ICMwMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/Vendor/product_upload/upload/upload.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/Vendor/product_upload/upload/upload.page.ts ***!
  \*******************************************************************/
/*! exports provided: UploadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPage", function() { return UploadPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../providers/services/product.service */ "./src/app/providers/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var UploadPage = /** @class */ (function () {
    function UploadPage(api, router, fb, zone, toast) {
        this.api = api;
        this.router = router;
        this.fb = fb;
        this.zone = zone;
        this.toast = toast;
        this.productForm = this.fb.group({
            vendor_id: [localStorage.user_id],
            photo: [null],
            product_name: [''],
            quantity: [''],
            color: [''],
            sku: [''],
            price: [''],
            previous_price: ['']
        });
    }
    UploadPage.prototype.ngOnInit = function () { };
    //Get photo value
    UploadPage.prototype.fileChanged = function (event) {
        var file = event.target.files[0];
        this.productForm.patchValue({
            photo: file
        });
        this.productForm.get('photo').updateValueAndValidity();
        console.log('thumb', file);
    };
    // Submit product
    UploadPage.prototype.onsubmit = function () {
        var _this = this;
        var formData = new FormData();
        formData.append("sku", this.productForm.get('sku').value);
        formData.append("product_name", this.productForm.get('product_name').value);
        formData.append("vendor_id", this.productForm.get('vendor_id').value);
        formData.append("photo", this.productForm.get('photo').value);
        formData.append("color", this.productForm.get('color').value);
        formData.append("price", this.productForm.get('price').value);
        formData.append("previous_price", this.productForm.get('previous_price').value);
        this.api.create(formData)
            .subscribe(function (res) {
            _this.zone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                var toasts, toasts;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log(res);
                            if (!(res.status == true)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.toast.create({
                                    message: 'Product Created Successfully',
                                    duration: 3000,
                                    position: 'top'
                                })];
                        case 1:
                            toasts = _a.sent();
                            toasts.present();
                            this.productForm.reset();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, this.toast.create({
                                message: 'Failed to upload produucts',
                                duration: 3000,
                                position: 'top'
                            })];
                        case 3:
                            toasts = _a.sent();
                            toasts.present();
                            _a.label = 4;
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    UploadPage.ctorParameters = function () { return [
        { type: _providers_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    UploadPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __importDefault(__webpack_require__(/*! raw-loader!./upload.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Vendor/product_upload/upload/upload.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./upload.page.scss */ "./src/app/pages/Vendor/product_upload/upload/upload.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_providers_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], UploadPage);
    return UploadPage;
}());



/***/ }),

/***/ "./src/app/providers/services/product.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/providers/services/product.service.ts ***!
  \*******************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var ProductService = /** @class */ (function () {
    function ProductService(http, toast) {
        this.http = http;
        this.toast = toast;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.Api_Url = 'http://localhost:5000/v1';
    }
    ProductService.prototype.create = function (data) {
        return this.http.post(this.Api_Url + ',', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Product Upload')));
    };
    ProductService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) { return __awaiter(_this, void 0, void 0, function () {
            var toasts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: 'Please input fields correctly',
                            duration: 3000,
                            position: 'top'
                        })];
                    case 1:
                        toasts = _a.sent();
                        toasts.present();
                        console.error(error);
                        console.log(operation + " failed: " + error.message);
                        return [2 /*return*/, Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result)];
                }
            });
        }); };
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], ProductService);
    return ProductService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Vendor-product_upload-upload-upload-module.js.map