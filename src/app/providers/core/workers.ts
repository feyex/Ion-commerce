import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class WebWorkersProvider implements OnInit
{
    worker: any;
    constructor() {
    }

    ngOnInit() {
        if (typeof Worker !== 'undefined') {
          this.worker = new Worker('../assets/js/workers.js');
        }
    }

    startProcessOnWorker(type: string) {
        this.worker.postMessage(type)
    }

    receiveProcessResponseFromWorkers(callback: any) {
        this.worker.addEventListener('message', (e: any) => {
            callback(e.data);
        });
    }
}