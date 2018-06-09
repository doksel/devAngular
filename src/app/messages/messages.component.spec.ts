import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassegesComponent } from './masseges.component';

describe('MassegesComponent', () => {
  let component: MassegesComponent;
  let fixture: ComponentFixture<MassegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
