import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';

/**
 * Generated class for the Casa4alcobasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-casa4alcobas',
  templateUrl: 'casa4alcobas.html',
})
export class Casa4alcobasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  @ViewChild(Slides) slides: Slides;

  slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
  }


  slider4alcobas:any[] = [
    { 
      title:'Casa 4 Alcobas De 2 pisos',
      description: '203 mts2 | 4 alcobas + 3 baños',
      image: 'assets/imgs/4alcobas/3.jpg'
    },
    { 
      title:'Casa 4 Alcobas De 2 pisos',
      description: '203 mts2 | 4 alcobas + 3 baños',
      image: 'assets/imgs/4alcobas/4.jpg'
    },
    { 
      title:'Casa 4 Alcobas De 2 pisos',
      description: '203 mts2 | 4 alcobas + 3 baños',
      image: 'assets/imgs/4alcobas/6.jpg'
    },
    { 
      title:'Casa 4 Alcobas De 2 pisos',
      description: '203 mts2 | 4 alcobas + 3 baños',
      image: 'assets/imgs/4alcobas/9.jpg'
    },
    { 
      title:'Casa 4 Alcobas De 2 pisos',
      description: '203 mts2 | 4 alcobas + 3 baños',
      image: 'assets/imgs/4alcobas/11.jpg'
    }
  ];


}
