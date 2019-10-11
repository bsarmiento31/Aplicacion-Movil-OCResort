import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController  } from 'ionic-angular';
import { UsuarioModel } from '../../providers/models/usuarios';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage} from '../home/home';

/**
 * Generated class for the OlvidarPassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-olvidar-pass',
  templateUrl: 'olvidar-pass.html', 
})
export class OlvidarPassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController,private afAuth:AngularFireAuth ) {
  }

    //Este usuario es para manejar el registro
    usuario : UsuarioModel;

    ngOnInit(){
      this.usuario = new UsuarioModel();
    }


    // async onSubmitPassword(email:NgForm){     
    //   var captura = (email.controls.email.value);
    //   const reset = await this.afAuth.auth.sendPasswordResetEmail(captura)
    //   .then(function(reset){ 
    //             if(reset){  
    //                 this.navCtrl.push(LoginPage);     
    //                          this.toast.create({  
    //                                'message':"Password reset email has been sent to your mail",          
    //                                 duration:5000,   
    //                           }).present();
    //            }else{ 
    //             console.log('Error while sending Reset link email'); 
    //      } 
    //     },function(error){  
    //        console.log("Error Message:",error);
    //      });
    // }
  



    // async onSubmitPassword(email:NgForm ){

    //   if(email.invalid){ return; }

    //   var captura = (email.controls.email.value);
    //   const result = this.afAuth.auth.sendPasswordResetEmail(captura)
    //    .then(function(result) {

    //       if(result){

    //       }
    //     this.alertCtrl.create({
    //       title: 'Correo enviado',
    //       subTitle: 'Se ha enviado un link al correo electronico',
    //       buttons: ['OK']
    //     }).present();
        
    //     this.navCtrl.setRoot(LoginPage);
    //     console.log("enviado");
        
    //   }).catch(function(error) {

    //     // this.alertCtrl.create({
    //     //   title: 'Se ha generado un error',
    //     //   subTitle: 'El correo no es valido o este correo no se encuentra registrado',
    //     //   buttons: ['OK']
    //     // }).present();
        
    //     console.log("error");
    //   });
    // }

   onSubmitPassword( email:NgForm  ){
      var captura = (email.controls.email.value);
      try{
          
        const result = this.afAuth.auth.sendPasswordResetEmail(captura);
         
                          //  this.toastCtrl.create({  
                          //        'message':"Password reset email has been sent to your mail",          
                          //         duration:5000,   
                          //   }).present();

          this.alertCtrl.create({
            title: 'Correo enviado',
            subTitle: 'Se ha enviado un link al correo electronico',
            buttons: ['OK']
          }).present();
          this.navCtrl.setRoot(HomePage);
  
        
        console.log(result);
      }
      catch(e){
        console.error(e);
      }
    }

}
