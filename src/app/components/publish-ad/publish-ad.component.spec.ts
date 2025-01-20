import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishAdComponent } from './publish-ad.component';

describe('PublishAdComponent', () => {
  let component: PublishAdComponent;
  let fixture: ComponentFixture<PublishAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishAdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublishAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
