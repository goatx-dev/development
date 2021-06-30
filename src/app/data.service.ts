import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { isThisTypeNode } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  t: any;
  lastPostWallet: any;
  lastPostSymbol: any;
  lastPostBalance: any;

  constructor(private http: HttpClient) { }

  getTokenList() {

    const data = {
      "id": 1
    }
   
  this.t=[{
    "symbol": "GOATX",
    "token_name": "GOATx Liquidity Token",
    "price": "5.69",
    "price_BNB": "0.01409769"
  }, {
    "symbol": "SAFEMOON",
    "token_name": "SafeMoon",
    "price": "0",
    "price_BNB": "0.00000000"
  }, {
    "symbol": "WBNB",
    "token_name": "Wrapped BNB",
    "price": "403.96",
    "price_BNB": "1"
  }, {
    "symbol": "ETH",
    "token_name": "Ethereum Token",
    "price": "2835.18",
    "price_BNB": "7.02247550"
  }
  ]

  return this.t;

  } 

  getTokenPairs() {

    const data = {
      "id": 1
    }

    this.t=[{
      "symbol": "GOATX",
      "token_name": "GOATx Liquidity Token",
      "price": "5.69",
      "price_BNB": "0.01409769"
    }, {
      "symbol": "SAFEMOON",
      "token_name": "SafeMoon",
      "price": "0",
      "price_BNB": "0.00000000"
    }, {
      "symbol": "WBNB",
      "token_name": "Wrapped BNB",
      "price": "403.96",
      "price_BNB": "1"
    }, {
      "symbol": "ETH",
      "token_name": "Ethereum Token",
      "price": "2835.18",
      "price_BNB": "7.02247550"
    }
    ]
  return this.t;

  } 

  postAirdrop(id: string) {

    const data = {
      "id": id
    }
    this.t=[]
    return(this.t);
  } 
 
  postBalance(address:string, symbol:string, name:string, balance:string) {
     address="";
     symbol="";
     name="";
     balance=""
  }

  postLP(address:string, id: string) {
     address="";
     id="";
  } 

  getBackgroundData() {

    const data = {
      "id": 1
    }

  this.t={"price":"5.63","market_cap":"62,395,134.34","total_supply":"11,085,924","pct_change":"-17.983%"}
  return this.t;

  } 

  getActiveOrders() {

   
    this.t={"price":"5.63","market_cap":"62,395,134.34","total_supply":"11,085,924","pct_change":"-17.983%"}
    return this.t;
  
  } 

  getOneOrder(id: any) {

    this.t={"price":"5.63","market_cap":"62,395,134.34","total_supply":"11,085,924","pct_change":"-17.983%"}
    return this.t;
  
  } 

  getOneClient(id: any) {

    this.t={"price":"5.63","market_cap":"62,395,134.34","total_supply":"11,085,924","pct_change":"-17.983%"}
    return this.t;
  
  } 

  getClientList() {

    this.t={"price":"5.63","market_cap":"62,395,134.34","total_supply":"11,085,924","pct_change":"-17.983%"}
    return this.t;
  
  } 

}
