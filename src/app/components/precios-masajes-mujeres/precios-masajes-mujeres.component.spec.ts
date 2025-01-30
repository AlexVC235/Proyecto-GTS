import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosMasajesMujeresComponent } from './precios-masajes-mujeres.component';

describe('PreciosMasajesMujeresComponent', () => {
  let component: PreciosMasajesMujeresComponent;
  let fixture: ComponentFixture<PreciosMasajesMujeresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreciosMasajesMujeresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreciosMasajesMujeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
