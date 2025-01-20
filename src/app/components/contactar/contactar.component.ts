import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.component.html',
  styleUrl: './contactar.component.css'
})
export class ContactarComponent implements OnInit {
  contactForm: FormGroup;
  captchaError: string | null = null;

  constructor(private router: Router, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      asunto: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  navigateToMenu() {
    this.router.navigate(['/menu']);
  }

  // Método para manejar la resolución del captcha
  onCaptchaResolved(response: string | null): void {
    if (!response) {
      this.captchaError = 'Por favor completa el captcha.';
    } else {
      this.captchaError = null; // Captcha resuelto correctamente
    }
  }

  ngOnInit() {

  }

  onSubmit() {
    // Aquí implementarás la lógica para enviar los datos del formulario
    // Puedes usar un servicio HTTP para enviar los datos a un servidor
    console.log(this.contactForm.value);
  }

}
