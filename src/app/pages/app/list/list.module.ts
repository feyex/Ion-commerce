import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { TextAvatarModule } from 'src/app/components/ui/text-avatar';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    TextAvatarModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ])
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
