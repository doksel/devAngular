import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortListUsersComponent } from './sort-list-users.component';

describe('SortListUsersComponent', () => {
  let component: SortListUsersComponent;
  let fixture: ComponentFixture<SortListUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortListUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
