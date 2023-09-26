import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-devloper',
  templateUrl: './devloper.page.html',
  styleUrls: ['./devloper.page.scss'],
})
export class DevloperPage implements OnInit {
  email= 'shivmahobia83@gmail.com'

  constructor(    private platform: Platform,
    ) { }

  ngOnInit() {
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

}
