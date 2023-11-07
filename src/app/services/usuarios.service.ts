import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private Usuario: Usuario[] = [];

  constructor() { 
    this.Usuario.push({
      username: "victor",
      password: "12345"

    });
  }

  getUsuario(){
    return this.Usuario;
  }

  login(username: string, password: string){
    if(username === this.Usuario[0].username && password === this.Usuario[0].password){
      return true;
    }else{
      return false;
    }
  }

}
