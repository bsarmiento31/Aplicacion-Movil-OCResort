import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { PrincipalPage } from '../principal/principal';
import { LoginPage } from '../login/login';
import { RegistrarPage } from '../registrar/registrar';

 
import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Login:any = LoginPage;
  Regsitrar:any = RegistrarPage;
  Principal:any = PrincipalPage;


  constructor(public navCtrl: NavController,private afAuth: AngularFireAuth,
                public usuarioProv: UsuarioProvider, private fb: Facebook, private platform: Platform,private googlePlus: GooglePlus) {

  }

  signInWithFacebook() {

    if (this.platform.is('cordova')) {
     this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        firebase.auth().signInWithCredential(facebookCredential)
        .then( user => {
          console.log(user);
  
          // this.usuarioProv.cargarUsuario(
          //   user.displayName,
          //   user.email,
          //   user.photoURL,
          //   user.uid,
          //   'facebook'
          // );

          this.navCtrl.setRoot(PrincipalPage);
        }).catch( e => console.log('Error con el login' + JSON.stringify(e)));
      })
    }else{
  //escritorio

  this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        
        console.log(res);

        let user = res.user;

        this.usuarioProv.cargarUsuario(
          user.displayName,
          user.email,
          user.photoURL,
          user.uid,
          'facebook'
        );

        this.navCtrl.setRoot(PrincipalPage);

      });

    }
    
  }


  signInGoogle(){
    this.googlePlus.login({
      'webClientId': '751246137039-kdtr50j9h0b810a6jjlurfic991om9br.apps.googleusercontent.com',
      'offline': true
    }).then( res => {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then( user => {
        console.log(JSON.stringify(user));

        // this.usuarioProv.cargarUsuario(
        //   user.displayName,
        //   user.email,
        //   user.photoURL, 
        //   user.uid,
        //   'google'
        // );

        this.navCtrl.setRoot(PrincipalPage);
      })
      .catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
    }).catch(err => console.error("Error: ", err));
  }

  navegarRegistro(){
      this.navCtrl.push(LoginPage);
  }

}
