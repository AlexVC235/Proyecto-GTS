import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publish-ad',
  templateUrl: './publish-ad.component.html',
  styleUrls: ['./publish-ad.component.css'],
})
export class PublishAdComponent {
  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToCreateAccount() {
    this.router.navigate(['/nueva-cuenta']);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
}
