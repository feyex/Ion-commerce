import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { navRoutes } from './config/config';
import { GlobalsProvider } from './providers/core/globals';
import { accountsInfoModel } from './models/model';
import { FcmProvider } from './providers/firebase/fcm';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  public appPages = navRoutes;
  showsplash = true;
  
  constructor(
    private fcm: FcmProvider,
    private globals: GlobalsProvider,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.globals.platform.ready()
    .then(() => {
      this.statusBar.backgroundColorByHexString('#fff');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      setTimeout(() => { this.showsplash = false; }, 1000);
    });
  }

  ngOnInit() {
    this.pushNotification();
    this.globals.getUserData()
    .then((userData: accountsInfoModel) => {
      this.globals.userData = userData;
    });
  }

  private pushNotification() {
    try {
      if (!this.globals.platform.is('cordova')) {
        this.fcm.pwaForegroundFCMNotification();
      } else {
        this.fcm.nativePushNotification((notification: any) => {
          if (notification.additionalData.foreground) {
            this.globals.notify.schedule({
              trigger: {at: new Date(new Date().getTime())},
              text: notification.title,
              data: notification.message
            });
          }
          else{
            this.globals.notify.schedule({
              trigger: {at: new Date(new Date().getTime())},
              text: notification.title,
              data: notification.message
            });
          }
        })
      }
    } catch (ex) {
      console.error('Error with Push plugin ' + JSON.stringify(ex));
      // const toast = this.globals.toastCtrl.create({
      //   message: 'Error with Push plugin ' + JSON.stringify(ex),
      //   duration: 3000
      // });
      // toast.present();
    }
  }

}
