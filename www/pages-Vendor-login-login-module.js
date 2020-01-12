(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-Vendor-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Vendor/login/login.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Vendor/login/login.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"primary\">\n\n<form [formGroup]=\"LoginForm\">\n  <ion-grid>\n    <ion-row color =\"primary\" justify-content-center>\n      <ion-col align-self-center size-md=\"6\" size-lg = \"5\" size-xs = \"12\">\n        <div text-center>\n          <h3>Login your account!</h3>\n        </div>\n        <div padding>\n          <ion-item lines=\"none\">\n            <ion-label>\n              <h2 color=\"dark\" class=\"fs-20\">Let's get started:</h2>\n              <p class=\"fs-12\"class=\"ion-text-wrap\">access your account information using your device phones number</p>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-input formControlName=\"email\" type=\"email\" placeholder=\"your@email.com\" ngModel required></ion-input>\n          </ion-item>\n          \n          <ion-item>\n            <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Password\" ngModel required></ion-input>\n          </ion-item>\n        </div>\n        <div padding>\n         <ion-item lines=\"none\">\n          <p color=\"light\" class=\"fs-12\">Can't remember your password ? <a color=\"light\">Recover password</a></p>\n         </ion-item>\n        </div>\n        \n        <div padding>\n          <ion-button size=\"large\" type=\"submit\" (click)=\"login()\" [disabled]=\"!LoginForm.valid\" expand=\"block\">Login</ion-button>\n        </div>\n        <div padding>\n          <ion-item lines=\"none\">\n           <p color=\"light\" class=\"fs-12\">Not yet registered <a href=\"/vendor\">Signup</a></p>\n          </ion-item>\n         </div>\n\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</form>\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/Vendor/login/login.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/Vendor/login/login.module.ts ***!
  \****************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/Vendor/login/login.page.ts");
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
        component: _login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"]
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
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/Vendor/login/login.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/Vendor/login/login.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: #3880ff;\n  --color: #fff;\n}\n\nion-button {\n  --background: #062f77;\n}\n\na {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvVmVuZG9yL2xvZ2luL0Q6XFxtaW5lXFxrcmVhZG9yL3NyY1xcYXBwXFxwYWdlc1xcVmVuZG9yXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9WZW5kb3IvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvVmVuZG9yL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMzg4MGZmO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW9uLWJ1dHRvbntcclxuICAgIC0tYmFja2dyb3VuZDogIzA2MmY3NztcclxufVxyXG5cclxuYXtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59IiwiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6ICMzODgwZmY7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6ICMwNjJmNzc7XG59XG5cbmEge1xuICBjb2xvcjogIzAwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/Vendor/login/login.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/Vendor/login/login.page.ts ***!
  \**************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/services/auth.service */ "./src/app/providers/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _providers_core_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../providers/core/globals */ "./src/app/providers/core/globals.ts");
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






var LoginPage = /** @class */ (function () {
    function LoginPage(api, globals, router, fb, zone, toast) {
        this.api = api;
        this.globals = globals;
        this.router = router;
        this.fb = fb;
        this.zone = zone;
        this.toast = toast;
        this.LoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]))
        });
        this.validation_messages = {
            email: [
                { type: "required", message: "Email is required." },
                {
                    type: "minlength",
                    message: "Email must be at least 5 characters long."
                },
                { type: "pattern", message: "Email must be valid." },
                { type: "email", message: "Email must be valid" }
            ],
            password: [
                { type: "required", message: "Password is required." },
                {
                    type: "minlength",
                    message: "Password must be at least 6 characters long."
                }
            ]
        };
        this.LoginForm = this.fb.group({
            email: [''],
            password: ['']
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.api.vendorLogin(this.LoginForm.value)
            .subscribe(function (res) {
            _this.zone.run(function () { return __awaiter(_this, void 0, void 0, function () {
                var toasts, toasts;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log(res);
                            if (!(res.status == true && res.verified == true)) return [3 /*break*/, 1];
                            this.LoginForm.reset();
                            localStorage.setItem('token', res.token);
                            localStorage.setItem('user_id', res.id);
                            this.router.navigate(['/overview']);
                            return [3 /*break*/, 5];
                        case 1:
                            if (!(res.status == true && res.verified == false)) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.toast.create({
                                    message: 'Please go to email to confirm account ',
                                    duration: 3000,
                                    position: 'top'
                                })];
                        case 2:
                            toasts = _a.sent();
                            toasts.present();
                            return [3 /*break*/, 5];
                        case 3: return [4 /*yield*/, this.toast.create({
                                message: 'Invalid Username or Password ',
                                duration: 3000,
                                position: 'top'
                            })];
                        case 4:
                            toasts = _a.sent();
                            toasts.present();
                            _a.label = 5;
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: _providers_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _providers_core_globals__WEBPACK_IMPORTED_MODULE_5__["GlobalsProvider"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/Vendor/login/login.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/Vendor/login/login.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_providers_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _providers_core_globals__WEBPACK_IMPORTED_MODULE_5__["GlobalsProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], LoginPage);
    return LoginPage;
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
//# sourceMappingURL=pages-Vendor-login-login-module.js.map