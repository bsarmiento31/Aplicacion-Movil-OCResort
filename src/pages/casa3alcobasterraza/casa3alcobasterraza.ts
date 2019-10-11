import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';

/**
 * Generated class for the Casa3alcobasterrazaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-casa3alcobasterraza',
  templateUrl: 'casa3alcobasterraza.html',
})
export class Casa3alcobasterrazaPage {

  @ViewChild(Slides) slides: Slides;

  slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  slider3alcobasmasterraza:any[] = [
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '221,5 mts2 | 3 alcobas + terraza,3 baños',
      image: 'assets/imgs/3alcobasmasterraza/2.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '221,5 mts2 | 3 alcobas + terraza,3 baños',
      image: 'assets/imgs/3alcobasmasterraza/3.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '221,5 mts2 | 3 alcobas + terraza,3 baños',
      image: 'assets/imgs/3alcobasmasterraza/4.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '221,5 mts2 | 3 alcobas + terraza,3 baños',
      image: 'assets/imgs/3alcobasmasterraza/7.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '221,5 mts2 | 3 alcobas + terraza,3 baños',
      image: 'assets/imgs/3alcobasmasterraza/8.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '221,5 mts2 | 3 alcobas + terraza,3 baños',
      image: 'assets/imgs/3alcobasmasterraza/11.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '221,5 mts2 | 3 alcobas + terraza,3 baños',
      image: 'assets/imgs/3alcobasmasterraza/12.jpg'
    },
  ];



}
