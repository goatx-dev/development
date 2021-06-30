import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-token-list',
  templateUrl: './token-list.component.html',
  styleUrls: ['./token-list.component.css']
})
export class TokenListComponent implements OnInit {
  
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
