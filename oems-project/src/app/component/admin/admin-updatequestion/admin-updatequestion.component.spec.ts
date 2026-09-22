import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdatequestionComponent } from './admin-updatequestion.component';

describe('AdminUpdatequestionComponent', () => {
  let component: AdminUpdatequestionComponent;
  let fixture: ComponentFixture<AdminUpdatequestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUpdatequestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUpdatequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
