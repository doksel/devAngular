import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortUsersDateComponent } from './sort-users-date.component';

describe('SortUsersDateComponent', () => {
  let component: SortUsersDateComponent;
  let fixture: ComponentFixture<SortUsersDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortUsersDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortUsersDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
