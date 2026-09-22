import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewquieesComponent } from './admin-viewquiees.component';

describe('AdminViewquieesComponent', () => {
  let component: AdminViewquieesComponent;
  let fixture: ComponentFixture<AdminViewquieesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewquieesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewquieesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
