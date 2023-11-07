import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private usuariosService: UsuariosService) { }

  login() {
    const isAuthenticated = this.usuariosService.login(this.username, this.password);

    if (isAuthenticated) {
      this.router.navigate(['tabs/tab1']);
    } else {
      console.log('Nombre de usuario o contraseña incorrectos');
    }
  }
}
