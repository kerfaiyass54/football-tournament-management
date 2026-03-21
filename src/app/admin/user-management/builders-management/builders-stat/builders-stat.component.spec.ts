import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildersStatComponent } from './builders-stat.component';

describe('BuildersStatComponent', () => {
  let component: BuildersStatComponent;
  let fixture: ComponentFixture<BuildersStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildersStatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildersStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
