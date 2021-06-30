import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenAssetsComponent } from './token-assets.component';

describe('TokenAssetsComponent', () => {
  let component: TokenAssetsComponent;
  let fixture: ComponentFixture<TokenAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenAssetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
