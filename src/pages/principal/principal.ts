import { Component  } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, Platform  } from 'ionic-angular';
import { UsuarioProvider, Credenciales } from '../../providers/usuario/usuario';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { CasasPage } from '../casas/casas'; 
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { AuthProvider } from '../../providers/auth/auth';
 
/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
  
@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  home:any = HomePage; 
  casas:any = CasasPage;

  user: Credenciales = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,public usuarioProv: UsuarioProvider,private afAuth:AngularFireAuth,
              private Toast: ToastController,private document: DocumentViewer, private file: File,private transfer: FileTransfer,private platform: Platform,
              private auth: AuthProvider)  {
    console.log( this.usuarioProv.usuario );

    this.user = this.usuarioProv.usuario;
  }


  openPage( pagina:any){

  }

  ionViewWillLoad(){
    this.afAuth.authState.subscribe( data => {
      if(data && data.email && data.uid){
        this.Toast.create({
          message: `Bienvenido a OcResort, ${data.email} `,
          duration:2000
        }).present();
      }else{
        this.Toast.create({
          message: `No encontramos los detalles de la autenticacion `,
          duration:2000
        }).present();
      }
     
    });
  }

  openLocalPdf(){ 
    const options: DocumentViewerOptions  = {
      title: 'My PDF'
    }
    this.document.viewDocument('assets/catalogo.pdf', 'application/pdf', options);
  }

  downloadAndOpenPdf(){
      let path = null;

      if(this.platform.is('ios')){
          path = this.file.documentsDirectory;
      }else{
        path = this.file.dataDirectory;
      }

      const tranfer = this.transfer.create();
      tranfer.download('assets/catalogo.pdf',path+ 'myfile.pdf').then( entry =>{
          let url = entry.toURL();
          this.document.viewDocument(url, 'application/pdf',{});
      });
  }

salir(){
    this.auth.logout();
    this.navCtrl.setRoot( HomePage );
}

    
    
}