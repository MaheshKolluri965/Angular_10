import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveForms1Component } from './reactive-forms1.component';

describe('ReactiveForms1Component', () => {
  let component: ReactiveForms1Component;
  let fixture: ComponentFixture<ReactiveForms1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveForms1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveForms1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
