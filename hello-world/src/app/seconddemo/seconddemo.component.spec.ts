import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconddemoComponent } from './seconddemo.component';

describe('SeconddemoComponent', () => {
  let component: SeconddemoComponent;
  let fixture: ComponentFixture<SeconddemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeconddemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeconddemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
