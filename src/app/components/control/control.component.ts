import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {

  constructor(private router: Router) {}

  navigateToMenu() {
    this.router.navigate(['/menu']);
  }

}
