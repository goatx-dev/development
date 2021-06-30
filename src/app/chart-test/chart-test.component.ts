import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-chart-test',
  templateUrl: './chart-test.component.html',
  styleUrls: ['./chart-test.component.css']
})
export class ChartTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public pieChart: GoogleChartInterface = {
    chartType: 'LineChart',
    dataTable: [
      ['2004',20,70],
      ['2005',24,65],
      ['2006',26,50],
      ['2007',32,52],
      ['2008',37,46],
      ['2009',50,40],
      ['2010',45,30],
      ['2011',42,16],
      ['2012',37,22],
      ['2013',50,28]
    ],
    firstRowIsData: true,
    options: {'title': 'Goatx Price',
      legend: 'none',
      curveType: 'function',
     },
  };
}
