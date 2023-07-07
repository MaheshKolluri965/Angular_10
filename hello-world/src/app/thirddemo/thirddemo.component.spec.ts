import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirddemoComponent } from './thirddemo.component';

describe('ThirddemoComponent', () => {
  let component: ThirddemoComponent;
  let fixture: ComponentFixture<ThirddemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirddemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirddemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
