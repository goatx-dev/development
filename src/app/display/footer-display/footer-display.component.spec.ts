import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDisplayComponent } from './footer-display.component';

describe('FooterDisplayComponent', () => {
  let component: FooterDisplayComponent;
  let fixture: ComponentFixture<FooterDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
