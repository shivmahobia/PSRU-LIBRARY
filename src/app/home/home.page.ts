import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BannerComponent } from './banner/banner.component';
import { Browser } from '@capacitor/browser';
import { ApiService } from '../services/api.service';
import {ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Network, ConnectionStatus } from '@capacitor/network';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, BannerComponent,CommonModule],
})
export class HomePage implements OnInit {

  slides: any[] = [];
  items: any;
  title:any;
  filepath: any[] = [];
  networkStatus: ConnectionStatus | undefined;


  constructor(private apiService: ApiService,
        private toastController: ToastController,

    ) {
   this.api();
  }

  ngOnInit(): void {
    this.network();
    this.slides = [
      {banner: 'assets/1.jpg'},
      {banner: 'assets/5.webp'},
      {banner: 'assets/2.jpg'},
      {banner: 'assets/3.jpg'},
      {banner: 'assets/4.jpg'},
    ];
  }

    network() {
    if (Network) {
      Network.getStatus().then((status) => {
        this.networkStatus = status;
        if (this.networkStatus.connected == false) {
          console.log('No internet');
          this.presentToastNoInternet('top');
        }
      });
    }
  }

  api(){
    this.apiService.Data().subscribe((response: any = []) => {
      this.items = response;
      console.log(this.items);
    });
  }

  async pdf(filepath: any){
    await Browser.open({ url: 'https://library.prsu.ac.in/backend/web/theme/files/'+filepath });
  }
  
  async opac(){
    await Browser.open({ url: 'https://opac.prsu.ac.in/' });
  }
  async ebook(){
    await Browser.open({ url: 'https://library.prsu.ac.in/e-books' });
  }
  async ejournal(){
    await Browser.open({ url: 'https://library.prsu.ac.in/e-journals' });
  }
  async knimbus(){
    await Browser.open({ url: 'https://prsu.knimbus.com/user#/home' });
  }
  async jgateplus(){
    await Browser.open({ url: 'https://jgateplus.com/search/login/' });
  }
  async ndl(){
    await Browser.open({ url: 'https://ndl.iitkgp.ac.in/' });
  }
  async media_coverage(){
    await Browser.open({ url: 'https://library.prsu.ac.in/site/media_coverage' });
  }
  async government(){
    await Browser.open({ url: 'https://data.gov.in/' });
  }
  async sodh_gangotri(){
    await Browser.open({ url: 'https://shodhgangotri.inflibnet.ac.in/' });
  }
  async sodh_ganga(){
    await Browser.open({ url: 'https://shodhganga.inflibnet.ac.in/' });
  }
  async e_pg_phatashala(){
    await Browser.open({ url: 'https://epgp.inflibnet.ac.in/' });
  }
  async e_gyanKosh(){
    await Browser.open({ url: 'https://egyankosh.ac.in/' });
  }
  async e_database(){
    await Browser.open({ url: 'https://library.prsu.ac.in/e_database_url' });
  }
  async ethesis(){
    await Browser.open({ url: 'https://library.prsu.ac.in/e-thesis' });
  }

  async presentToastNoInternet(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'No Internet Connection...',
      color: 'danger',
      duration: 3000,
      position: position,
      buttons: [
        {
          side: 'end',
          text: 'Close',
          role: 'cancel',
          handler: () => {
            console.log('');
          },
        },
      ],
    });

    await toast.present();
  }
  
}