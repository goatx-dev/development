import { Component, OnInit } from '@angular/core';
import { Gallery } from 'ng-gallery';

@Component({
  selector: 'app-nft-gallery',
  templateUrl: './nft-gallery.component.html',
  styleUrls: ['./nft-gallery.component.css']
})
export class NftGalleryComponent implements OnInit {

  constructor(public gallery: Gallery) { }

  ngOnInit(): void {
  }

}
