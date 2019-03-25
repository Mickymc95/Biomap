import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CallanPage } from '../pages/callan/callan';
import { LibraryPage } from '../pages/library/library';
import { JuniorPage } from '../pages/junior/junior';
import { FossitCodePage } from '../pages/fossit-code/fossit-code';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CallanPage,
    LibraryPage,
    JuniorPage, 
    FossitCodePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CallanPage,
    LibraryPage,
    JuniorPage,
    FossitCodePage
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
