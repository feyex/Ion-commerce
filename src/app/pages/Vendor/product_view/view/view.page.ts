import { Component, OnInit, NgZone } from '@angular/core';
import {ProductService} from '../../../../providers/services/product.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  result: any;

  constructor(private api: ProductService,
    private router: Router,
    private route: ActivatedRoute,

    public fb: FormBuilder,
    private zone: NgZone,
    public toast: ToastController)  { }

  ngOnInit() {
    this.getProd();
  }

  getProd(){
    this.api.viewProd(this.route.snapshot.paramMap.get('id')).subscribe((res:any)=>{
      console.log(res);
      if(res){
        this.result = res.message;
      }
    })
  }

}
