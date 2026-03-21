import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentLocationsComponent } from './continent-locations.component';

describe('ContinentLocationsComponent', () => {
  let component: ContinentLocationsComponent;
  let fixture: ComponentFixture<ContinentLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinentLocationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinentLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
