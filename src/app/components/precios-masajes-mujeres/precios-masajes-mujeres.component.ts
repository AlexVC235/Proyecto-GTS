import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-precios-masajes-mujeres',
  templateUrl: './precios-masajes-mujeres.component.html',
  styleUrl: './precios-masajes-mujeres.component.css'
})
export class PreciosMasajesMujeresComponent {

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
