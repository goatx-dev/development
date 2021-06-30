import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private dataService: DataService, private router: Router) { }
  p: any;
  term: any;
  data: any;
  ngOnInit(): void {
    this.activeRoute.data.subscribe(({ 
      data })=> { 
      console.log('DisplayMainComponent Got Data');
      this.data=data;
      console.log(this.data);
    })   

}
}