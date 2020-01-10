import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookActionComponent } from './facebook-action.component';

describe('FacebookActionComponent', () => {
  let component: FacebookActionComponent;
  let fixture: ComponentFixture<FacebookActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
