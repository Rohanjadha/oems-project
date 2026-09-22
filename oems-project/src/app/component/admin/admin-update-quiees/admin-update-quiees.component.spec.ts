import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdateQuieesComponent } from './admin-update-quiees.component';

describe('AdminUpdateQuieesComponent', () => {
  let component: AdminUpdateQuieesComponent;
  let fixture: ComponentFixture<AdminUpdateQuieesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdateQuieesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdateQuieesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
