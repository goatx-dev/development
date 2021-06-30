
async function connectToBlockchain() {
	accountconnect = await ethereum.request({ method: 'eth_requestAccounts'});
	provider = new ethers.providers.Web3Provider(window.ethereum);
	signer = provider.getSigner();
	tokenaddress = "0x80Ce15D1bAcf1d672F7d4c301FF24f8dA6fBf5E1"; 
	contract = new ethers.Contract(tokenaddress, minABI, provider);
}


async function mintArtfin()
{
	var accountconnect = await ethereum.request({ method: 'eth_requestAccounts'});
	var provider = new ethers.providers.Web3Provider(window.ethereum);
	var signer = provider.getSigner();
	
   var minABI = [
        {
                "inputs": [
                        {
                                "internalType": "address",
                                "name": "to",
                                "type": "address"
                        },
                        {
                                "internalType": "string",
                                "name": "URI",
                                "type": "string"
                        }
                ],
                "name": "mint",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
        },
  {
    "constant":true,
    "inputs":[{"name":"_owner","type":"address"}],
    "name":"balanceOf",
    "outputs":[{"name":"balance","type":"uint256"}],
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[],
    "name":"decimals",
    "outputs":[{"name":"","type":"uint8"}],
    "type":"function"
  }
];

        provider = new ethers.providers.Web3Provider(window.ethereum);
		signer = provider.getSigner();
		tokenaddress = "0x80Ce15D1bAcf1d672F7d4c301FF24f8dA6fBf5E1";
		contract = new ethers.Contract(tokenaddress, minABI, signer);
        mintAddress = "0x9803Ce33953964D397d0fb7C17556Ab96235F3c1";
        mintUrl = "testtesttesttest";
        mintToken = await contract.mint(mintAddress, mintUrl).then(function(myResolve, myReject) {
        console.log(myResolve);
        });

}

