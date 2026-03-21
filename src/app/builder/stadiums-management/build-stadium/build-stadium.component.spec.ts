import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildStadiumComponent } from './build-stadium.component';

describe('BuildStadiumComponent', () => {
  let component: BuildStadiumComponent;
  let fixture: ComponentFixture<BuildStadiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildStadiumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuildStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
