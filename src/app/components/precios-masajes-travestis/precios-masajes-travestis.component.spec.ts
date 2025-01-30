import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosMasajesTravestisComponent } from './precios-masajes-travestis.component';

describe('PreciosMasajesTravestisComponent', () => {
  let component: PreciosMasajesTravestisComponent;
  let fixture: ComponentFixture<PreciosMasajesTravestisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreciosMasajesTravestisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreciosMasajesTravestisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
