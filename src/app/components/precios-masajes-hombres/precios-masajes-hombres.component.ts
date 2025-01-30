import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-precios-masajes-hombres',
  templateUrl: './precios-masajes-hombres.component.html',
  styleUrl: './precios-masajes-hombres.component.css'
})
export class PreciosMasajesHombresComponent {

  constructor(private router: Router) {}

  navigateToMenu() {
    this.router.navigate(['/menu']);
  }

  navigateToPublish() {
    this.router.navigate(['/publicar']);
  }

  navigateToPrecios() {
    this.router.navigate(['/precios']);
  }

  navigateToPreciosTravestis() {
    this.router.navigate(['/precios-travestis']);
  }

  navigateToPreciosHombres() {
    this.router.navigate(['/precios-hombres']);
  }

  navigateToPreciosMasajesMujeres() {
    this.router.navigate(['/precios-masajes-mujeres']);
  }

  navigateToPreciosMasajesTravestis() {
    this.router.navigate(['/precios-masajes-travestis']);
  }

  navigateToPreciosVideollamadasMujeres() {
    this.router.navigate(['/precios-videollamadas-mujeres']);
  }

  navigateToPreciosVideollamadasTravestis() {
    this.router.navigate(['/precios-videollamadas-travestis']);
  }

  navigateToPreciosVideollamadasHombres() {
    this.router.navigate(['/precios-videollamadas-hombres']);
  }

}
