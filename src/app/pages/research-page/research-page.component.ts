import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-research-page',
  templateUrl: './research-page.component.html',
  styleUrls: ['./research-page.component.css']
})
export class ResearchPageComponent implements OnInit {
  p:any;
  term: any;
  data: any;

  constructor(private activeRoute: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.data.subscribe(({ 
      data })=> { 
      console.log('DisplayMainComponent Got Data');
      this.data=data;
      console.log(this.data);
    })    
  }

}
