import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CallanPage } from '../pages/callan/callan';
import { LibraryPage } from '../pages/library/library';
import { JuniorPage } from '../pages/junior/junior';
import { FossitCodePage } from '../pages/fossit-code/fossit-code';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Biodiversity Map', component: HomePage },
      { title: 'Callan Wildflower Meadow', component: CallanPage },
      { title: 'Library Bed', component: LibraryPage },
      { title: 'Junior Garden and Orchard', component: JuniorPage },
      { title: 'Fossitt Code Table', component: FossitCodePage}

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
