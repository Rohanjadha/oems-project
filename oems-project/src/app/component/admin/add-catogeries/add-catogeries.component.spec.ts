import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatogeriesComponent } from './add-catogeries.component';

describe('AddCatogeriesComponent', () => {
  let component: AddCatogeriesComponent;
  let fixture: ComponentFixture<AddCatogeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCatogeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCatogeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
