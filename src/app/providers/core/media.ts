import { Injectable } from '@angular/core';
import { FirebaseStorageProvider } from '../firebase/firebasestore';
import { File } from '@ionic-native/file/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { GlobalsProvider } from './globals';
import { fileModel } from '../../models/model';
import { photoviewerConfig } from 'src/app/config/config';
import { ImagePreviewPage } from 'src/app/pages/ui/image-preview/image-preview.page';
declare var $: any;

@Injectable()
export class MediaProvider {
  type: string = ('video' || 'audio' || 'image')
  preview: boolean = false;
  fileInfo: fileModel = {
    name: null,
    size: null,
    path: null,
    data: null
  };
  progressVal:number;

  constructor(
    private firestore: FirebaseStorageProvider,
    private photoviewer: PhotoViewer,
    private globals: GlobalsProvider,
    private nativeFile: File,
    private camera: Camera
  ) {
  }

  public async getPicture() {
    let actionSheet = await this.globals.actionSheetCtrl.create({
      cssClass: 'action-sheets-basic-page',
      mode: 'md',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          cssClass: 'text-danger',
          icon: 'camera',
          handler: () => {
            this.captureImage(false);
          }
        },
        {
          text: 'Choose photo from Gallery',
          cssClass: 'text-success',
          icon: 'images',
          handler: () => {
            this.captureImage(true);
          }
        },
      ]
    });
    actionSheet.present();
  }

  private captureImage(useAlbum: boolean) {
    if(Camera['installed']()) {
      this.camera.getPicture({
        quality: 100,
        encodingType: this.camera.EncodingType.JPEG,
        destinationType: this.camera.DestinationType.DATA_URL,
        mediaType: this.camera.MediaType.ALLMEDIA,
        correctOrientation: true,
        saveToPhotoAlbum: true,
        ...useAlbum ? {sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM} : {}
      }).then((data) => {
        this.fileInfo.data = 'data:image/jpg;base64,' + data;
      }, (err) => {
        this.globals.toastAlert('Unable to take photo');
      })
    } else {
      $('input#' + this.type).click();
    }
  }

  public onFileChange(event: any) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) => {
        this.fileInfo.data = (e.target as any).result;
      }
    } else {
      this.globals.toastAlert("Couldn't process image ..");
    }
  }

  async saveToDir(path: string, fileName: string, replace: boolean = true) {
    return await this.nativeFile.createFile(`media/${path}`, fileName, replace)
  }

  previewImage(image: string, key: number = 0) {
    if(this.globals.platform.is('cordova')) {
      this.photoviewer.show(image, 'Image', photoviewerConfig)
    } else {
      console.log('web');
      this.globals.modalCtrl.create({
        component: ImagePreviewPage,
        componentProps: {
          img: image,
          key: key
        }
      })
      .then((modal: any) => {
        modal.present();
      })
      .catch((err: any) => {
        this.globals.toastAlert(err.error || err.message || JSON.stringify(err), {
          cssClass: 'toast-error'
        })
      });
    };
  }

  dataURItoBlob(dataURI) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);

    // create a view into the buffer
    var ia = new Uint8Array(ab);

    // set the bytes of the buffer to the correct values
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    // write the ArrayBuffer to a blob, and you're done
    var blob = new Blob([ab], { type: mimeString });
    return blob;

  }

  downloadMedia(url: string): Promise<any> {
    return this.firestore.downloadFileViaReference(url);
  }
}

