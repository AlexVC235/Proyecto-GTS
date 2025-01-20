import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  email: string = '';

  constructor(private router: Router) {}

  goToFavorites() {
    this.router.navigate(['/favoritos']);
  }

  navigateToPublishAd() {
    this.router.navigate(['/publicar']);
  }

  navigateToLogin() {
    this.router.navigate(['/control']);
  }

  navigateToCreateAccount() {
    this.router.navigate(['/nueva-cuenta']);
  }

  // Control para la lista de ciudades y los filtros
  cityListOpen = false;
  filtersOpen = false;

  @Output() hideHeader = new EventEmitter<boolean>();
  isMenuOpen: boolean = false;

  // Opciones para el filtro de precios
  priceOptions: number[] = [50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400];

  // Opciones para el filtro de edad (desde 18 a 51)
  ageOptions: number[] = Array.from({ length: 34 }, (_, i) => i + 18);

  // Opciones para el filtro de países
  countryOptions: string[] = [
    'Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Costa Rica', 'Cuba', 'Ecuador', 'El Salvador',
    'Guatemala', 'Honduras', 'México', 'Nicaragua', 'Panamá', 'Paraguay', 'Perú', 'República Dominicana',
    'Uruguay', 'Venezuela'
  ];

  priceSelected = false;
  ageSelected = false;

  selectedFilters: { [key: string]: string } = {};

  toggleCityList() {
    this.cityListOpen = !this.cityListOpen;
  }

  toggleFilters() {
    this.filtersOpen = !this.filtersOpen;
  }

  navigateAndHideHeader(route: string) {
    this.isMenuOpen = !this.isMenuOpen; // Alterna el estado del menú
    this.hideHeader.emit(false); // Emite evento para ocultar la cabecera
    this.router.navigate([route]); // Navega a la ruta especificada
  }

  onPriceSelect() {
    this.priceSelected = true;
  }

  onAgeSelect() {
    this.ageSelected = true;
  }

  selectOption(section: string, option: string) {
    if (!this.selectedFilters[section]) {
      this.selectedFilters[section] = option;
    }
  }

  isSelected(section: string, option: string): boolean {
    return this.selectedFilters[section] === option;
  }

  applyFilters() {
    // Lógica para aplicar los filtros
    this.closeFilterSection();
  }

  resetFilters() {
    this.selectedFilters = {};
    this.priceSelected = false;
    this.ageSelected = false;
    this.closeFilterSection();
  }

  closeFilterSection() {
    this.filtersOpen = false;
  }
}
