import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStadiumComponent } from './details-stadium.component';

describe('DetailsStadiumComponent', () => {
  let component: DetailsStadiumComponent;
  let fixture: ComponentFixture<DetailsStadiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsStadiumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
