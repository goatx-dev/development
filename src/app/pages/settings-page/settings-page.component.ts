import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {
  buttonTitle: any = "";
  sendExact: any = "Y";
  MyAccountDisplay: any = "";

  constructor() { }

  ngOnInit(): void {
  }

}
