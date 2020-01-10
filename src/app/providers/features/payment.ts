import { Injectable, OnInit } from '@angular/core';
import { UserProvider } from './users';
import { GlobalsProvider } from '../core/globals';
import { FirebaseDBProvider } from '../firebase/firebasedb';
declare var $:any;

@Injectable()
export class PaymentsProvider implements OnInit {
    user: any;
    paystack: any = {
        "url": "https://api.paystack.co/",
        "public_key": "pk_test_168b9a3d26c300225684aa04a01160a700ff9510",
        "secret_key": "sk_test_a0d0acba6cec362f3db8bac0985e37ba2a482e8d"
    };
    data: any = {
        'amount': 100000,
        'ref': 0,
        'accountNumber': 0,
    };
    form: any = {
        "amount": null,
        "transaction": {
            "type": null
        }
    };
    plan: any;
    account: string;
    listing: any;

    ajaxSettings: any = {
        "async": true,
        "crossDomain": true,
        "url": null,
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
          "Authorization": "Bearer " + this.paystack.secret_key,
          "Cache-Control": "no-cache"
        },
        "processData": false,
        "data": null,
    }

    constructor(
        private globals: GlobalsProvider,
        private uService: UserProvider,
        private firedb: FirebaseDBProvider
    ) {
    }

    ngOnInit() {
        this.uService.getUserInfo()
        .then((res: any) => {
            this.user = this.uService.user;
        })
    }

    // 
    registerPaystackCustomer(email: string, callback: any) {
        this.ajaxSettings.url = this.paystack.url + "customer";
        this.ajaxSettings.method = "POST";
        this.ajaxSettings.data = JSON.stringify({
            "email": email,
        });
        $.ajax(this.ajaxSettings).done(function (res: any) {
            if(res.message == "Customer created" || res.status == true) {
                callback(res.data);
            } else {
                this.globals.toastCtrl.create({
                    message: res.message,
                    duration: 3000,
                }).present();
            }
        });
    }

    saveAuthCodeInfo(cardInfo: any) {
        let form = [];
        for(let i in cardInfo) {
            form[i] = cardInfo[i];
        }
        this.firedb.addFireData("authcodes/" + this.user.customer_details, form)
        .then((res: any) => {
            console.log(res);
        })
        .catch((err: any) => {
            this.globals.toastAlert(JSON.stringify(err.error));
        });
    }

    getAuthCodes() {
        return this.firedb.getFireData("authcodes/" + this.uService.user.uid);
    }


    /// Paystack functions

    initializeTransaction(amount: any, callback: any) {
        this.ajaxSettings.url = this.paystack.url + "transaction/initialize";
        this.ajaxSettings.data = JSON.stringify({
            "amount": this.globals.convertToThousand(amount),
            "email": this.uService.user.email,
            "callback_url": "https://us-central1-digisave-2d2b1.cloudfunctions.net/verifyPaystack"
        });
        this.ajaxSettings.method = "POST";
        $.ajax(this.ajaxSettings).done(function (res: any) {
            if(res.data.authorization_url) {
              callback(res);
            } else {
              this.globals.toastAlert((res.error) ? res.error : res.respose, {
                position: "bottom"
            });
            }
        });
    }

    confirmPaystackTransaction(ref: string, callback: any) {
        this.ajaxSettings.url = this.paystack.url + "transaction/verify/" + ref;
        this.ajaxSettings.method = "GET";
        $.ajax(this.ajaxSettings).done(function (res: any) {
            if(res.message == "Verification successful" && res.data.authorization.authorization_code) {
              callback(res.data);
            } else {
              this.globals.toastAlert((res.error) ? res.error : res.respose, {
                position: "bottom"
            });
            }
        });
    }

    chargeUserUsingPaystackAuthCode(data: {authcode: string, amount: number, email: string}, callback: any) {
        this.ajaxSettings.url = this.paystack.url + "transaction/charge_authorization";
        this.ajaxSettings.data = JSON.stringify({
            "amount": this.globals.convertToThousand(data.amount),
            "email": data.email,
            "authorization_code": data.authcode,
        });
        $.ajax(this.ajaxSettings).done(function (res: any) {
            if(res.data.authorization_url) {
              callback(res);
            } else {
              this.globals.toastAlert((res.error) ? res.error : res.respose, {
                position: "bottom"
            });
            }
        });
    }
}