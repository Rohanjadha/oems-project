import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuieesComponent } from './add-quiees.component';

describe('AddQuieesComponent', () => {
  let component: AddQuieesComponent;
  let fixture: ComponentFixture<AddQuieesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuieesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddQuieesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
