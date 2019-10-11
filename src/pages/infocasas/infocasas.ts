import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';

/**
 * Generated class for the InfocasasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infocasas', 
  templateUrl: 'infocasas.html', 
})
export class InfocasasPage {

  infocasas2:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  console.log(navParams);

  this.infocasas2 = this.navParams.get('imagen');

  }

  @ViewChild(Slides) slides: Slides;

  slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
  }

  slider = [
    {
      title:'Casa 2 Alcobas',
      description: '100 mts2 | 2 alcobas,2 baños',
      image: 'assets/imgs/2alcobas/1.jpg'
    },
    {
      title:'Casa 2 Alcobas',
      description: '100 mts2 | 2 alcobas,2 baños',
      image: 'assets/imgs/2alcobas/3.jpg'
    },
    {
      title:'Casa 2 Alcobas',
      description: '100 mts2 | 2 alcobas,2 baños',
      image: 'assets/imgs/2alcobas/4.jpg'
    },
    {
      title:'Casa 2 Alcobas',
      description: '100 mts2 | 2 alcobas,2 baños',
      image: 'assets/imgs/2alcobas/6.jpg'
    },
    {
      title:'Casa 2 Alcobas',
      description: '100 mts2 | 2 alcobas,2 baños',
      image: 'assets/imgs/2alcobas/7.jpg'
    },
    {
      title:'Casa 2 Alcobas',
      description: '100 mts2 | 2 alcobas,2 baños',
      image: 'assets/imgs/2alcobas/9.jpg'
    }
  ];





}
