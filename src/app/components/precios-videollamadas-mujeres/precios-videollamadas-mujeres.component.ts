import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-precios-videollamadas-mujeres',
  templateUrl: './precios-videollamadas-mujeres.component.html',
  styleUrl: './precios-videollamadas-mujeres.component.css'
})
export class PreciosVideollamadasMujeresComponent {

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

  // navigateToPreciosVideollamadasMujeres() {
  //   this.router.navigate(['/precios-videollamadas-mujeres']);
  // }

  navigateToPreciosVideollamadasTravestis() {
    this.router.navigate(['/precios-videollamadas-travestis']);
  }

  navigateToPreciosVideollamadasHombres() {
    this.router.navigate(['/precios-videollamadas-hombres']);
  }

}
