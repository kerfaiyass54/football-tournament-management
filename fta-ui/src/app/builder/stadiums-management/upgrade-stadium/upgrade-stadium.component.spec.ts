import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeStadiumComponent } from './upgrade-stadium.component';

describe('UpgradeStadiumComponent', () => {
  let component: UpgradeStadiumComponent;
  let fixture: ComponentFixture<UpgradeStadiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpgradeStadiumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpgradeStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
