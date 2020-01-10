import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabMenuPage } from './tab-menu.page';

const routes: Routes = [
  {
    path: "",
    component: TabMenuPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: '../app/dashboard/dashboard.module#DashboardPageModule'
          }
        ]
      },
      {
        path: 'feeds',
        children: [
          {
            path: '',
            loadChildren: '../app/feed/feed.module#FeedPageModule'
          }
        ]
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: '../app/list/list.module#ListPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabMenuPage]
})
export class TabMenuPageModule {}
