import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';
import { BigNumber, Contract, ethers } from 'ethers';
import * as abis from './../utils/getAbis';
import * as contractAddresses from './../utils/getContractAddress';

@Injectable({
  providedIn: 'root'
})
export class TradingService {
  
  ethereum: any;
  private signer: any;
  private enable: any;
  private accounts: any;
  private pancakeSwapContract = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
  
  constructor() { }

  async detectMetamask() {
    //
    // Detect if Browser supports Metamask and 
    // whether Metamask is installed.
    // Returns:
    //   0:  Browser does not support MetaMask.
    //   1:  Browser supports MetaMask but not installed.
    //   2:  Browser supports MetaMask and it is installed.
    //
    if (window.ethereum === undefined) {
      return '0';
    } else {
      if (typeof window.ethereum !== 'undefined') {
        return '1';
      } else {
        return '2';
      }
    }
  }

  async connectToMetamask() {
    //
    // Connect to MetaMask.
    //
    if (window.ethereum === undefined) {
      alert('Non-Ethereum browser detected. Install MetaMask');
    } else {
      if (typeof window.ethereum !== 'undefined') {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        window.ethereum.on('chainChanged', (_chainId: any) => this.handleChainChange());
        window.ethereum.on('accountsChanged', (_accounts: any) => this.handleAccountChange());
      } 
      this.enable = this.enableMetaMaskAccount();
    }
  }

  private async enableMetaMaskAccount(): Promise<any> {
    //
    // I don't know what this does.
    //
    let enable = false;
    await new Promise((resolve, reject) => {
      enable = window.ethereum.request({ method: 'eth_requestAccounts' })
    })
    return Promise.resolve(enable);
  }

  toEthRounded(i: number) {
    //
    // Move decimal 18 spaces to left.
    //
    let a: number;
    a = i/1000000000000000000;
    return a.toPrecision(9);
  }
 
  async getAccount() {
    //
    // Return Array of Accounts in the metamask wallet.
    // account[0] is the connected account.
    //
    let accounts: [];
    accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    return (accounts);
  }

  async getChainId() {
    //
    // Get the Chain ID... Must be 56 for Binance
    //
    let chainId: number;
      chainId = parseInt(window.ethereum.chainId);
    return (chainId);
  }
 
  async getBnbBalance(address: string) {
    //
    // Get the BNB COIN Balance for the connected account.
    //
    let balance: string;
      balance = await window.ethereum.request({ method: 'eth_getBalance',"params":[address,'latest'] })
      return(balance);
  }

  async handleChainChange() {
    //
    // If the chain changes, reload the page.  
    // This is added to an event listener.
    //
    window.location.reload();
  }

  async handleAccountChange() {
    //
    // If the account changes, reload the page.
    // This is added to an event listener.
    //
    window.location.reload();
  }

  getTokenContractBySymbol(symbol: string) {
    //
    //-- Return Contract Address for Symbol.
    //
    let tokenContractAddress: string;
    let token: any=contractAddresses.getTokenBySymbol(symbol);
    tokenContractAddress=token.address;
    return tokenContractAddress;
  }

async getTokenBalanceBySymbol(symbol: string, userAddress: string) {
    //
    //-- Return a user's balance of a token.
    //
    let balance: number = 0;
    let contractAddress: string = this.getTokenContractBySymbol(symbol);
    if (contractAddress!="") {
      let balance: number;
      let tokenContract: Contract;
      var provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      tokenContract = new ethers.Contract( contractAddress , abis.getAbiForToken() , provider )
      console.log('Getting balance for ' + tokenContract.address);
      tokenContract.connect(provider); 
      balance = await tokenContract.balanceOf(userAddress);
      return balance;
    } else {
      return balance;
    }
}

async getSendingTokenBalance() {
    //
    //-- Return a user's balance of a token.
    //
    let balance: number = 0;
    let contractAddress: string = this.getTokenContractBySymbol(this.tokenFr);
    if (contractAddress!="") {
      let balance: number;
      let tokenContract: Contract;
      var provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      tokenContract = new ethers.Contract( contractAddress , abis.getAbiForToken() , provider )
      console.log('Getting balance for ' + tokenContract.address);
      tokenContract.connect(provider); 
      balance = await tokenContract.balanceOf(userAddress);
      return balance;
    } else {
      return balance;
    }
}

async getTokenBalance(contractAddress: string, userAddress: string) {
  //
  // Get account's balance for a token
  //
    let balance: number;
    let tokenContract: Contract;
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    tokenContract = new ethers.Contract(contractAddress, abis.getAbiForToken() , provider )
    console.log('Getting balance for ' + tokenContract.address);
    tokenContract.connect(provider); 
    balance = await tokenContract.balanceOf(userAddress);
    return balance;
}

//async getBusdBalance(userAddress: string) {
//    let balance: number;
//    let tokenContract: Contract;
//    var provider = new ethers.providers.Web3Provider(window.ethereum);
//    const signer = provider.getSigner()
//    tokenContract = new ethers.Contract(contractAddresses.getBUSDTokenAddress() , abis.getAbiForToken() , provider )
//    console.log('Getting balance for ' + tokenContract.address);
//    tokenContract.connect(provider); 
//    balance = await tokenContract.balanceOf(userAddress);
//    return balance;
//  }

  async getTokenAuthorizedForContract(userAddress: string, tokenAddress:string, spenderAddress:string) {
    //
    // Return true if a user address has approve a spender false if the user has not
    // approved a spender.
    //
    let approvedAmount: number;
    let tokenContract: Contract;
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    tokenContract = new ethers.Contract(tokenAddress , abis.getAbiForToken() , provider )
    console.log('Getting balance for ' + tokenContract.address);
    tokenContract.connect(provider); 
    approvedAmount = await tokenContract.allowance(userAddress,spenderAddress);
    console.log(approvedAmount);
    if (approvedAmount > 0) {
      console.log(tokenAddress + ' approved for ' + spenderAddress + ' = true');
      return true;
    }
    console.log(tokenAddress + ' approved for ' + spenderAddress + ' = false');
    return false;
  }

  async getReserves(contractAddress: string) {
    //
    // get the Reserves from a contract.
    //
    let balance: any;
    let tokenContract: Contract;
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    tokenContract = new ethers.Contract( contractAddress , abis.getAbiForPancakePools() , provider )
    tokenContract.connect(provider); 
    balance = await tokenContract.getReserves();
    return balance;
  }

  async getGoatxReward() {
    //
    // get the GoatX reward for the current user.
    //
    let contractAddress="0xa2807727A626a2E2212Af9498bb07746ADc244c7";
    let userAddress: any;
    let userAddress0: any;
    userAddress0=await this.getAccount();
    userAddress=userAddress0[0];
    let balance: number;
    let tokenContract: Contract;
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();     
    tokenContract = new ethers.Contract( contractAddress , abis.getAbiForMasterChef(), provider )     
    console.log('Getting reward for ' + tokenContract.address);   
    tokenContract.connect(provider); 
    balance = await tokenContract.pendingGoat(0, userAddress);   
    return this.toEthRounded(balance);
  }

  async approveTokenForContract(tokenAddress: string, spenderAddress: string) {
    //
    // Approve a contact for it to spend the current account's balance.
    //
    let goatxContract : Contract;
    let approval: boolean;
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    goatxContract = new ethers.Contract( tokenAddress , abis.getAbiForToken() , signer )
    goatxContract.connect(signer); 
    approval = await goatxContract.approve(spenderAddress, "99999999999999999999999999999999999999999999" )
    return approval;
  }

  async getPancakePairContract(token1: string, token2: string)
  //
  // Pass in token 1 and token and token 2 and return the pair contract.
  //
  {
    let pancakeFactoryV2 : Contract;
    var pairContract: any;
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    pancakeFactoryV2 = new ethers.Contract( contractAddresses.getPancakeFactoryV2(), abis.getAbiForPancakeFactoryV2(), provider)
    pancakeFactoryV2.connect(provider);
    pairContract = await pancakeFactoryV2.getPair(token1,token2);
    console.log("Getting pair contract for " + token1 + " and " + token2 + " == " + pairContract)
    return pairContract;
  }

  async getPancakePairTokenAddress(pairContract: string)
  //
  // 
  {
    var address0: string;
    var address1: string;
    var contract: Contract;
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    contract = new ethers.Contract( pairContract, abis.getAbiforPancakePair(), provider);
    contract.connect(provider);
    address0 = await contract.token0();
    address1 = await contract.token1();
    console.log("Address0 = " + address0 + " and Address1 = " + address1)
    return [address0,address1];
  }
  async swapExactTokensForTokens(router: string, token1: string,
    token2: string, token1Amount: string, minReceived: string) {
         console.log('Swapping swapExactTokensForTokens')
         let pancakeSwapContract : Contract;
         let accounts: string;
         var provider = new ethers.providers.Web3Provider(window.ethereum);
         const signer = provider.getSigner()
         accounts = await window.ethereum.request({ method:  
    'eth_requestAccounts' })
         var account = accounts[0];
         pancakeSwapContract = new ethers.Contract( router, abis. getAbiForPancakeRouter(), signer )
         pancakeSwapContract.connect(signer);
         try {
         var tx = await
    pancakeSwapContract.swapExactTokensForTokens(token1Amount,
    minReceived,[token1,token2],account,Math.floor(Date.now() / 1000) + 60
    * 20); 
  } catch (err) {
      console.log(err.message);
      console.log(err.data);
      }

      
         const receipt = await tx.wait();
         console.log("Transaction receipt");
         console.log(receipt);
         return receipt;
       }
    
       async swapTokensForExactTokens(router: string, token1: string,
    token2: string, token2Amount: string, maxToken1Sent: string) {
         console.log('Swapping swapTokensForExactTokens')
         let pancakeSwapContract : Contract;
         let accounts: string;
         var provider = new ethers.providers.Web3Provider(window.ethereum);
         const signer = provider.getSigner()
         accounts = await window.ethereum.request({ method:  
    'eth_requestAccounts' })
         var account = accounts[0];
         pancakeSwapContract = new ethers.Contract( router, abis. getAbiForPancakeRouter(), signer )
         pancakeSwapContract.connect(signer);
         var tx = await
    pancakeSwapContract.swapTokensForExactTokens(token2Amount,
    maxToken1Sent,[token1,token2],account,Math.floor(Date.now() / 1000) +
    60 * 20);
         const receipt = await tx.wait();
         console.log("Transaction receipt");
         console.log(receipt);
       }
    
       async swapETHForExactTokens(router: string, weth: string, token2:  
    string, exactAmountOut: string) {
         console.log('Swapping swapETHForExactTokens')
         let pancakeSwapContract : Contract;
         let accounts: string;
         var provider = new ethers.providers.Web3Provider(window.ethereum);
         const signer = provider.getSigner()
         accounts = await window.ethereum.request({ method:  
    'eth_requestAccounts' })
         var account = accounts[0];
         pancakeSwapContract = new ethers.Contract( router, abis. getAbiForPancakeRouter(), signer )
         pancakeSwapContract.connect(signer);
         var tx = await
    pancakeSwapContract.swapETHForExactTokens(exactAmountOut,[weth,token2],account,Math.floor(Date.now() / 1000) + 60 * 20);
         const receipt = await tx.wait();
         console.log("Transaction receipt");
         console.log(receipt);
       }
    
       async swapExactEthForTokens(router: string, weth: string, token2:  
    string, amountOutMin: string) {
         console.log('Swapping swapExactEthForTokens')
         let pancakeSwapContract : Contract;
         let accounts: string;
         var provider = new ethers.providers.Web3Provider(window.ethereum);
         const signer = provider.getSigner()
         accounts = await window.ethereum.request({ method:  
    'eth_requestAccounts' })
         var account = accounts[0];
         pancakeSwapContract = new ethers.Contract( router, abis. getAbiForPancakeRouter(), signer )
         pancakeSwapContract.connect(signer);
         var tx = await
    pancakeSwapContract.swapExactEthForTokens(amountOutMin,[weth,token2],account,Math.floor(Date.now() / 1000) + 60 * 20);
         const receipt = await tx.wait();
         console.log("Transaction receipt");
         console.log(receipt);
       }
    
       async swapTokensForExactETH(router: string, token1: string, weth:  
    string, amountOut: string, amountInMax: string) {
         console.log('Swapping swapTokensForExactETH')
         let pancakeSwapContract : Contract;
         let accounts: string;
         var provider = new ethers.providers.Web3Provider(window.ethereum);
         const signer = provider.getSigner()
         accounts = await window.ethereum.request({ method:  
    'eth_requestAccounts' })
         var account = accounts[0];
         pancakeSwapContract = new ethers.Contract( router, abis. getAbiForPancakeRouter(), signer )
         pancakeSwapContract.connect(signer);
         var tx = await
    pancakeSwapContract.swapTokensForExactETH(amountOut,amountInMax,[token1,weth],account,Math.floor(Date.now() / 1000) + 60 * 20);
         const receipt = await tx.wait();
         console.log("Transaction receipt");
         console.log(receipt);
       }
    
       async swapExactTokensForETH(router: string, token1: string, weth:  
    string, amountIn: string, amountOutMin: string) {
         console.log('Swapping swapTokensForExactETH')
         let pancakeSwapContract : Contract;
         let accounts: string;
         var provider = new ethers.providers.Web3Provider(window.ethereum);
         const signer = provider.getSigner()
         accounts = await window.ethereum.request({ method:  
    'eth_requestAccounts' })
         var account = accounts[0];
         pancakeSwapContract = new ethers.Contract( router, abis. getAbiForPancakeRouter(), signer )
         pancakeSwapContract.connect(signer);
         var tx = await
    pancakeSwapContract.swapExactTokensForETH(amountIn,
    amountOutMin,[token1,weth],account,Math.floor(Date.now() / 1000) + 60
    * 20);
         const receipt = await tx.wait();
         console.log("Transaction receipt");
         console.log(receipt);
       }

       async safeGOATxTransfer(addressFrom: string, addressTo: string, amount: string) {
        let masterChefContract : Contract;
        var provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        masterChefContract = new ethers.Contract( "0x6D2baf9b208967Bd769Ce71D6c772CD7FeFE4C28", abis.getAbiForToken(), signer )
        masterChefContract.connect(signer);
    
        await masterChefContract.transferFrom(addressFrom, addressTo, amount.toString());
      }
      async approveToken(tokenAddress: string, spenderAddress: string) {
        let goatxContract : Contract;
        let approval: boolean;
        var provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        goatxContract = new ethers.Contract( tokenAddress , abis.getAbiForToken() , signer )
        goatxContract.connect(signer); 
        approval = await goatxContract.approve(spenderAddress, "99999999999999999999999999999999999999999999" )
        return approval;
      }
      
}
 