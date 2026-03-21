import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseChatComponent } from './database-chat.component';

describe('DatabaseChatComponent', () => {
  let component: DatabaseChatComponent;
  let fixture: ComponentFixture<DatabaseChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabaseChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabaseChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
