import { Component, EnvironmentInjector, Optional, inject } from '@angular/core';
import { App } from '@capacitor/app';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import { IonRouterOutlet,Platform, ToastController } from '@ionic/angular';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  // standalone: true,
  // imports: [IonicModule],
})
export class AppComponent {
  email= 'library_prsu@rediffmail.com'
  tap = 0;
  public environmentInjector = inject(EnvironmentInjector);

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about-us', icon: 'alert-circle' },
  ];
  public devloper = [
    { title: 'Developer', url: '/devloper', icon: 'code' },
  ];
  public websites = [
    { title: 'Website', icon: 'globe' }
  ];
  public gmail = [
    { title: 'Ask Librarian', icon: 'mail',  }
  ];

  constructor(
    private platform: Platform,
    private toastCtrl: ToastController,
    @Optional() private routerOutlet?: IonRouterOutlet
  ) {
    this.platform.ready().then(() => {
      this.exitAppOnDoubleTap();
    });
  }

  mailto()
  {
  this.platform.ready().then(() =>
  {
  
      if (this.platform.is('ios')) 
    {
        window.open('googlegmail:///co?to='+this.email+'&subject='+'subject'+'&body=','_system');
        
    };
      if (this.platform.is('android'))
    {
          window.open('mailto:'+this.email);
  
    };
  });
  }


  exitAppOnDoubleTap() {
    if(Capacitor.getPlatform() == 'android') {
      this.platform.backButton.subscribeWithPriority(10, async() => {
        if (!this.routerOutlet?.canGoBack()) {
            // double tap exit
            this.tap++;
            if(this.tap == 2) App.exitApp();
            else {
              this.doubleTapExitToast();
            }
        }
      });
    }
  }

  async doubleTapExitToast() {
    console.log('doubletapexit was called!');
    let toast = await this.toastCtrl.create({
      message: 'Tap back button again to exit the App.',
      duration: 3000,
      position: 'bottom',
      color: 'primary'
    });
    toast.present();
    const dismiss = await toast.onDidDismiss();
    if(dismiss) {
      console.log('dismiss: ', dismiss);
      this.tap = 0;
    }
  }
  openWebsite() {
    window.open('https://library.prsu.ac.in/', '_blank');
  }
}
