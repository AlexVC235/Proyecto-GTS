import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';

  handleLogin() {
    if (!this.email) {
      alert('El campo Email es obligatorio');
    }
  }

  openGoogleSignIn() {
    window.open(
      'https://accounts.google.com/v3/signin/identifier',
      '_blank',
      'width=500,height=600'
    );
  }
}
