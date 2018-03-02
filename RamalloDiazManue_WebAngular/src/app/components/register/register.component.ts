import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = '';
  pass = '';
  nombre_grupo = '';
  nombre = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    if (this.email !== '' || this.pass !== '' || this.nombre_grupo !== '' || this.nombre !== '') {
      this.authService.doRegister(this.email, this.pass, this.nombre, this.nombre_grupo).subscribe(
        usuario => {
          this.authService.setLoginData(usuario.token, usuario.nombre);
          this.router.navigate(['/listadoCampaign']);
        },
        error => {
          alert('Registro incorrecto');
        }
      );
    }else {
      alert('Complete todos los campos');
    }
  }

}
