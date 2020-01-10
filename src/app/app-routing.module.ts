import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'app', 
    loadChildren: './pages/tab-menu/tab-menu.module#TabMenuPageModule',
    // canActivate: [AuthGuard], 
  },
  {
    path: 'overview', 
    loadChildren: './pages/app/dashboard/dashboard.module#DashboardPageModule',
    // canActivate: [AuthGuard], 
  },
  {
    path: 'activities', 
    loadChildren: './pages/app/feed/feed.module#FeedPageModule',
    // canActivate: [AuthGuard], 
  },
  { path: 'login', loadChildren: './pages/authentication/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/authentication/signup/signup.module#SignupPageModule' },

  { path: 'image-preview', loadChildren: './pages/ui/image-preview/image-preview.module#ImagePreviewPageModule' },
  
  {
    path: 'vendor',
    loadChildren:'./pages/Vendor/signup/signup.module#SignupPageModule'
  },
  {
    path: 'vendor-login',
    loadChildren:'./pages/Vendor/login/login.module#LoginPageModule'
  },

  {
    path: 'dashboard',
    loadChildren:'./pages/Vendor/dashboard/dashboard/dashboard.module#DashboardPageModule'
  },
  {
    path: 'upload',
    loadChildren:'./pages/Vendor/product_upload/upload/upload.module#UploadPageModule'
  },
  {
    path: 'view',
    loadChildren: './pages/Vendor/product_view/view/view.module#ViewPageModule'
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
