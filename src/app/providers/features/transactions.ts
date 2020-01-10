import { Injectable, OnInit } from '@angular/core';
import { GlobalsProvider } from '../core/globals';
import { FirebaseDBProvider } from '../firebase/firebasedb';
import { UserProvider } from './users';
import { FirebaseAuthProvider } from '../firebase/firebaseauth';
declare var $:any;

@Injectable()
export class TransactionsProvider implements OnInit {
    user: any;
    path: string = "transactions/";
    transactions: any;
    sources: any;
  
    ref: string;
    transComplete: boolean = false;
    amount: number = 1000;
    constructor(
        private firedb: FirebaseDBProvider,
        private uService: UserProvider,
        private fauth: FirebaseAuthProvider,
        public globals: GlobalsProvider
    ) {

    }

    ngOnInit() {
      this.uService.getUserInfo()
      .then((userInfo: any) => {
        this.user = userInfo;
      })
      .catch((err: any) => {
        console.log(err);
      });
    }

    checkIfTranscodeIsAdded() {
      this.firedb.getRealTimeData(
        "authcodes/"+ btoa(this.user.email) + "/" + this.ref, 
        (res: any) => {
          if(res.refcode == this.ref) {
            this.addTransactionInfo({
              reference_no: res.refcode,
              type: "credit",
              amount: this.amount,
              status: "completed",
              transactionBy: this.user.email,
              transactionInfo: {
                  accountNumber: null,
                  gateway: "paystack",
              }
            });
            $('#iframe').hide();
            this.transComplete = true;
          } else if(!res && res.refcode != this.ref){
  
          }
        }
      )
    }
  
    getAllSources() {
      this.globals.loader = true;
      this.fauth.checkAuthState((user: any) => {
        this.firedb.getFireData("authcodes/" + btoa(user.email))
        .then((sources: any) => {
          this.globals.loader = false;
          if(sources != null) {
            let arr: any = [], l: any = 0;
            for(let i in sources) {
              arr[l] = sources[i];
              l++;
            }
            arr['length'] = l;
            this.sources = arr;
          } else {
            this.sources = [];
          }
        })
        .catch((err: any) => {
          this.globals.loader = false;
          console.log(err);
        });
      });
    }
  
    async getAllTransactions() {
      return await new Promise((resolve, reject) => {
        this.fauth.checkAuthState((user: any) => {
          this.firedb.getFireData(this.path + user.uid)
          .then((items: any) => {
            this.transactions = [];
            if(items != null) {
              for(let i in items) {
                this.transactions.push(items[i]);
              }
            }
            resolve(this.transactions);
          })
          .catch((err: any) => {
            reject(err);
          });
        });
      });
    }
  
    async addTransactionInfo(transactions: any) {
      return await new Promise((resolve, reject) => {
        try {
          this.firedb.addFireData("transactions/" + this.fauth.currentUser().currentUser.uid, transactions)
          .then((res: any) => {
            resolve(res);
          })
        } catch(ex) {
          this.globals.toastAlert(ex.error)
          reject(ex.message);
        }
      });
    }
}