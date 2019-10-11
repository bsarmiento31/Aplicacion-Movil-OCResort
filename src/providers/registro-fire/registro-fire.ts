import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuarios';

import { map } from 'rxjs/operators';

/*
  Generated class for the RegistroFireProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegistroFireProvider {

  private url = 'https://occ-app-f10c4.firebaseio.com';

  constructor(public http: HttpClient) {
    console.log('Hello RegistroFireProvider Provider');
  }

  crearRegistro( registro: UsuarioModel  ){
        
    return this.http.post( `${ this.url }/Usuarios.json`,registro )
    .pipe(
      map( (resp: any) => {
        registro.id = resp.name; 
        return registro;
      })
    )
    
      
  }

}
