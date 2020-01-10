import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GlobalsProvider } from '../core/globals';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import * as firebase from 'firebase/app';
import 'firebase/messaging';
declare var $: any;


@Injectable()

export class FcmProvider 
{
  
  constructor(
    public platform: Platform,
    private globals: GlobalsProvider,
    private fire: FirebaseX
  ){
    if(!this.platform.is('cordova'))
    { 
      try {
        this.getPwaToken()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      } catch (e) {
        console.log('Unable to Instantiate Firebase Messaing', e);
      }
    }
    else if(this.platform.is('cordova'))
    {
      this.getCordovaToken()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  updateToken = async () =>
  {
    return await new Promise((resolve, reject) => {
      firebase.messaging().getToken()
        .then((currentToken:any) => {
          if (currentToken) {
            return this.saveToken(currentToken);
          } else {
            resolve('No Instance ID token available. Request permission to generate one.');
          }
        })
        .catch((err) => {
          reject("error updating fire "+ JSON.stringify(err));
        });
      })
  }

  saveToken = (token: any) =>
  {
      // if (!token) return;
      // this.globals.config.fcm = token;
      // this.globals.storage.saveItem("config", this.globals.config)
      // .catch((err: any) => {
      //   console.log("Storage error ", err);
      // });

      // this.globals.userData.fcmtoken = token;
      // this.request.updateRequest("accounts", this.globals.userData.fcmtoken)
      // .then((res: any) => {
      //   console.log(res);
      // })
      // .catch((err: any) => {
      //   console.log("error saving fire", JSON.stringify(err));
      // });
  }

  enableNotifications = async() => 
  {
    return await new Promise((resolve, reject) => {
      firebase.messaging().requestPermission()
        .then(() => {
          resolve(this.updateToken());
        })
        .catch((err) => {
          reject("error requesting permission for fire" + JSON.stringify(err));
        });
      })
  }

  getPwaToken = async () =>
  {
    return await new Promise((resolve, reject) => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
        .then((registration) => {
          firebase.messaging().useServiceWorker(registration);
          this.enableNotifications()
          .then((res) => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
        })
        .catch((err) => {
          reject("Error in pwa" + JSON.stringify(err));
        });
      }
      else{
        reject("no service workers");
      }
    })
  }

  getCordovaToken = async () =>
  {
      let token: any;
    
      if (this.platform.is('android')) {
        token = await this.fire.getToken()
      } 
    
      if (this.platform.is('ios')) {
        token = await this.fire.getToken();
        await this.fire.grantPermission();
      } 
      
      return this.saveToken(token)
  }

  getCordovaTokenOnRefresh = async () =>
  {
      let token: any;
    
      if (this.platform.is('android')) {
        token = await this.fire.onTokenRefresh();
      } 
    
      if (this.platform.is('ios')) {
        token = await this.fire.onTokenRefresh();
        await this.fire.grantPermission();;
      } 
      
      return this.saveToken(token)
  }

  pwaForegroundFCMNotification = () =>
  {
    try{
      firebase.messaging().onMessage((payload) => {
        this.globals.toastAlert(JSON.stringify(payload), {
          duration: 3000
        });
      })
    }
    catch(err){
      console.log(err);
    }
  }

  sendingPushNotification(fcm: string, title: string, msg: any, extra: any = null, page: any, callback) {
    this.globals.showLoader({
      content: "Sending push notification ..."
    })
    // page = encodeURI("kaosdeisgns://kaosdesigns.io/"+page);
    $.ajax({        
      type : 'POST',
      url : "https://fcm.googleapis.com/fcm/send",
      headers : {
          Authorization : 'key=' + 'AAAAGnd2Nsg:APA91bFQyaAEa6SsDycc8UyJ5h1UVbcyDLcZ4pv3M40XryofpQC3d7Y1vLhKBIwyevk7ashZbZIWAQJWArvVF8sfNRXD4rqAI0ABVSwsufa7oIzsCVFPJAidEOs8KFSg_6DQy4uBqgeh'
      },
      contentType : 'application/json',
      dataType: 'json',
      data: JSON.stringify(
        {
          "to": fcm, 
          "notification": {
            "title": title,
            "extra": extra,
            "click_action": page,
            "body": msg
          }
        }
      ),
      success : function(response) {
        this.globals.closeLoader();
        if(response.success == 1){
          callback(response);
        } else {
          console.log(response);
        }
      },
      error : function(xhr, status, error) {
          console.log(xhr.error);    
          this.globals.closeLoader();        
      }
  });
  }

  nativePushNotification(callback: any) {
    try{
      (<any>window).FirebasePlugin.hasPermission(function(res){
        console.log(res.isEnabled);
        if (!res.isEnabled) {
          const toast = this.globals.toastCtrl.create({
            message: 'We do not have permission to send push notifications',
            duration: 7000
          });
          toast.present();
        }
      });

      // // to initialize push notifications
      (<any>window).FirebasePlugin.onNotificationOpen(function(notification) {
        callback(notification);
      }, function(error: any) {
          const toast = this.globals.toastCtrl.create({
            message: 'Error with Push plugin ' + JSON.stringify(error),
            duration: 3000
          });
          toast.present();
      });
      
      // pushObject.on('registration').subscribe((data: any) => {      
      //   // if (this.globals.config.fcm !== data.registrationId) {
      //   //   this.saveToken(data.registrationId);
      //   // }
      // });
    } catch(ex) {
      this.globals.toastAlert('Error with Push plugin ' + JSON.stringify(ex), {
        duration: 3000
      })
    }
  }
}