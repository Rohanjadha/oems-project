import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWelcomepageComponent } from './user-welcomepage.component';

describe('UserWelcomepageComponent', () => {
  let component: UserWelcomepageComponent;
  let fixture: ComponentFixture<UserWelcomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWelcomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWelcomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
