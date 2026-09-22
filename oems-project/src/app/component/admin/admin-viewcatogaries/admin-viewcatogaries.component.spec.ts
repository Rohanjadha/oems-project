import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewcatogariesComponent } from './admin-viewcatogaries.component';

describe('AdminViewcatogariesComponent', () => {
  let component: AdminViewcatogariesComponent;
  let fixture: ComponentFixture<AdminViewcatogariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewcatogariesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewcatogariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
