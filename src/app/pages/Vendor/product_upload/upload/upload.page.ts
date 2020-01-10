

import { Component, OnInit, NgZone } from '@angular/core';
import {ProductService} from '../../../../providers/services/product.service';
import {Router} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';
 

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})

export class UploadPage implements OnInit {

productForm: FormGroup; 

  constructor(private api: ProductService,
    private router: Router,
    public fb: FormBuilder,
    private zone: NgZone,
    public toast: ToastController) { 
      this.productForm = this.fb.group({
        vendor_id:[localStorage.user_id],
        photo:[null],
        product_name:[''],
        quantity:[''],
        color:[''],
        sku:[''],
        price:[''],
        previous_price:['']
      })
    }

  ngOnInit() {}

 //Get photo value
 fileChanged(event) {
  const file = event.target.files[0];
  this.productForm.patchValue({
    photo: file
  });
  this.productForm.get('photo').updateValueAndValidity();
  console.log('thumb', file);
}


// Submit product
onsubmit() {

  var formData: any = new FormData();
  formData.append("sku", this.productForm.get('sku').value);
  formData.append("product_name", this.productForm.get('product_name').value);

  formData.append("vendor_id", this.productForm.get('vendor_id').value);
  formData.append("photo", this.productForm.get('photo').value);
  formData.append("color", this.productForm.get('color').value);
  formData.append("price", this.productForm.get('price').value);
  formData.append("previous_price", this.productForm.get('previous_price').value);

    this.api.create(formData)
      .subscribe((res)=>{
        this.zone.run(async () =>{
          console.log(res);
          if(res.status == true){
            const toasts = await this.toast.create({
              message: 'Product Created Successfully',
              duration: 3000,
              position:'top'
            });
            toasts.present();
            this.productForm.reset();
            // this.router.navigate[('/login')]
          }
          else{
            const toasts = await this.toast.create({
              message: 'Failed to upload produucts',
              duration: 3000,
              position:'top'
            });
            toasts.present();

          }
        })
      });
  }

}



