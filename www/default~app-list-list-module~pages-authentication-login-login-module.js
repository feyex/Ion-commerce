(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-list-list-module~pages-authentication-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/authentication/login/login.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/authentication/login/login.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" role=\"form\" class=\"form\">\n  <ion-list>\n    <ion-item>\n      <ion-label color=\"primary\" stacked>Email</ion-label>\n      <ion-input formControlName=\"email\" type=\"email\" placeholder=\"imsamnthasmith@example.com\"></ion-input>\n    </ion-item>\n    <!-- <div class=\"text-danger\">\n      <div *ngFor=\"let validation of validation_messages.email\">\n        <div class=\"error-message\" *ngIf=\"loginForm.get('email').hasError(validation.type) && loginForm.get('email').touched\">\n          <div>\n            <ion-icon slot=\"start\" name=\"information-circle\"></ion-icon>{{\"       \"+validation.message}}\n          </div>\n        </div>\n      </div>\n    </div> -->\n    <ion-item class=\"password\">\n      <ion-label color=\"primary\" stacked>Password</ion-label>\n      <ion-input formControlName=\"password\" type=\"password\" placeholder=\"******\"></ion-input>\n    </ion-item>\n    <!-- <div class=\"text-danger\">\n      <div *ngFor=\"let validation of validation_messages.password\" class=\"error\">\n        <div *ngIf=\"loginForm.get('password').hasError(validation.type) && loginForm.get('password').touched\">\n          <div>\n            <ion-icon slot=\"start\" name=\"information-circle\"></ion-icon>{{\"       \"+validation.message}}\n          </div>\n        </div>\n      </div>\n    </div> -->\n    <br />\n    <p color=\"light\" class=\"fs-12\">Can't remember you password ? <a>Recover password</a></p>\n    <br />\n    <ion-button [disabled]=\"loginForm.controls.email.invalid || loginForm.controls.password.invalid\"\n    type=\"submit\" ion-button expand=\"block\" margin=\"none\">\n      Sign In\n    </ion-button>\n  </ion-list>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/authentication/phoneauth/phoneauth.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/authentication/phoneauth/phoneauth.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  <form role=\"form\" [formGroup]=\"authForm\" (ngSubmit)=\"sendAuthCode(authForm.value)\">\n    <ion-item mode=\"ios\" no-lines>\n      <ion-select mode=\"md\" [(ngModel)]=\"ext\" [ngModelOptions]=\"{standalone: true}\" align=\"left\" color=\"dark\" item-start interface=\"action-sheet\">\n        <ion-select-option value=\"+234\">NG (+234)</ion-select-option>\n        <ion-select-option value=\"+233\">GH (+233)</ion-select-option>\n      </ion-select>\n      <ion-input aria-required=\"true\" maxlength=\"11\" minlength=\"10\" formControlName=\"number\" type=\"number\" placeholder=\"XXX-XXXX-XXX\"></ion-input>\n      <ion-button class=\"hidden-md\" style=\"margin-right: -10px;\" [disabled]=\"authForm?.controls?.number?.invalid\" type=\"submit\" item-end color=\"black\">\n        <ion-icon class=\"fs-25 bold\" name=\"ios-arrow-round-forward-outline\"></ion-icon>\n      </ion-button>\n    </ion-item>\n    <ion-button class=\"hidden-xs\" [disabled]=\"authForm?.controls?.number?.invalid\" type=\"submit\" expand=\"block\" color=\"darkgray\">\n      Validate Your Number\n    </ion-button>\n  </form>\n\n  <div id=\"recaptcha-container\" full></div>\n\n  <div id=\"number\">\n  \n    <ion-item no-lines class=\"hidden-xs\">\n      <ion-label>\n        <h2 color=\"dark\">Confirm your device</h2>\n        <p>enter the one time code sent to your device</p>\n      </ion-label>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label color=\"darkgray\"class=\"hidden-md\" item-start>Code</ion-label>\n      <ion-input type=\"number\" placeholder=\"Enter Your verfication code\" [(ngModel)]=\"code\" name=\"code\" aria-required=\"true\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"></ion-input>\n    </ion-item>\n    <br />\n    <ion-button [disabled]=\"!code\" type=\"ion-button\" (click)=\"verifyCode()\" ion-ion-button color=\"darkgray\" block>Validate Code</ion-button>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/authentication/profile-info/profile-info.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/authentication/profile-info/profile-info.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n  <form [formGroup]=\"profileForm\" role=\"form\" (ngSubmit)=\"saveProfile(profileForm.value)\" role=\"form\">\n    <input accept=\"image/*\" (change)=\"onFileChange($event)\" type=\"file\" class=\"hidden\" id=\"profile-image\" />\n    <ion-list>\n      <ion-item no-lines>\n        <ion-avatar (click)=\"openImage()\" item-start>\n          <img style=\"width: 80px; height: 80px\" id=\"preview\" *ngIf=\"!profileForm?.controls?.photoURL?.value\" src=\"assets/icon/002-user.svg\">\n          <img style=\"width: 80px; height: 80px\" *ngIf=\"profileForm?.controls?.photoURL?.value\" src=\"{{profileForm?.controls?.photoURL?.value }}\">\n        </ion-avatar>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"dark\" stacked>Firstname</ion-label>\n        <ion-input formControlName=\"firstname\" type=\"text\" placeholder=\"Enter your firstname\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"dark\" stacked>Lastname</ion-label>\n        <ion-input formControlName=\"lastname\" type=\"text\" placeholder=\"Enter your lastname\"></ion-input>\n      </ion-item>\n      <ion-item no-lines>\n        <ion-label color=\"dark\" stacked>Number</ion-label>\n      </ion-item>\n      <ion-item mode=\"ios\" style=\"margin-top: -17px\">\n        <ion-select [(ngModel)]=\"ext\" [ngModelOptions]=\"{standalone: true}\" align=\"left\" color=\"dark\" item-start interface=\"action-sheet\">\n          <ion-option value=\"+234\">NG (+234)</ion-option>\n          <ion-option value=\"+233\">GH (+233)</ion-option>\n        </ion-select>\n        <ion-input aria-required=\"true\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" maxlength=\"10\" minlength=\"10\" formControlName=\"phoneNumber\" type=\"text\" placeholder=\"+xxxx-xxxx-xxxx-xxxx\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label color=\"dark\" stacked>Email</ion-label>\n        <ion-input formControlName=\"email\" type=\"text\" placeholder=\"test@example.com\"></ion-input>\n      </ion-item>\n      <ion-item no-lines>\n        <ion-label stacked>Address</ion-label>\n        <ion-textarea formControlName=\"address\" type=\"text\" placeholder=\"your address\"></ion-textarea>\n      </ion-item>\n      <button mode=\"ios\" class=\"submit hidden\" type=\"submit\" ion-button block>\n        Submit\n      </button>\n      <button (click)=\"submitForm()\" mode=\"ios\" type=\"button\" color=\"black\" ion-button block>\n        Save Your Profile\n      </button>\n      <br />\n      <br />\n    </ion-list>\n  </form> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ui/error/error.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ui/error/error.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div padding align=\"center\" id=\"center\">\n      <img class=\"animated bounceIn nocontent\" style=\"width: 150px\" src=\"assets/icon/error.png\">\n      <h3 style=\"margin-top: 20px\">\n        <ng-content class=\"nocontent-text\"></ng-content>\n      </h3>\n      <p style=\"width: 250px\">\n        <ng-content class=\"nocontent-description\"></ng-content>\n      </p>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ui/nocontent/nocontent.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ui/nocontent/nocontent.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <div padding align=\"center\" id=\"center\">\n      <img style=\"width: 100px;\" class=\"animated fadeIn\" src=\"assets/icon/nocontent.png\">\n      <p>\n        <ng-content class=\"nocontent-text\"></ng-content>\n      </p>\n    </div>\n    ");

/***/ }),

/***/ "./src/app/components/authentication/login/login.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/authentication/login/login.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_features_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/features/users */ "./src/app/providers/features/users.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _providers_core_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/core/globals */ "./src/app/providers/core/globals.ts");
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





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, globals, navCtrl) {
        this.userService = userService;
        this.globals = globals;
        this.navCtrl = navCtrl;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]))
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
    }
    LoginComponent.prototype.login = function () {
        console.log("Login form is", this.loginForm.value);
        this.globals.showLoader({
            content: "Signing in to your account ..."
        });
        // this.userService.login(this.loginForm.value).then(resp=>{
        //   loader.dismiss();
        //   console.log("resp is",resp);
        //   if (resp=="verified"){
        //     this.navCtrl.setRoot('EditProfilePage');
        //   }
        // }).catch(err=>{
        //   loader.dismiss();
        //   console.log("Login error is ",err);
        // })
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _providers_features_users__WEBPACK_IMPORTED_MODULE_1__["UserProvider"] },
        { type: _providers_core_globals__WEBPACK_IMPORTED_MODULE_4__["GlobalsProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/authentication/login/login.html")).default
        }),
        __metadata("design:paramtypes", [_providers_features_users__WEBPACK_IMPORTED_MODULE_1__["UserProvider"],
            _providers_core_globals__WEBPACK_IMPORTED_MODULE_4__["GlobalsProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/authentication/phoneauth/phoneauth.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/authentication/phoneauth/phoneauth.ts ***!
  \******************************************************************/
/*! exports provided: PhoneauthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneauthComponent", function() { return PhoneauthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _providers_core_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/core/globals */ "./src/app/providers/core/globals.ts");
/* harmony import */ var _providers_features_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/features/users */ "./src/app/providers/features/users.ts");
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





var PhoneauthComponent = /** @class */ (function () {
    function PhoneauthComponent(uData, navCtrl, globals) {
        this.uData = uData;
        this.navCtrl = navCtrl;
        this.globals = globals;
        this.authForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.ext = '+234';
    }
    PhoneauthComponent.prototype.sendAuthCode = function (form) {
        var arr = form.number.split('');
        (arr[0] == '0')
            ? delete arr[0]
            : null;
        this.uData.stage = "captcha";
        // setTimeout(() => {
        this.uData.getAuthCode(this.ext + arr.join(''));
        // }, 1000);
    };
    PhoneauthComponent.prototype.verifyCode = function () {
        var _this = this;
        this.uData.verify(this.code)
            .then(function (user) {
            if (user) {
                _this.globals.toastAlert('Successful login');
                _this.globals.config.walkthrough = true;
                _this.globals.config.login = true;
                _this.globals.storage.saveItem('appconfig', _this.globals.config);
                _this.globals.storage.saveItem('userdata', user);
                _this.globals.showLoader({
                    content: 'checking if you have a profile .....'
                });
                _this.uData.getUserInfo()
                    .then(function (user) {
                    _this.globals.userData = user;
                    _this.globals.closeLoader();
                    (user.firstname !== null)
                        ? _this.navCtrl.navigateRoot('app/dashboard')
                        : _this.navCtrl.navigateForward('ProfilePage');
                })
                    .catch(function (err) {
                    console.log(err);
                    _this.globals.closeLoader();
                });
            }
            else {
                _this.globals.toastAlert('User can`t not logged in');
            }
        })
            .catch(function (err) {
            _this.globals.toastAlert(err.message);
        });
    };
    PhoneauthComponent.prototype.chooseLanguage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.globals.actionSheetCtrl.create({
                            mode: 'md',
                            buttons: [
                                {
                                    text: 'NIGERIA (NG)',
                                    handler: function () {
                                        console.log();
                                    }
                                }, {
                                    text: 'SOUTH AFRICA (SA)',
                                    handler: function () {
                                        console.log('Archive clicked');
                                    }
                                }, {
                                    text: 'Cancel',
                                    role: 'cancel',
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        actionSheet.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PhoneauthComponent.ctorParameters = function () { return [
        { type: _providers_features_users__WEBPACK_IMPORTED_MODULE_4__["UserProvider"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
        { type: _providers_core_globals__WEBPACK_IMPORTED_MODULE_3__["GlobalsProvider"] }
    ]; };
    PhoneauthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'phoneauth',
            template: __importDefault(__webpack_require__(/*! raw-loader!./phoneauth.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/authentication/phoneauth/phoneauth.html")).default
        }),
        __metadata("design:paramtypes", [_providers_features_users__WEBPACK_IMPORTED_MODULE_4__["UserProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _providers_core_globals__WEBPACK_IMPORTED_MODULE_3__["GlobalsProvider"]])
    ], PhoneauthComponent);
    return PhoneauthComponent;
}());



/***/ }),

/***/ "./src/app/components/authentication/profile-info/profile-info.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/authentication/profile-info/profile-info.ts ***!
  \************************************************************************/
/*! exports provided: ProfileInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInfoComponent", function() { return ProfileInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _providers_firebase_firebasestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/firebase/firebasestore */ "./src/app/providers/firebase/firebasestore.ts");
/* harmony import */ var _providers_firebase_firebaseauth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../providers/firebase/firebaseauth */ "./src/app/providers/firebase/firebaseauth.ts");
/* harmony import */ var _providers_features_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../providers/features/users */ "./src/app/providers/features/users.ts");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var ProfileInfoComponent = /** @class */ (function () {
    function ProfileInfoComponent(firestore, fireauth, uData, globals) {
        this.firestore = firestore;
        this.fireauth = fireauth;
        this.uData = uData;
        this.globals = globals;
        this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            photoURL: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])+.(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")]),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-zA-Z]+\\s?[a-zA-Z]*\\s?[a-zA-Z]*")]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-zA-Z]+\\s?[a-zA-Z]*\\s?[a-zA-Z]*")]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("([0-9])*")]),
        });
    }
    ProfileInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.globals.showLoader({
        //   content: 'getting your profile info .....'
        // })
        this.uData.getUserInfo()
            .then(function (user) {
            // this.globals.closeLoader();
            var arr = user.phoneNumber.split('');
            _this.ext = arr[0] + arr[1] + arr[2] + arr[3];
            delete arr[0];
            delete arr[1];
            delete arr[2];
            delete arr[3];
            user.phoneNumber = arr.join('');
            _this.profileForm.patchValue(user);
        })
            .catch(function (err) {
            console.log(err);
            // this.globals.closeLoader();
        });
    };
    ProfileInfoComponent.prototype.onFileChange = function (event) {
        var _this = this;
        // let loader = this.globals.loading.create({
        //   content: "Uploading profile image ...."
        // });
        // loader.present();
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file = event.target.files[0];
            reader.readAsDataURL(file);
            try {
                this.firestore.saveFiles('profile/profile_image' + this.fireauth.currentUser().currentUser.uid, file, function (url) {
                    _this.profileForm.patchValue({ 'photoURL': url });
                });
                // loader.dismiss();
            }
            catch (ex) {
                console.log("Error while uploading profile image is", ex);
                // loader.dismiss();
                this.globals.toastAlert(ex.message);
            }
        }
        else {
            // loader.dismiss();
            this.globals.toastAlert("File upload error ..");
        }
    };
    ProfileInfoComponent.prototype.openImage = function () {
        $('input#profile-image').click();
    };
    ProfileInfoComponent.prototype.saveProfile = function (form) {
        var _this = this;
        this.globals.showLoader({
            content: "Updating profile info ..."
        });
        form.phoneNumber = this.ext + form.phoneNumber;
        this.uData.updateUserAccountInfo(form)
            .then(function (res) {
            _this.globals.closeLoader();
            _this.globals.toastAlert("Profile Information updated");
            console.log(res);
        })
            .catch(function (err) {
            _this.globals.closeLoader();
            _this.globals.toastAlert(err);
        });
    };
    ProfileInfoComponent.ctorParameters = function () { return [
        { type: _providers_firebase_firebasestore__WEBPACK_IMPORTED_MODULE_2__["FirebaseStorageProvider"] },
        { type: _providers_firebase_firebaseauth__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthProvider"] },
        { type: _providers_features_users__WEBPACK_IMPORTED_MODULE_4__["UserProvider"] },
        { type: _providers_core_globals__WEBPACK_IMPORTED_MODULE_5__["GlobalsProvider"] }
    ]; };
    ProfileInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile-info',
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile-info.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/authentication/profile-info/profile-info.html")).default
        }),
        __metadata("design:paramtypes", [_providers_firebase_firebasestore__WEBPACK_IMPORTED_MODULE_2__["FirebaseStorageProvider"],
            _providers_firebase_firebaseauth__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthProvider"],
            _providers_features_users__WEBPACK_IMPORTED_MODULE_4__["UserProvider"],
            _providers_core_globals__WEBPACK_IMPORTED_MODULE_5__["GlobalsProvider"]])
    ], ProfileInfoComponent);
    return ProfileInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: component, ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ui_nocontent_nocontent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/nocontent/nocontent */ "./src/app/components/ui/nocontent/nocontent.ts");
/* harmony import */ var _ui_error_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/error/error */ "./src/app/components/ui/error/error.ts");
/* harmony import */ var _authentication_phoneauth_phoneauth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/phoneauth/phoneauth */ "./src/app/components/authentication/phoneauth/phoneauth.ts");
/* harmony import */ var _authentication_profile_info_profile_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication/profile-info/profile-info */ "./src/app/components/authentication/profile-info/profile-info.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _authentication_login_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/login/login */ "./src/app/components/authentication/login/login.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var component = [
    _ui_nocontent_nocontent__WEBPACK_IMPORTED_MODULE_2__["NocontentComponent"], _ui_error_error__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"],
    _authentication_phoneauth_phoneauth__WEBPACK_IMPORTED_MODULE_4__["PhoneauthComponent"], _authentication_login_login__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
    _authentication_profile_info_profile_info__WEBPACK_IMPORTED_MODULE_5__["ProfileInfoComponent"]
];
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: component,
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"]
            ],
            exports: component
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/ui/error/error.ts":
/*!**********************************************!*\
  !*** ./src/app/components/ui/error/error.ts ***!
  \**********************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
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

/**
 * Generated class for the ErrorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
        console.log('Hello ErrorComponent Component');
        this.text = 'Hello World';
    }
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'error',
            template: __importDefault(__webpack_require__(/*! raw-loader!./error.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ui/error/error.html")).default
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/ui/nocontent/nocontent.ts":
/*!******************************************************!*\
  !*** ./src/app/components/ui/nocontent/nocontent.ts ***!
  \******************************************************/
/*! exports provided: NocontentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NocontentComponent", function() { return NocontentComponent; });
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

var NocontentComponent = /** @class */ (function () {
    function NocontentComponent() {
    }
    NocontentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'no-content',
            template: __importDefault(__webpack_require__(/*! raw-loader!./nocontent.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ui/nocontent/nocontent.html")).default
        }),
        __metadata("design:paramtypes", [])
    ], NocontentComponent);
    return NocontentComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-list-list-module~pages-authentication-login-login-module.js.map