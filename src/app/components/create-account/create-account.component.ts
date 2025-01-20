import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent {
  email: string = '';

  sendValidationEmail() {
    if (!this.email) {
      alert('El campo Email es obligatorio');
    } else {
      alert('Se ha enviado un correo para validar tu cuenta.');
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
