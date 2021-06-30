import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidityPageComponent } from './liquidity-page.component';

describe('LiquidityPageComponent', () => {
  let component: LiquidityPageComponent;
  let fixture: ComponentFixture<LiquidityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidityPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
