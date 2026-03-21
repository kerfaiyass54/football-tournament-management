import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupporterComponent } from './supporter.component';

describe('SupporterComponent', () => {
  let component: SupporterComponent;
  let fixture: ComponentFixture<SupporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupporterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
