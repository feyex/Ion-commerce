import { Component, NgZone } from '@angular/core';
import {AuthService} from '../../../providers/services/auth.service';
import {Router} from '@angular/router';

import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';
import { GlobalsProvider } from '../../../providers/core/globals';

@Component({
  selector: 'login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss'],

})
export class LoginComponent {
  LoginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
  });
  validation_messages = {
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

  constructor(
    private api: AuthService, 
    private globals: GlobalsProvider,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone,
    public toast: ToastController
  ) {
    this.LoginForm = this.fb.group({
      email:[''],
      password:['']
    })
  }

  login(){
    this.api.Login(this.LoginForm.value)
    .subscribe((res)=>{
      this.zone.run(async () =>{
        console.log(res);
        if(res.status == true){
         
          this.LoginForm.reset();
          localStorage.setItem('token', res.token);
          localStorage.setItem('user_id',res.id);
          this.router.navigate(['/overview']);
        }
        else{
          const toasts = await this.toast.create({
            message: 'Invalid Username or Password ',
            duration: 3000,
            position:'top'
          });
          toasts.present();

          }
        })
      });
  }
   
}




