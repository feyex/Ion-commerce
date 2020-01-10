import { Component, OnInit, NgZone } from '@angular/core';
import {AuthService} from '../../../providers/services/auth.service';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';
 

@Component({
  selector: 'signup',
  templateUrl: 'signup.html',
  styleUrls: ['signup.scss'],
 
})
export class SignupComponent implements OnInit {

SignupForm: FormGroup; 

  constructor(private api: AuthService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone,
    public toast: ToastController) { 
      this.SignupForm = this.fb.group({
        firstname:[''],
        lastname:[''],
        phone:[''],
        email:[''],
        password:['']
      })
    }

  ngOnInit() {}

  Register(){
    this.api.Signup(this.SignupForm.value)
      .subscribe((res)=>{
        this.zone.run(async () =>{
          console.log(res);
          if(res.status == true){
            const toasts = await this.toast.create({
              message: 'Account Created Successfully',
              duration: 3000,
              position:'top'
            });
            toasts.present();
            this.SignupForm.reset();
            this.router.navigate[('/login')]
          }
          else{
            const toasts = await this.toast.create({
              message: 'Account Creation Failed',
              duration: 3000,
              position:'top'
            });
            toasts.present();

          }
        })
      });
  }

}
