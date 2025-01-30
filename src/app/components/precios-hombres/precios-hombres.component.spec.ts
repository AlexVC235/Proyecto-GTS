import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosHombresComponent } from './precios-hombres.component';

describe('PreciosHombresComponent', () => {
  let component: PreciosHombresComponent;
  let fixture: ComponentFixture<PreciosHombresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreciosHombresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreciosHombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
