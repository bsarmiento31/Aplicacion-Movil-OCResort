import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuarios';
import { map } from 'rxjs/operators';



/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';

  private apiKey = 'AIzaSyBaeyApyVHt3o-2IKpHTcptVZdxGErNRz8';

  userToken : string;

  //Crear Nuevo Usuario
  //https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]
  //Login
  //https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
    this.leerToken();
  }

  logout(){
    localStorage.removeItem('token');

  }
  login( usuario: UsuarioModel ){
      
    const authData = {
      // email: usuario.email,
      // password : usuario.password,
      ...usuario,
      returnSecureToken : true
    };

    return this.http.post(
      `${ this.url }/verifyPassword?key=${ this.apiKey }`,
      authData
      ).pipe(
        map( resp=> {
            console.log('entro en el mapa de rxjs');
            this.guardarToken( resp['idToken'] );
            return resp;
        })
      );

  }

  nuevoUsuario ( usuario: UsuarioModel ){
    
    const authData = {
      // email: usuario.email,
      // password : usuario.password,
      ...usuario,
      returnSecureToken : true  
    };

    return this.http.post(
    `${ this.url }/signupNewUser?key=${ this.apiKey }`,
    authData
    ).pipe(
      map( resp=> {
          console.log('entro en el mapa de rxjs');
          this.guardarToken( resp['idToken'] );
          return resp;
      })
    );

  }




  private guardarToken ( idToken: string ){
    
    this.userToken = idToken;
    //Ojo este es el local storage de la web, falta el del movil
    localStorage.setItem('token', idToken);
    

  }

 
  leerToken(){
    //Ojo este es el local storage de la web, falta el del movil
    if( localStorage.getItem('tokeb') ){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }
    return this.userToken;
  }




  

  

}
