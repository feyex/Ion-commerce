import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';




import { SignupPage } from './signup.page';

import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: SignupPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)

  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
