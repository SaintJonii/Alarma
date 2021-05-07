import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { Camera } from '@ionic-native/camera/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { File } from '@ionic-native/file/ngx';

import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase)],
  providers: [
    Camera,
    File,
    NativeAudio,
    Flashlight,
    Vibration,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
