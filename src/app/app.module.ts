import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SwipeSegmentDirective } from '../directives/SwipeSegmentDirective';

import { LoginPage,RegistrarPage,PrincipalPage,CasasPage,InfocasasPage,Casa2alcobasterrazaPage,Casa3alcobasPage,Casa3alcobasterrazaPage,Casa4alcobasPage,OlvidarPassPage } from '../pages/index.paginas';


//plugins

import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';

//firebase

import { AngularFireModule } from '@angular/fire'; 
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UsuarioProvider } from '../providers/usuario/usuario';

//pdf

import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';

//storage

import { IonicStorageModule } from '@ionic/storage';
import { AuthProvider } from '../providers/auth/auth';
import { RegistroFireProvider } from '../providers/registro-fire/registro-fire';
 


export const firebaseConfig = {
  apiKey: "AIzaSyBaeyApyVHt3o-2IKpHTcptVZdxGErNRz8",
    authDomain: "occ-app-f10c4.firebaseapp.com",
    databaseURL: "https://occ-app-f10c4.firebaseio.com",
    projectId: "occ-app-f10c4",
    storageBucket: "occ-app-f10c4.appspot.com",
    messagingSenderId: "751246137039",
    appId: "1:751246137039:web:fa62f4ffd187a82d"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage,
    PrincipalPage,
    CasasPage,
    Casa2alcobasterrazaPage,
    Casa3alcobasterrazaPage,
    Casa4alcobasPage,
    Casa3alcobasPage,
    InfocasasPage,
    OlvidarPassPage,
    SwipeSegmentDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage,
    PrincipalPage,
    CasasPage,
    Casa2alcobasterrazaPage,
    Casa3alcobasterrazaPage,
    Casa4alcobasPage,
    Casa3alcobasPage,
    OlvidarPassPage,
    InfocasasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    FileTransfer,
    DocumentViewer,
    UsuarioProvider,
    Facebook,
    GooglePlus,
    AuthProvider,
    RegistroFireProvider
  ]
})
export class AppModule {}