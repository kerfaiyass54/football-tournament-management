import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTournamentsComponent } from './list-tournaments.component';

describe('ListTournamentsComponent', () => {
  let component: ListTournamentsComponent;
  let fixture: ComponentFixture<ListTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTournamentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
