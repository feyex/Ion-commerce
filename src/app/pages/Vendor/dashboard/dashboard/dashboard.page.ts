import { Component, OnInit, NgZone } from '@angular/core';
import {ProductService} from '../../../../providers/services/product.service';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  result: any;

  constructor(private api: ProductService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone,
    public toast: ToastController)  { }

  ngOnInit() {
    this.getProd();
  }

  getProd(){
    this.api.getProd().subscribe((res:any)=>{
     
      if(res){
        this.result = res.message;
      }
    })
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/overview']);
  }

}
