import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';

/**
 * Generated class for the Casa3alcobasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-casa3alcobas',
  templateUrl: 'casa3alcobas.html',
})
export class Casa3alcobasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  @ViewChild(Slides) slides: Slides;

  slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
  }

  slider3alcobas:any[] = [
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '159,30 mts2 | 3 alcobas,3 baños',
      image: 'assets/imgs/3alcobas/3.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '159,30 mts2 | 3 alcobas,3 baños',
      image: 'assets/imgs/3alcobas/5.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '159,30 mts2 | 3 alcobas,3 baños',
      image: 'assets/imgs/3alcobas/7.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '159,30 mts2 | 3 alcobas,3 baños',
      image: 'assets/imgs/3alcobas/9.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '159,30 mts2 | 3 alcobas,3 baños',
      image: 'assets/imgs/3alcobas/13.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '159,30 mts2 | 3 alcobas,3 baños',
      image: 'assets/imgs/3alcobas/21.jpg'
    }
  ];


}
