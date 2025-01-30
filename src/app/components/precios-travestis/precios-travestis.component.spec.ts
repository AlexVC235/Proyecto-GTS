import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreciosTravestisComponent } from './precios-travestis.component';

describe('PreciosTravestisComponent', () => {
  let component: PreciosTravestisComponent;
  let fixture: ComponentFixture<PreciosTravestisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreciosTravestisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreciosTravestisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
