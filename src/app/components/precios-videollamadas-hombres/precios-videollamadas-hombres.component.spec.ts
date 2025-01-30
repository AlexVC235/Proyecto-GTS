import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosVideollamadasHombresComponent } from './precios-videollamadas-hombres.component';

describe('PreciosVideollamadasHombresComponent', () => {
  let component: PreciosVideollamadasHombresComponent;
  let fixture: ComponentFixture<PreciosVideollamadasHombresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreciosVideollamadasHombresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreciosVideollamadasHombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
