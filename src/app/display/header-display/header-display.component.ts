import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../../blockchain.service';
import * as contractAddresses from '../../../utils/getContractAddress'

@Component({
  selector: 'app-header-display',
  templateUrl: './header-display.component.html',
  styleUrls: ['./header-display.component.css']
})
export class HeaderDisplayComponent implements OnInit {
  
  NFT: any;
  MyAccount = '';
  ChainId: any;
  GoatxStakeAmount: any = "10";
  Balance: any;
  GOATXBAL: any;
  mmask: any;
  isOpen: any;
  MyAccountDisplay: any;

  constructor(private blockchainService: BlockchainService) {
    this.mmask = false;
  }

  async detectMetamask() {
    this.mmask = '2';
  }

  showMenu() {
    if (this.isOpen=='N') {
      this.isOpen="Y";
    } else {
      this.isOpen="N";
    }
  }

  toEth(i: number) {

  }

  toWei(i: number) {

  }

  ngOnInit(): void {
      this.MyAccountDisplay = "Connect Account";
  }

  getAccount() {
    
  }
} 
