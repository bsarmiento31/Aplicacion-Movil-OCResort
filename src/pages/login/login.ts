import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, AlertController } from 'ionic-angular'; 
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { PrincipalPage } from '../principal/principal';
import { UsuarioModel } from '../../providers/models/usuarios';
import { NgForm } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { RegistroFireProvider } from '../../providers/registro-fire/registro-fire';
import { OlvidarPassPage } from '../olvidar-pass/olvidar-pass';

/**
 * Generated class for the LoginPage page. 
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html', 
})
export class LoginPage {

  public category: string = 'tvshows';
  public categories: Array<string> = ['movies', 'tvshows']; 

  user = {} as User;

  loading = "";

  //Este usuario es para manejar el registro
  usuario : UsuarioModel;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private afAuth:AngularFireAuth,private auth: AuthProvider,
              public loadingCtrl: LoadingController,private alertCtrl: AlertController,
              private registroService: RegistroFireProvider) {
  }

  ngOnInit(){
    this.usuario = new UsuarioModel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

  async register( user:User ){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password);
      console.log(result);
    }
    catch(e){
      console.error(e);
    }
  }

 
  onTabChanged(tabName) { 
    this.category = tabName;
  }

  async login( user:User ){
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
   
      if(result){
        this.navCtrl.setRoot(PrincipalPage);
      }
      console.log(result);
    }
    catch(e){
      console.error(e);
    }
  }

  olvidePassword(email){

    this.afAuth.auth.sendPasswordResetEmail(email).then(function() {
      // let alert = this.alertCtrl.create({
      //   title: 'Se ha enviado un enlace al email',
      //   buttons: ['OK']
      // });
      // alert.present();
      console.log("enviado");
      
    }).catch(function(error) {
      // let alert = this.alertCtrl.create({
      //   title: 'Ah ocurrido un error',
      //   buttons: ['OK']
      // });
      // alert.present(); 
      console.log("error");
    });
   

  }


  onSubmit( form:NgForm ){

    if(form.invalid){ return; }
    this.auth.nuevoUsuario( this.usuario ).subscribe(resp =>{

      this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 4000 
      }).present();

      this.navCtrl.setRoot(PrincipalPage);

        console.log(resp);

    },(err) =>{
      this.alertCtrl.create({
        title: 'Error al registrarse',
        subTitle: err.error.error.message,
        buttons: ['OK']
      }).present();
        console.log(err.error.error.message);
    });

    

    this.registroService.crearRegistro( this.usuario ).subscribe ( resp1 => {
        console.log(resp1);
        this.usuario = resp1;

    });

  }

  onSubmitLogin(login:NgForm){
    if(login.invalid){ return; }
  
   
    

    // console.log('Imprimir si el usuario es valido'); 
    // console.log( this.usuario );
    // console.log(login);
    this.auth.login(this.usuario).subscribe( resp => {
 
     this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 4000
      }).present();

      console.log(resp);
      this.navCtrl.setRoot(PrincipalPage);


    }, (err) =>{
      console.log(err.error.error.message);
      
      this.alertCtrl.create({
        title: 'Error al ingresar',
        subTitle: err.error.error.message, 
        buttons: ['OK']
      }).present();
    })
  }


  irOlvidarcontrasena(){
    this.navCtrl.push(OlvidarPassPage);
  }

}
