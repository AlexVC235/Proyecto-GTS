import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-textos-legales',
  templateUrl: './textos-legales.component.html',
  styleUrl: './textos-legales.component.css'
})
export class TextosLegalesComponent implements OnInit, OnDestroy {

  private fragmentSubscription: Subscription = new Subscription();
  private sections = ['terminosCondiciones', 'politicaPrivacidad', 'proteccionDatos', 'cookies'];

  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateToMenu() {
    this.router.navigate(['/menu']);
  }

  ngOnInit() {
    this.fragmentSubscription = this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToSection(fragment, false);
      }
    });
  }

  ngOnDestroy() {
    this.fragmentSubscription.unsubscribe();
  }

  scrollToSection(sectionId: string, shouldPushState = true) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (shouldPushState) {
      this.router.navigate([], { fragment: sectionId });
    }
  }

  navigateTo(direction: 'next' | 'prev') {
    const currentFragment = this.route.snapshot.fragment || this.sections[0];
    const currentIndex = this.sections.indexOf(currentFragment);
    let newIndex = currentIndex;

    if (direction === 'next') {
      newIndex = (currentIndex + 1) % this.sections.length;
    } else if (direction === 'prev') {
      newIndex = (currentIndex - 1 + this.sections.length) % this.sections.length;
    }

    const newSection = this.sections[newIndex];
    this.scrollToSection(newSection, true);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.navigateTo('next');
    } else if (event.key === 'ArrowLeft') {
      this.navigateTo('prev');
    }
  }

}
