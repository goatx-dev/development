import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenPairsComponent } from './token-pairs.component';

describe('TokenPairsComponent', () => {
  let component: TokenPairsComponent;
  let fixture: ComponentFixture<TokenPairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenPairsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenPairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
