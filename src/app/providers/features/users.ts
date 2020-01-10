import { Injectable, OnInit } from '@angular/core';
import { FirebaseDBProvider } from '../firebase/firebasedb';
import { FirebaseAuthProvider } from '../firebase/firebaseauth';
import { GlobalsProvider } from '../core/globals';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { MediaProvider } from '../core/media';
declare var $: any;
declare var window: any;

@Injectable()
export class UserProvider {

  stage: string = 'number';
  confirmation: any;
  user: any;
  path: string = "users/";
  constructor(
    private mediaProv: MediaProvider,
    private firedb: FirebaseDBProvider,
    private fireauth: FirebaseAuthProvider,
    private globals: GlobalsProvider
  ) {
  }

  getAuthCode(number: string) {
    $('#number').hide();
    this.fireauth.signIn({
      email: null,
      password: null,
      number: number
    }, 'phoneauth')
    .then((confirmation: any) => {
      if(!confirmation.verificationId) {
        this.globals.toastAlert(confirmation.message)
      } else {
        this.globals.toastAlert(`Verification code sent to ${number}`)
        this.confirmation = window.confirmation = confirmation;
        $('#captcha').hide();
        $('#number').show();
        this.stage = "code";
      }
    })
    .catch((error) => {
      this.globals.toastAlert(error.message)
      console.log(error);
    });
  }

  async verify(code: any) {
    return await new Promise((resolve, reject) => {
      if(window.confirmation.verificationId != null)
      {
        if(code != null)
        {
          window.confirmation.confirm(code)
          .then((result: any) => {
            resolve(result.user.providerData[0]);
          }).catch(function (error) {
            reject(error);
          });
        }
      }
    });
  }

  async getUserInfo() {
    return await new Promise((resolve, reject) => {
      this.fireauth.checkAuthState((user: any) => {
        if(user != null) {
          try {
            this.firedb.getFireData(`users/${user.uid}`)
            .then((userInfo: any) => {
              this.user = (userInfo == null)
              ? {
                firstname: null,
                lastname: null,
                phoneNumber: user.phoneNumber,
                email: null,
                address: null
              }
              : userInfo;
              resolve(this.user);
            })
          } catch(ex) {
            reject(ex.message);
          }
        } else {
          reject("User not found");
        }
      });
    });
  }

  async updateUserAccountInfo(account: any) {
    return await new Promise((resolve, reject) => {
      this.fireauth.checkAuthState((user: any) => {
        if(user != null) { 
          try {
            this.firedb.saveFireData(this.path + user.uid, account)
            .then((res: any) => {
              this.globals.closeLoader();
              if(account.photoURL != null) {
                this.fireauth.updateProfile({
                  displayName: account.firstname,
                  photoURL: account.photoURL,
                })
              }
              resolve(this.getUserInfo());
            })
          } catch(ex) {
            this.globals.closeLoader();
            reject(ex.message);
          }
        }
      })
    });
  }

}