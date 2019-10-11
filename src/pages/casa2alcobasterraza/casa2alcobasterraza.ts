import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';

/**
 * Generated class for the Casa2alcobasterrazaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage() 
@Component({
  selector: 'page-casa2alcobasterraza',
  templateUrl: 'casa2alcobasterraza.html',
})
export class Casa2alcobasterrazaPage {

  // infocasas:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    // console.log(navParams);

    // this.infocasas = this.navParams.get('slider2');
  }

  @ViewChild(Slides) slides: Slides;

  slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
  }


  slider2alcobasterr = [
    { 
      title:'Casa 2 Alcobas + terraza',
      description: '194,38 mts2 | 2 alcobas,2 baños',
      image: 'assets/imgs/2alcobasmasterraza/1.jpg'
    },
    { 
      title:'Casa 2 Alcobas + terraza',
      description: '194,38 mts2 | 2 alcobas,2 baños',
      image: 'assets/imgs/2alcobasmasterraza/3.jpg'
    },
    { 
      title:'Casa 2 Alcobas + terraza',
      description: '194,38 mts2 | 2 alcobas,2 baños',
      image: 'assets/imgs/2alcobasmasterraza/4.jpg'
    },
    { 
      title:'Casa 2 Alcobas + terraza',
      description: '194,38 mts2 | 2 alcobas,2 baños',
      image: 'assets/imgs/2alcobasmasterraza/11.jpg'
    },
    { 
      title:'Casa 2 Alcobas + terraza',
      description: '194,38 mts2 | 2 alcobas,2 baños',
      image: 'assets/imgs/2alcobasmasterraza/14.jpg'
    },
    { 
      title:'Casa 2 Alcobas + terraza',
      description: '194,38 mts2 | 2 alcobas,2 baños',
      image: 'assets/imgs/2alcobasmasterraza/18.jpg'
    }
  ];

  slider2planta = [
    { 
      image: 'assets/imgs/2alcobasmasterraza/planta1.jpg'
    },
    { 
      image: 'assets/imgs/2alcobasmasterraza/planta2.jpg'
    }
  ];



}
