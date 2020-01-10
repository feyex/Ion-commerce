import { Injectable, OnInit } from "@angular/core";
import { GlobalsProvider } from "./globals";
import { shareModel } from "../../models/model";
import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Injectable()
export class SocialSharingProvider {


    constructor(
        private globals: GlobalsProvider,
        private socialSharing: SocialSharing
    ) {
    }

    async shareWith(data: shareModel) {
        return await this.socialSharing.share(data.message, data.subject, data.image, data.url,);
    }

    getDynamicLink(url: string) {
        return url;
    }

    generateDynamiclink(url: string) {
        // this.httpClient.post(dynamicLinkAPI, { "longDynamicLink": encodeURI(dynamicLinkPrefix + url), "suffix": { "option": "UNGUESSABLE" } })
        // .toPromise().then((dynamicRes: any) => {
        // })
        return url;
    }

}