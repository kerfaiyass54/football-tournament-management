import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryCardComponent } from './entry-card.component';

describe('EntryCardComponent', () => {
  let component: EntryCardComponent;
  let fixture: ComponentFixture<EntryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
