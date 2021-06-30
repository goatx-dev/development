import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokerNavComponent } from './broker-nav.component';

describe('BrokerNavComponent', () => {
  let component: BrokerNavComponent;
  let fixture: ComponentFixture<BrokerNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrokerNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
