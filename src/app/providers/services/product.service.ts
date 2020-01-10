import { Injectable } from '@angular/core';
import {Product} from '../../models/model';

import {Observable, of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  Api_Url = 'http://localhost:5000/v1'; 

  constructor(private http: HttpClient,
    private toast:ToastController) { }

    create(data:Product):Observable<any>{
      return this.http.post<Product>(this.Api_Url + ',',data)
        .pipe(
          catchError(this.handleError<Product>('Product Upload'))
        );

    }

    private handleError<T>(operation = 'operation', result?: T) {
      return async (error: any): Promise<Observable<T>> => {
        const toasts = await this.toast.create({
          message: 'Please input fields correctly',
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
