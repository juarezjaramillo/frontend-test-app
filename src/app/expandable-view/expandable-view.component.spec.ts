import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableViewComponent } from './expandable-view.component';

describe('ExpandableViewComponent', () => {
  let component: ExpandableViewComponent;
  let fixture: ComponentFixture<ExpandableViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
