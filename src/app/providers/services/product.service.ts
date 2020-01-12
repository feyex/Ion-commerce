import { Injectable } from '@angular/core';
import { Product } from '../../models/model';

import { Observable, of } from 'rxjs';
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
  id: any;

  constructor(private http: HttpClient,
    private toast: ToastController) { }

  create(data: Product): Observable<any> {
    return this.http.post<Product>(this.Api_Url + '/prod', data)
      .pipe(
        catchError(this.handleError<Product>('Product Upload'))
      );

  }

  getAllProduct(data: Product): Observable<any> {
    return this.http.get<Product[]>(this.Api_Url + '/prod/list')
      .pipe(
        catchError(this.handleError<Product>('get 37Product'))
      );

  }

  getProd() {
    return this.http.get(this.Api_Url + '/prod');
  }

  viewProd(id): Observable<any> {
     this.id = localStorage.user_id;
    console.log(this.Api_Url + '/prod/view/' + this.id)
    return this.http.get(this.Api_Url + '/prod/view/' +this.id)
      .pipe(
        catchError(this.handleError(`getProduct id =${id}`))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return async (error: any): Promise<Observable<T>> => {
      const toasts = await this.toast.create({
        message: 'Please input fields correctly',
        duration: 3000,
        position: 'top'
      });
      toasts.present();
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
