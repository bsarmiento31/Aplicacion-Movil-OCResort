import { Component,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides  } from 'ionic-angular';
import { InfocasasPage } from '../infocasas/infocasas';
import { Casa2alcobasterrazaPage } from '../casa2alcobasterraza/casa2alcobasterraza';
import { Casa3alcobasPage } from '../casa3alcobas/casa3alcobas';
import { Casa3alcobasterrazaPage } from '../casa3alcobasterraza/casa3alcobasterraza';
import { Casa4alcobasPage } from '../casa4alcobas/casa4alcobas';

/** 
 * Generated class for the CasasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-casas',
  templateUrl: 'casas.html',
})
export class CasasPage {

  // info:any = InfocasasPage;

  @ViewChild(Slides) slides: Slides;

  slidePrev() {
    this.slides.slidePrev();
    // this.slides.slideTo(1, 500);
  }
  slideNext() {
    this.slides.slideNext();
    // this.slides.slideTo(1, 500);
  }

  // goToSlide() {
  //   this.slides.slideTo(2, 500);

  // }



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  slider:any[] = [
    { 
      title:'Casa 2 Alcobas',
      description: '100 mts2 | 2 alcobas, 2 baños',
      image: 'assets/imgs/2alcobas/1.jpg'
    },
    {
      title:'Casa 2 Alcobas',
      description: '100 mts2 | 2 alcobas, 2 baños',
      image: 'assets/imgs/2alcobas/3.jpg'
    },
    {
      title:'Casa 2 Alcobas',
      description: '100 mts2 | 2 alcobas, 2 baños',
      image: 'assets/imgs/2alcobas/4.jpg'
    },
    {
      title:'Casa 2 Alcobas',
      description: '100 mts2 | 2 alcobas, 2 baños',
      image: 'assets/imgs/2alcobas/5.jpg'
    },
    {
      title:'Casa 2 Alcobas',
      description: '100 mts2 | 2 alcobas, 2 baños',
      image: 'assets/imgs/2alcobas/6.jpg'
    },
    {
      title:'Casa 2 Alcobas',
      description: '100 mts2 | 2 alcobas, 2 baños',
      image: 'assets/imgs/2alcobas/7.jpg'
    },
    {
      title:'Casa 2 Alcobas',
      description: '100 mts2 | 2 alcobas, 2 baños',
      image: 'assets/imgs/2alcobas/9.jpg'
    }
  ];

  slider2alcobasterr:any[] = [
    { 
      title:'Casa 2 Alcobas + terraza',
      description: '194,38 mts2 | 2 alcobas, 2 baños',
      image: 'assets/imgs/2alcobasmasterraza/1.jpg'
    },
    { 
      title:'Casa 2 Alcobas + terraza',
      description: '194,38 mts2 | 2 alcobas, 2 baños',
      image: 'assets/imgs/2alcobasmasterraza/3.jpg'
    },
    { 
      title:'Casa 2 Alcobas + terraza',
      description: '194,38 mts2 | 2 alcobas, 2 baños',
      image: 'assets/imgs/2alcobasmasterraza/4.jpg'
    },
    { 
      title:'Casa 2 Alcobas + terraza',
      description: '194,38 mts2 | 2 alcobas, 2 baños',
      image: 'assets/imgs/2alcobasmasterraza/11.jpg'
    },
    { 
      title:'Casa 2 Alcobas + terraza',
      description: '194,38 mts2 | 2 alcobas, 2 baños',
      image: 'assets/imgs/2alcobasmasterraza/14.jpg'
    },
    { 
      title:'Casa 2 Alcobas + terraza',
      description: '194,38 mts2 | 2 alcobas, 2 baños',
      image: 'assets/imgs/2alcobasmasterraza/18.jpg'
    }
  ];

  slider3alcobas:any[] = [
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '159,30 mts2 | 3 alcobas, 3 baños',
      image: 'assets/imgs/3alcobas/3.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '159,30 mts2 | 3 alcobas, 3 baños',
      image: 'assets/imgs/3alcobas/5.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '159,30 mts2 | 3 alcobas, 3 baños',
      image: 'assets/imgs/3alcobas/7.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '159,30 mts2 | 3 alcobas, 3 baños',
      image: 'assets/imgs/3alcobas/9.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '159,30 mts2 | 3 alcobas, 3 baños',
      image: 'assets/imgs/3alcobas/13.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '159,30 mts2 | 3 alcobas, 3 baños',
      image: 'assets/imgs/3alcobas/21.jpg'
    }
  ];

  slider3alcobasmasterraza:any[] = [
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '221,5 mts2 | 3 alcobas + terraza, 3 baños',
      image: 'assets/imgs/3alcobasmasterraza/2.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '221,5 mts2 | 3 alcobas + terraza, 3 baños',
      image: 'assets/imgs/3alcobasmasterraza/3.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '221,5 mts2 | 3 alcobas + terraza, 3 baños',
      image: 'assets/imgs/3alcobasmasterraza/4.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '221,5 mts2 | 3 alcobas + terraza, 3 baños',
      image: 'assets/imgs/3alcobasmasterraza/7.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '221,5 mts2 | 3 alcobas + terraza, 3 baños',
      image: 'assets/imgs/3alcobasmasterraza/8.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '221,5 mts2 | 3 alcobas + terraza, 3 baños',
      image: 'assets/imgs/3alcobasmasterraza/11.jpg'
    },
    { 
      title:'Casa 3 Alcobas De 2 pisos',
      description: '221,5 mts2 | 3 alcobas + terraza, 3 baños',
      image: 'assets/imgs/3alcobasmasterraza/12.jpg'
    },
  ];

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




// Esto es para enviar los parametros del slider(Si las fotos tuvieran diferente informacion sirviera)
  irAInfo( slide:any ){
      console.log( slide );

      this.navCtrl.push ( InfocasasPage, { 'imagen': slide } );
  }

  ir2casa(){
    this.navCtrl.push (Casa2alcobasterrazaPage);
  }

  ir3casa(){
    this.navCtrl.push (Casa3alcobasPage);
  }

  ir3casaterraza(){
    this.navCtrl.push (Casa3alcobasterrazaPage);
  }

  ir4casa(){
    this.navCtrl.push (Casa4alcobasPage);
  }

}
