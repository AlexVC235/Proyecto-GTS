import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextosLegalesComponent } from './textos-legales.component';

describe('TextosLegalesComponent', () => {
  let component: TextosLegalesComponent;
  let fixture: ComponentFixture<TextosLegalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextosLegalesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextosLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
