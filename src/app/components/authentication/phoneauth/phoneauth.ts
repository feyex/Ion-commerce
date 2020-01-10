import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GlobalsProvider } from '../../../providers/core/globals';
import { UserProvider } from '../../../providers/features/users';

@Component({
  selector: 'phoneauth',
  templateUrl: 'phoneauth.html'
})
export class PhoneauthComponent {

  authForm: FormGroup = new FormGroup({
    number: new FormControl('', [ Validators.required ]),
  });
  ext: string = '+234';
  code: any;
  constructor(
    private uData: UserProvider,
    private navCtrl: NavController,
    private globals: GlobalsProvider
  ) {
  }

  sendAuthCode(form: any) {
    let arr: Array<any> = form.number.split('');
    (arr[0] == '0')
      ? delete arr[0]
      : null;
    this.uData.stage = "captcha";
    // setTimeout(() => {
      this.uData.getAuthCode(this.ext + arr.join(''))
    // }, 1000);
  }

  verifyCode() {
    this.uData.verify(this.code)
    .then((user: any) => {
      if(user) {
        this.globals.toastAlert('Successful login')
        this.globals.config.walkthrough = true;
        this.globals.config.login = true;
        this.globals.storage.saveItem('appconfig', this.globals.config)
        this.globals.storage.saveItem('userdata', user)
        this.globals.showLoader({
          content: 'checking if you have a profile .....'
        })
        this.uData.getUserInfo()
        .then((user: any) => { 
          this.globals.userData = user;
          this.globals.closeLoader();
          (user.firstname !== null) 
            ? this.navCtrl.navigateRoot('app/dashboard')
            : this.navCtrl.navigateForward('ProfilePage')
        })
        .catch((err: any) => {
          console.log(err);
          this.globals.closeLoader();
        })
      } else {
        this.globals.toastAlert('User can`t not logged in')
      }
    })
    .catch((err: any) => {
      this.globals.toastAlert(err.message)
    });
  }


  async chooseLanguage() {
    const actionSheet = await this.globals.actionSheetCtrl.create({
      mode: 'md',
      buttons: [
        {
          text: 'NIGERIA (NG)',
          handler: () => {
            console.log();
          }
        },{
          text: 'SOUTH AFRICA (SA)',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
        }
      ]
    });
    actionSheet.present();
  }

}
