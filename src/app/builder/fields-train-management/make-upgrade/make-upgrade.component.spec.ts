import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeUpgradeComponent } from './make-upgrade.component';

describe('MakeUpgradeComponent', () => {
  let component: MakeUpgradeComponent;
  let fixture: ComponentFixture<MakeUpgradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeUpgradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MakeUpgradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
