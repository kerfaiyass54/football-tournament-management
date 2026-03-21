import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeInjuriesComponent } from './see-injuries.component';

describe('SeeInjuriesComponent', () => {
  let component: SeeInjuriesComponent;
  let fixture: ComponentFixture<SeeInjuriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeeInjuriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeeInjuriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
