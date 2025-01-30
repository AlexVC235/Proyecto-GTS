import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosVideollamadasMujeresComponent } from './precios-videollamadas-mujeres.component';

describe('PreciosVideollamadasMujeresComponent', () => {
  let component: PreciosVideollamadasMujeresComponent;
  let fixture: ComponentFixture<PreciosVideollamadasMujeresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreciosVideollamadasMujeresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreciosVideollamadasMujeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
