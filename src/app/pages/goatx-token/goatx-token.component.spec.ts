import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoatxTokenComponent } from './goatx-token.component';

describe('GoatxTokenComponent', () => {
  let component: GoatxTokenComponent;
  let fixture: ComponentFixture<GoatxTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoatxTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoatxTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
