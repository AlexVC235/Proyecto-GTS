import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  showHeader: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Controla si se debe mostrar la cabecera según la ruta
        const hiddenRoutes = ['/contactar',
                              '/textos-legales',
                              '/textos-legales#terminosCondiciones',
                              '/textos-legales#politicaPrivacidad',
                              '/textos-legales#proteccionDatos',
                              '/textos-legales#cookies',
                              '/publicar',
                              '/control',
                              '/precios',
                              '/precios-travestis',
                              '/precios-hombres',
                              '/precios-masajes-mujeres',
                              '/precios-masajes-travestis',
                              '/precios-masajes-hombres',
                              '/precios-videollamadas-mujeres',
                              '/precios-videollamadas-travestis',
                              '/precios-videollamadas-hombres'];
        this.showHeader = !hiddenRoutes.includes(event.url);
      });
  }

  toggleHeader(show: boolean) {
    this.showHeader = show;
  }

  title = 'gatitas';
}
