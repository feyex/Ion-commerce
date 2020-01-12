(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Vendor-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Vendor/signup/signup.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Vendor/signup/signup.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"primary\">\n  <form [formGroup]=\"SignupForm\" (ngSubmit)=\"Register()\">\n    <ion-grid>\n      <ion-row color =\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg = \"5\" size-xs = \"12\">\n          <div text-center>\n            <h3>Create your account!</h3>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-input formControlName=\"firstname\" type=\"text\" placeholder=\"firstname\"  required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input formControlName=\"lastname\" type=\"text\" placeholder=\"lastname\"  required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input formControlName=\"username\" type=\"text\" placeholder=\"username\"  required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input formControlName=\"shop_name\" type=\"text\" placeholder=\"Shop name\"  required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input formControlName=\"email\" type=\"email\" placeholder=\"your@email.com\"  required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input formControlName=\"phone\" type=\"number\" placeholder=\"098765443\"  required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Password\"  required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input formControlName=\"address\" type=\"text\" placeholder=\"address\"  required></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button size=\"large\" type=\"submit\" [disabled]=\"!SignupForm.valid\" expand=\"block\">Register</ion-button>\n          </div>\n          <div padding>\n            <ion-item lines=\"none\">\n             <p color=\"light\" class=\"fs-12\">Already have an account? <a href=\"/vendor-login\">Login</a></p>\n            </ion-item>\n           </div>\n  \n        </ion-col>\n  \n      </ion-row>\n    </ion-grid>\n  \n  </form>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/Vendor/signup/signup.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/Vendor/signup/signup.module.ts ***!
  \******************************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/Vendor/signup/signup.page.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
        component: _signup_page__WEBPACK_IMPORTED_MODULE_4__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_4__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/pages/Vendor/signup/signup.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/Vendor/signup/signup.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: #3880ff;\n  --color: #fff;\n}\n\nion-button {\n  --background: #062f77;\n}\n\na {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvVmVuZG9yL3NpZ251cC9EOlxcbWluZVxca3JlYWRvci9zcmNcXGFwcFxccGFnZXNcXFZlbmRvclxcc2lnbnVwXFxzaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9WZW5kb3Ivc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9WZW5kb3Ivc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogIzM4ODBmZjtcclxuICAgIC0tY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwNjJmNzc7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufSIsImlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xuICAtLWNvbG9yOiAjZmZmO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDYyZjc3O1xufVxuXG5hIHtcbiAgY29sb3I6ICMwMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/Vendor/signup/signup.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/Vendor/signup/signup.page.ts ***!
  \****************************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/services/auth.service */ "./src/app/providers/services/auth.service.ts");
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





var SignupPage = /** @class */ (function () {
    function SignupPage(api, router, fb, zone, toast) {
        this.api = api;
        this.router = router;
        this.fb = fb;
        this.zone = zone;
        this.toast = toast;
        this.SignupForm = this.fb.group({
            firstname: [''],
            lastname: [''],
            username: [''],
            shop_name: [''],
            address: [''],
            phone: [''],
            email: [''],
            password: ['']
        });
    }
    SignupPage.prototype.ngOnInit = function () { };
    SignupPage.prototype.Register = function () {
        var _this = this;
        this.api.VendorSignup(this.SignupForm.value)
            .subscribe(function (res) {
            _this.zone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                var toasts, toasts;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log(res);
                            if (!(res.status == true)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.toast.create({
                                    message: 'Account Created Successfully',
                                    duration: 3000,
                                    position: 'top'
                                })];
                        case 1:
                            toasts = _a.sent();
                            toasts.present();
                            this.SignupForm.reset();
                            this.router.navigate(['/vendor-login']);
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, this.toast.create({
                                message: 'Account Creation Failed',
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
    SignupPage.ctorParameters = function () { return [
        { type: _providers_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    SignupPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __importDefault(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Vendor/signup/signup.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/Vendor/signup/signup.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_providers_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ }),

/***/ "./src/app/providers/services/auth.service.ts":
/*!****************************************************!*\
  !*** ./src/app/providers/services/auth.service.ts ***!
  \****************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
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





var AuthService = /** @class */ (function () {
    function AuthService(http, toast) {
        this.http = http;
        this.toast = toast;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.Api_Url = 'http://localhost:5000/v1';
    }
    AuthService.prototype.Signup = function (data) {
        return this.http.post(this.Api_Url + '/account', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Signup')));
    };
    AuthService.prototype.Login = function (data) {
        return this.http.post(this.Api_Url + '/login', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Login')));
    };
    AuthService.prototype.vendorLogin = function (data) {
        return this.http.post(this.Api_Url + '/vendor/login', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('Login')));
    };
    AuthService.prototype.VendorSignup = function (data) {
        return this.http.post(this.Api_Url + '/vendor', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('VendorSignUP')));
    };
    AuthService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) { return __awaiter(_this, void 0, void 0, function () {
            var toasts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: 'Invalid Credentials ',
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
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], AuthService);
    return AuthService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-Vendor-signup-signup-module.js.map