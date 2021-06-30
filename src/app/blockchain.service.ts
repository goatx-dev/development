import { analyzeAndValidateNgModules, ConstantPool } from '@angular/compiler';
import { Injectable, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { BigNumber, Contract, ethers } from 'ethers';
import * as abis from './../utils/getAbis';
import * as contractAddresses from './../utils/getContractAddress';

declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  ethereum: any;
  private signer: any;
  private enable: any;
  private accounts: any;
  public currentChainId: number = 0;
  public validChain: boolean = false;

  private pancakeSwapContract = "0x10ED43C718714eb63d5aA57B78B54704E256024E";

  constructor() { 

  }

  async detectMetamask() {
    //
    //---- Detect whether the browser is:
    // 0:  Does not support MetaMask.
    // 1:  Supports MetaMask but it is not installed.
    // 2:  Supports MetaMask and it is installed.
    //
    return '2';
  }

  async connectToMetamask() {
    //
    //-- Connect to MetaMask and set listeners for chain or account changes.
    //

  }

  private async enableMetaMaskAccount(): Promise<any> {

  }

  toEthRounded(i: number) {

  }
 
  async getAccount() {

  }

  async getChainId() {

  }
 
  async getBnbBalance(address: string) {
    return '0.0000000000';
  }

  async handleChainChange() {

  }

  async handleAccountChange() {

  }

  async getBusdBalance(userAddress: string) {
     return '0.000000'
  }

  async getTokenAuthorizedForContract(userAddress: string, tokenAddress:string, spenderAddress:string) {
    return false;
  }

  getTokenContractBySymbol(symbol: string) {

  }

  async getTokenBalanceBySymbol(symbol: string, userAddress: string) {

  }

  async getTokenBalance(contractAddress: string, userAddress: string) {

  }

  async getReserves(contractAddress: string) {

  }

  async getGoatxReward() {

  }

  async approveTokenForContract(tokenAddress: string, spenderAddress: string) {

  }

  async stakeGoatx(masterChef: string, amount: string) {

  }

  async unstakeGoatx(masterChef: string, amount: string) {

  }

  async getPancakePairContract(token1: string, token2: string)
  {

  }
  async getPancakePairTokenAddress(pairContract: string)
  {

  }

  async swapExactTokensForTokens(router: string, token1: string,
    token2: string, token1Amount: string, minReceived: string) {
  
  }
    
async swapTokensForExactTokens(router: string, token1: string,
    token2: string, token2Amount: string, maxToken1Sent: string) {
  
       }
      
async swapExactEthForTokens(router: string, weth: string, token2:  
    string, amountOutMin: string, overrides: any) {
  
       }
    
       async swapTokensForExactETH(router: string, token1: string, weth:  
    string, amountOut: string, amountInMax: string) {
 
       }

async swapETHForExactTokens(router: string, weth: string, token2:  
        string, exactAmountOut: string, overrides: any) {

           }

async swapExactTokensForETH(router: string, token1: string, weth:  
    string, amountIn: string, amountOutMin: string) {
  
       }

       async safeGOATxTransfer(addressFrom: string, addressTo: string, amount: string) {
  
      }
      async approveToken(tokenAddress: string, spenderAddress: string) {

      }
      
}
 