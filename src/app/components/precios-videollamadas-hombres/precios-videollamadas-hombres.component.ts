import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-precios-videollamadas-hombres',
  templateUrl: './precios-videollamadas-hombres.component.html',
  styleUrl: './precios-videollamadas-hombres.component.css'
})
export class PreciosVideollamadasHombresComponent {

  mostrarPlanesAdicionales: boolean = false;

  constructor(private router: Router) {}

  togglePlanesAdicionales() {
    this.mostrarPlanesAdicionales = !this.mostrarPlanesAdicionales;
  }

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

  navigateToPreciosMasajesHombres() {
    this.router.navigate(['/precios-masajes-hombres']);
  }

  navigateToPreciosVideollamadasMujeres() {
    this.router.navigate(['/precios-videollamadas-mujeres']);
  }

  navigateToPreciosVideollamadasTravestis() {
    this.router.navigate(['/precios-videollamadas-travestis']);
  }

}
