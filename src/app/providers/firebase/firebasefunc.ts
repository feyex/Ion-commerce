import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/functions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from '../../config/config';

@Injectable()

export class FirebaseFunctionsProvider
{
    private fFunc: any = firebase.functions();
    constructor(
        private http: HttpClient
    ) { 
    }

    async requestByHttpRequest(funcName: string, link: string) {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            }),
        };
        return this.http.get(url + 'default-' + funcName+"?link="+link).toPromise();
    }
}