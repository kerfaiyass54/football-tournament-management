import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLocationsListComponent } from './all-locations-list.component';

describe('AllLocationsListComponent', () => {
  let component: AllLocationsListComponent;
  let fixture: ComponentFixture<AllLocationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllLocationsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLocationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
