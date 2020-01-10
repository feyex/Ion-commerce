import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseStorageProvider } from '../../../providers/firebase/firebasestore';
import { FirebaseAuthProvider } from '../../../providers/firebase/firebaseauth';
import { UserProvider } from '../../../providers/features/users';
import { GlobalsProvider } from '../../../providers/core/globals';
declare var $: any;

@Component({
  selector: 'profile-info',
  templateUrl: 'profile-info.html'
})
export class ProfileInfoComponent implements OnInit {
  profileForm: FormGroup = new FormGroup({
    photoURL: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])+.(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")]),
    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern("[a-zA-Z]+\\s?[a-zA-Z]*\\s?[a-zA-Z]*")]),
    address: new FormControl('', [Validators.required, Validators.minLength(5),Validators.pattern("[a-zA-Z]+\\s?[a-zA-Z]*\\s?[a-zA-Z]*")]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern("([0-9])*")]),
  });
  ext: any;

  constructor(
    private firestore: FirebaseStorageProvider,
    private fireauth: FirebaseAuthProvider,
    private uData: UserProvider,
    private globals: GlobalsProvider
  ) {
  }

  ngOnInit() {
    // this.globals.showLoader({
    //   content: 'getting your profile info .....'
    // })
    this.uData.getUserInfo()
    .then((user: any) => {
      // this.globals.closeLoader();
      let arr: Array<any> = user.phoneNumber.split('');
      this.ext = arr[0] + arr[1] + arr[2] + arr[3];
      delete arr[0] 
      delete arr[1]
      delete arr[2]
      delete arr[3]
      user.phoneNumber = arr.join('');
      this.profileForm.patchValue(user);
    })
    .catch((err: any) => {
      console.log(err);
      // this.globals.closeLoader();
    })
  }

  private onFileChange(event: any) {
    // let loader = this.globals.loading.create({
    //   content: "Uploading profile image ...."
    // });
    // loader.present();
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      try {
        this.firestore.saveFiles('profile/profile_image'+this.fireauth.currentUser().currentUser.uid, file, (url) => {
          this.profileForm.patchValue({'photoURL': url});
        });
        // loader.dismiss();
      } catch(ex) {
        console.log("Error while uploading profile image is",ex)
        // loader.dismiss();
        this.globals.toastAlert(ex.message);
      }
    } else {
      // loader.dismiss();
      this.globals.toastAlert("File upload error ..");
    }
  }

  private openImage() {
    $('input#profile-image').click();
  }

  saveProfile(form: any) {
    this.globals.showLoader({
      content: "Updating profile info ..."
    })
    form.phoneNumber = this.ext + form.phoneNumber;
    this.uData.updateUserAccountInfo(form)
    .then((res: any) => {
      this.globals.closeLoader();
      this.globals.toastAlert("Profile Information updated");
      console.log(res);
    })
    .catch((err: any) => {
      this.globals.closeLoader();
      this.globals.toastAlert(err);
    })
  }

}
