import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrl: './precios.component.css'
})
export class PreciosComponent {

  mostrarPlanesAdicionales: boolean = false;

  constructor(private router: Router) {}

  togglePlanesAdicionales() {
    this.mostrarPlanesAdicionales = !this.mostrarPlanesAdicionales;
  }

  navigateToMenu() {
    this.router.navigate(['/menu']);
  }

  // navigateToPrecios() {
  //   this.router.navigate(['/precios']);
  // }

  navigateToPublish() {
    this.router.navigate(['/publicar']);
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

  navigateToPreciosVideollamadasHombres() {
    this.router.navigate(['/precios-videollamadas-hombres']);
  }

}
