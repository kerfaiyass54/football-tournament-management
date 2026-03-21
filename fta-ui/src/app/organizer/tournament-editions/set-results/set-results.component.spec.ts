import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetResultsComponent } from './set-results.component';

describe('SetResultsComponent', () => {
  let component: SetResultsComponent;
  let fixture: ComponentFixture<SetResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
