import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosVideollamadasTravestisComponent } from './precios-videollamadas-travestis.component';

describe('PreciosVideollamadasTravestisComponent', () => {
  let component: PreciosVideollamadasTravestisComponent;
  let fixture: ComponentFixture<PreciosVideollamadasTravestisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreciosVideollamadasTravestisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreciosVideollamadasTravestisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
