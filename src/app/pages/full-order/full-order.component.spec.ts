import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullOrderComponent } from './full-order.component';

describe('FullOrderComponent', () => {
  let component: FullOrderComponent;
  let fixture: ComponentFixture<FullOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
