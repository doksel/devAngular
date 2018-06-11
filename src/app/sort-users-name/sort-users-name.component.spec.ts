import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortUsersNameComponent } from './sort-users-name.component';

describe('SortUsersNameComponent', () => {
  let component: SortUsersNameComponent;
  let fixture: ComponentFixture<SortUsersNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortUsersNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortUsersNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
