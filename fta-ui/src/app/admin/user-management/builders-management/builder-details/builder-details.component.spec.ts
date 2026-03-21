import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderDetailsComponent } from './builder-details.component';

describe('BuilderDetailsComponent', () => {
  let component: BuilderDetailsComponent;
  let fixture: ComponentFixture<BuilderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuilderDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
