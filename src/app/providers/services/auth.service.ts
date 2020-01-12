import { Injectable } from '@angular/core';
import {Signup} from '../../models/model';
import {Login} from '../../models/model';
import {VendorSign} from '../../models/model';

import {Observable, of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  Api_Url = 'http://localhost:5000/v1'; 

  constructor(private http: HttpClient,
    private toast:ToastController) { }

  Signup(data:Signup): Observable<any>{
    return this.http.post<Signup>(this.Api_Url+'/account',data)
    .pipe(
      catchError(this.handleError<Signup>('Signup'))
    );
  }

  Login(data:Login): Observable<any>{
    return this.http.post<Login>(this.Api_Url+'/login',data)
    .pipe(
      catchError(this.handleError<Login>('Login'))
    );
  }

  vendorLogin(data:Login): Observable<any>{
    return this.http.post<Login>(this.Api_Url+'/vendor/login',data)
    .pipe(
      catchError(this.handleError<Login>('Login'))
    );
  }

  VendorSignup(data:VendorSign): Observable<any>{
    return this.http.post<VendorSign>(this.Api_Url+'/vendor',data)
    .pipe(
      catchError(this.handleError<VendorSign>('VendorSignUP'))
    );
  }

 

  private handleError<T>(operation = 'operation', result?: T) {
    return async (error: any): Promise<Observable<T>> => {
      const toasts = await this.toast.create({
        message: 'Invalid Credentials ',
        duration: 3000,
        position:'top'
      });
      toasts.present();
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
