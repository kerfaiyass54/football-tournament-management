import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildersAddingComponent } from './builders-adding.component';

describe('BuildersAddingComponent', () => {
  let component: BuildersAddingComponent;
  let fixture: ComponentFixture<BuildersAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildersAddingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildersAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
