import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStadiumsComponent } from './my-stadiums.component';

describe('MyStadiumsComponent', () => {
  let component: MyStadiumsComponent;
  let fixture: ComponentFixture<MyStadiumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyStadiumsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyStadiumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
