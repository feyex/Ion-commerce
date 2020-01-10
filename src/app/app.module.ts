import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { File } from '@ionic-native/file/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import * as firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

import { firebaseConfig } from './config/config';
firebase.initializeApp(firebaseConfig);

import { StorageProvider } from './providers/core/storage';
import { RequestProvider } from './providers/core/request';
import { NetworkProvider } from './providers/core/network';
import { GlobalsProvider } from './providers/core/globals';

import { FirebaseDBProvider } from './providers/firebase/firebasedb';
import { FirebaseFunctionsProvider } from './providers/firebase/firebasefunc';
import { FirebaseStorageProvider } from './providers/firebase/firebasestore';
import { FirebaseAuthProvider } from './providers/firebase/firebaseauth';
import { FcmProvider } from './providers/firebase/fcm';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProvider } from './providers/features/users';
import { MediaProvider } from './providers/core/media';
import { ImagePreviewPageModule } from './pages/ui/image-preview/image-preview.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule.forRoot({
      // mode: 'ios'
    }),
    IonicStorageModule.forRoot({
      name: '__ionic4db',
    }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ImagePreviewPageModule,
  ],
  providers: [
    FcmProvider, FirebaseDBProvider, FirebaseFunctionsProvider, FirebaseStorageProvider, FirebaseAuthProvider,
    StorageProvider, RequestProvider, NetworkProvider, GlobalsProvider, 
    LocalNotifications, StatusBar, SplashScreen, SpinnerDialog, SocialSharing, File, Camera, FirebaseX, PhotoViewer,
    UserProvider, MediaProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
