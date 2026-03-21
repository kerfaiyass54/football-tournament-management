import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCareerComponent } from './add-career.component';

describe('AddCareerComponent', () => {
  let component: AddCareerComponent;
  let fixture: ComponentFixture<AddCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCareerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
