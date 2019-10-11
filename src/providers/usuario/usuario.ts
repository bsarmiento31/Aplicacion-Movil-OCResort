// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UsuarioProvider {

  usuario: Credenciales ={};

  constructor() {

  }

  cargarUsuario(nombre: string,
                email:string,
                imagen: string,
                uid: string,
                provider: string){

  this.usuario.nombre = nombre;
  this.usuario.email = email;
  this.usuario.imagen = imagen;
  this.usuario.uid = uid;
  this.usuario.provider = provider;

}

}

export interface Credenciales{

  nombre?: string,
  email?:string,
  imagen?: string,
  uid?: string,
  provider?: string
}