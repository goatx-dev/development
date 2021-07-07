import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftGalleryComponent } from './nft-gallery.component';

describe('NftGalleryComponent', () => {
  let component: NftGalleryComponent;
  let fixture: ComponentFixture<NftGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
