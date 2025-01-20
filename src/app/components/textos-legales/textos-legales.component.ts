import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-textos-legales',
  templateUrl: './textos-legales.component.html',
  styleUrl: './textos-legales.component.css'
})
export class TextosLegalesComponent {

  constructor(private router: Router) {}

  navigateToMenu() {
    this.router.navigate(['/menu']);
  }

}
