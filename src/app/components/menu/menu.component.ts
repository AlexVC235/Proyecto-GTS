import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(private router: Router) {}

  navigateBack() {
    this.router.navigate(['/']);
  }

  navigateToContact() {
    this.router.navigate(['/contactar']);
  }

  navigateToTextosLegales() {
    this.router.navigate(['/textos-legales']);
  }

  navigateToPublishAd() {
    this.router.navigate(['/publicar']);
  }

  navigateToControl() {
    this.router.navigate(['/control']);
  }
}
