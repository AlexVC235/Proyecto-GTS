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
        const hiddenRoutes = ['/contactar', '/textos-legales', '/publicar', '/control', '/precios']; // Agrega otras rutas aquí si es necesario
        this.showHeader = !hiddenRoutes.includes(event.url);
      });
  }

  toggleHeader(show: boolean) {
    this.showHeader = show;
  }

  title = 'gatitas';
}
