import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.css'],
})
export class CookieConsentComponent implements OnInit {
  showModal: boolean = false;

  ngOnInit(): void {
    if (typeof window !== 'undefined' && localStorage) {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setTimeout(() => {
          this.showModal = true;
        }, 1000);
      }
    } else {
      setTimeout(() => {
        this.showModal = true;
      }, 1000);
    }
  }

  acceptConsent(): void {
    if (typeof window !== 'undefined' && localStorage) {
      localStorage.setItem('cookieConsent', 'accepted');
    }
    this.showModal = false;
  }
}
