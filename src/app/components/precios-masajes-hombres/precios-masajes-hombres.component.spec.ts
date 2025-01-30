import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosMasajesHombresComponent } from './precios-masajes-hombres.component';

describe('PreciosMasajesHombresComponent', () => {
  let component: PreciosMasajesHombresComponent;
  let fixture: ComponentFixture<PreciosMasajesHombresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreciosMasajesHombresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreciosMasajesHombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
