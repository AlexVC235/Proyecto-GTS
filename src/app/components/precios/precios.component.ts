import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrl: './precios.component.css'
})
export class PreciosComponent {

  constructor(private router: Router) {}

  navigateToMenu() {
    this.router.navigate(['/menu']);
  }

  navigateToPublish() {
    this.router.navigate(['/publicar']);
  }

}
