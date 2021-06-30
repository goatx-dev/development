import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { DataService } from '../../data.service';
import { BlockchainService } from '../../blockchain.service';
import * as contractAddresses from '../../../utils/getContractAddress';
import * as Tokens from  '../../../utils/tokens';
import { BigNumber, Contract, ethers } from 'ethers';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-trade-page',
  templateUrl: './trade-page.component.html',
  styleUrls: ['./trade-page.component.css']
})
export class TradePageComponent implements OnInit {

  // Template Variables
  tokenFrom: any = "X";
  tokenFromList: any = [];
  tokenTo: any = "X";
  tokenToList: any = [];
  errorMessage: any;
  MyAccountDisplay: any;
  balanceFrom: any;
  balanceTo: any;
  isFromTokenApproved: string = 'N';
  isToTokenApproved: string = 'N';

  MyAccount = '';
  ChainId: any;
  goatxstakeamount: any = "0";
  goatxunstakeamount: any = "0";
  bnb_balance: any;
  goatx_balance: any;
  busd_balance: any;
  GOATXBAL: any;
  GRAINBAL: any;
  sellAmount: any;
  buyAmount: any;
  poolBNB_GOAT: number = 0;
  poolBNB_BNB: number = 0;
  poolBUSD_GOAT: number = 0;
  poolBUSD_BUSD: number = 0;  
  priceAffect: number = 0;
  lastSellAmount: any;
  lastBuyAmount: any;
  poolBNB_GOAT_ETH: number = 0;
  poolBNB_BNB_ETH: number = 0;
  poolBUSD_GOAT_ETH: number = 0;
  poolBUSD_BUSD_ETH: number = 0;  

  poolBNB_ratio: number = 0;
  poolBUSD_ratio: number = 0;

  newGOATXBalance: number = 0;
  newBUSDBalance: number = 0;
  priceAfterTrade: number = 0;
  priceAffectDisplay: any;
  token0Address: any;
  token1Address: any;
  token0contract: any;
  token1contract: any;
  reserves0: any;
  reserves1: any;

  tokenSend: {
      address: string, 
      symbol: string, 
      reserves: number, 
      k: number,
      originalRate: number,
      newReserves: number,
      newRate: number,
      pctAffect: any
    }  = {
        address: 'x',
        symbol: 'x', 
        reserves: 0,        // queried from contract.
        k: 0,               // tokenSend.reserves * tokenReceived.reserves.
        originalRate: 0,    // tokenSend.reserves / tokenReceived.reserves.
        newReserves: 0,     // new reserves after transaction  
        newRate: 0,         // new exchange rate after transaction
        pctAffect: 0        // percentage of the exchange rate change.
      };

  tokenReceive: {
          address: string, 
          symbol: string, 
          reserves: number, 
          k: number,
          originalRate: number,
          newReserves: number,
          newRate: any,
          pctAffect: number
        }  = {
            address: 'x',
            symbol: 'x', 
            reserves: 0,    // queried from contract.
            k: 0,           // tokenSend.reserves * tokenReceived.reserves.
            originalRate: 0, // tokenReceived.reserves / tokenSend.reserves.
            newReserves: 0,      // new reserves after transaction
            newRate: 0,          // new exchange rate after transaction              
            pctAffect: 0        // percentage of the exchange rate change.            
      };

  tokenList2: any;

  amountSent: any;
  amountReceived: any;
  balance: any;
  rate: any;
  closeResult: string = "";
  buttonTitle: any = "Send Transaction";
  sendExact: any;
  submitStyle={'background-color':'rgba(0, 0, 0, 0)' };
  toStyle={'background-color':'rgba(0, 0, 0, 0)' };
  fromStyle={'background-color':'rgba(0, 0, 0, 0)' };
  constructor(private modalService: NgbModal, private activeRoute: ActivatedRoute, private dataService: DataService, private router: Router, private blockchainService: BlockchainService) { }

  openTradeConfirmation(content: any) {

  }

  async connectToMetamask() {
 
  }

  toEth(i: number) {

  }

  toEthMini(i: number) {

  }

  toWei(i: number) {

  }

  async getAccount() {

  }

  async getChainId() {
   this.ChainId = 56
  }

  async getBnbBalance() {
    this.bnb_balance = '0.000000'
  }

  async getSendingTokenBalance() {
       this.balanceFrom='10.00000';
  }

  async getReceivingTokenBalance() {
      this.balanceTo='11.00000';
  }

  async getBusdBalance() {
    this.busd_balance = '130.0000';
  }

  async getGoatxBalance() {
    this.goatx_balance = '0.00000';
  }

  async getPairContract() {
      this.tokenSend.k = 1;
      this.tokenReceive.k = 1;    
      this.tokenSend.originalRate = 1.00000;
      this.tokenReceive.originalRate = 1.00000; 
      this.rate='1.00000'   
      this.sellAmount=0;
      this.buyAmount=0;
      this.sendExact='Y';
    }

    onKeyUpEvent(event: any, direction: string, amount: any) {

    }
approveFromToken() {

}

approveToToken() {

}
    getTokenPairEstimated(direction: string, amount: any) {
 
    }

    async getBNBReserves() {

  }

  async getBUSDReserves() {

  }

  async getGrainBalance() {

  }

  async approveGoatx() {
 
  }

  async approveGrainStore() {
   }

  async stakeGoatx() {

  }

  async unstakeGoatx() {

  }  

  change_sell() {

  }

  change_buy() {

  }

  sendConfirmedTransaction() {

}

  async swapExactTokensForToken() {

  }

  async swapTokensForExactToken() {

}

  async swapBNBForExactToken() {

  }

  async swapExactBNBForToken() {

  }

  async swapTokenForExactBNB() {

  }

  async swapExactTokenForBNB() {

  }

  

  ngOnInit(): void {

  }

  getToTokenList() {

  }

  doTransaction() {

  }

  sendMax() {

  }

  setBalance() {
 
  }

  setSendExact() {
    this.sendExact='Y';
  }
  setReceiveExact() {
    this.sendExact='N';
  }
  async  checkSendingTokenApproved() {

  }
  async  checkReceivingTokenApproved() {
  }
}
