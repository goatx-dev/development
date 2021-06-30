import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../../data.service';
import { BlockchainService } from '../../blockchain.service';
import * as contractAddresses from '../../../utils/getContractAddress';

@Component({
  selector: 'app-broker-page',
  templateUrl: './broker-page.component.html',
  styleUrls: ['./broker-page.component.css']
})
export class BrokerPageComponent implements OnInit {

constructor(private activeRoute: ActivatedRoute, private dataService: DataService, private router: Router, private blockchainService: BlockchainService) { }
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

 doAirdrop(address: string, amount: string) {
     this.blockchainService.safeGOATxTransfer("0x951F430EebB6865467969Fa1Cf5f1625d717A2d1",address,amount);
 }

 postComplete(address: string) {
   console.log('Post Airdrop');
  this.dataService.postAirdrop(address).subscribe((data:any)=> {
    console.log(data);
    //location.reload();
  });
 }
 doApprove() {
   this.blockchainService.approveToken("0x6D2baf9b208967Bd769Ce71D6c772CD7FeFE4C28","0x951F430EebB6865467969Fa1Cf5f1625d717A2d1");
 }

}
