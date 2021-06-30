export function getTokenBySymbol(symbol: string) {
    let returnVal: any = "";
    let tokenContractList: any = {
        "BNB": {
            "name": "BNB",
            "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"
        },
        "BUSD": {
            "name": "BUSD",
            "symbol": "BUSD",
            "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
            "chainId": 56,
            "decimals": 18,
            "logoURI": ""
        },
    "GOATX": {
         "name": "GOATx Exchange Token",
         "symbol": "GOATX",
         "address": "0x6D2baf9b208967Bd769Ce71D6c772CD7FeFE4C28",
         "chainId": 56,
         "decimals": 18,
         "logoURI": ""
    },
    "GRAIN": {
        "name": "GRAIN LP Token",
        "symbol": "GRAIN",
        "address": "0x9C9ecdb228303d3106A5a5A8eC5a0aC87903D46A",
        "chainId": 56,
        "decimals": 18,
        "logoURI": ""
    },
	"ADA": {
		"name": "Cardano Token",
		"symbol": "ADA",
		"address": "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47/logo.png"
	},
	"ALICE": {
		"name": "ALICE",
		"symbol": "ALICE",
		"address": "0xAC51066d7bEC65Dc4589368da368b212745d63E8",
		"chainId": 56,
		"decimals": 6,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xAC51066d7bEC65Dc4589368da368b212745d63E8/logo.png"
	},
	"ALPACA": {
		"name": "AlpacaToken",
		"symbol": "ALPACA",
		"address": "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F/logo.png"
	},
	"ALPHA": {
		"name": "AlphaToken",
		"symbol": "ALPHA",
		"address": "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xa1faa113cbE53436Df28FF0aEe54275c13B40975/logo.png"
	},
	"ATA": {
		"name": "Automata",
		"symbol": "ATA",
		"address": "0xA2120b9e674d3fC3875f415A7DF52e382F141225",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xA2120b9e674d3fC3875f415A7DF52e382F141225/logo.png"
	},
	"BABYDOGE": {
		"name": "Baby Doge Coin",
		"symbol": "BABYDOGE",
		"address": "0xc748673057861a797275CD8A068AbB95A902e8de",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xc748673057861a797275CD8A068AbB95A902e8de/logo.png"
	},
	"BAND": {
		"name": "Band Protocol Token",
		"symbol": "BAND",
		"address": "0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18/logo.png"
	},
	"BARMY": {
		"name": "BscArmy",
		"symbol": "BARMY",
		"address": "0x2C80bC9bFa4EC680EfB949C51806bDDEE5Ac8299",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x2C80bC9bFa4EC680EfB949C51806bDDEE5Ac8299/logo.png"
	},
	"BBT": {
		"name": "BitBook",
		"symbol": "BBT",
		"address": "0xD48474E7444727bF500a32D5AbE01943f3A59A64",
		"chainId": 56,
		"decimals": 8,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xD48474E7444727bF500a32D5AbE01943f3A59A64/logo.png"
	},
	"BELT": {
		"name": "BELT Token",
		"symbol": "BELT",
		"address": "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f/logo.png"
	},
	"BIFI": {
		"name": "beefy.finance",
		"symbol": "BIFI",
		"address": "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xCa3F508B8e4Dd382eE878A314789373D80A5190A/logo.png"
	},
	"BOG": {
		"name": "Bogged Finance",
		"symbol": "BOG",
		"address": "0xB09FE1613fE03E7361319d2a43eDc17422f36B09",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xB09FE1613fE03E7361319d2a43eDc17422f36B09/logo.png"
	},
	"BOGOLD": {
		"name": "Bogged Finance - OLD",
		"symbol": "BOGOLD",
		"address": "0xD7B729ef857Aa773f47D37088A1181bB3fbF0099",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xD7B729ef857Aa773f47D37088A1181bB3fbF0099/logo.png"
	},
	"BP": {
		"name": "BunnyPark",
		"symbol": "BP",
		"address": "0xACB8f52DC63BB752a51186D1c55868ADbFfEe9C1",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xACB8f52DC63BB752a51186D1c55868ADbFfEe9C1/logo.png"
	},
	"BSCPAD": {
		"name": "BSCPAD.com",
		"symbol": "BSCPAD",
		"address": "0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700/logo.png"
	},
	"BSCS": {
		"name": "BSCS Token",
		"symbol": "BSCS",
		"address": "0xbcb24AFb019BE7E93EA9C43B7E22Bb55D5B7f45D",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xbcb24AFb019BE7E93EA9C43B7E22Bb55D5B7f45D/logo.png"
	},
	"BSL": {
		"name": "B-LAUNCH",
		"symbol": "BSL",
		"address": "0xB60501346240FCdE1615de56eA9FFf1AC1da5673",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xB60501346240FCdE1615de56eA9FFf1AC1da5673/logo.png"
	},
	"BTCST": {
		"name": "StandardBTCHashrateToken",
		"symbol": "BTCST",
		"address": "0x78650B139471520656b9E7aA7A5e9276814a38e9",
		"chainId": 56,
		"decimals": 17,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x78650B139471520656b9E7aA7A5e9276814a38e9/logo.png"
	},
	"BTT": {
		"name": "BitTorrent",
		"symbol": "BTT",
		"address": "0x8595F9dA7b868b1822194fAEd312235E43007b49",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8595F9dA7b868b1822194fAEd312235E43007b49/logo.png"
	},
	"BUNNY": {
		"name": "Bunny Token",
		"symbol": "BUNNY",
		"address": "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51/logo.png"
	},
	"CERBERUS": {
		"name": "Cerberus Token",
		"symbol": "CERBERUS",
		"address": "0x8B3268a23131DAFBd77165690767F285C1AAC6C5",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8B3268a23131DAFBd77165690767F285C1AAC6C5/logo.png"
	},
	"CHR": {
		"name": "Chroma",
		"symbol": "CHR",
		"address": "0xf9CeC8d50f6c8ad3Fb6dcCEC577e05aA32B224FE",
		"chainId": 56,
		"decimals": 6,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xf9CeC8d50f6c8ad3Fb6dcCEC577e05aA32B224FE/logo.png"
	},
	"CLU": {
		"name": "CluCoin",
		"symbol": "CLU",
		"address": "0x1162E2EfCE13f99Ed259fFc24d99108aAA0ce935",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x1162E2EfCE13f99Ed259fFc24d99108aAA0ce935/logo.png"
	},
	"CUMMIES": {
		"name": "CumRocket",
		"symbol": "CUMMIES",
		"address": "0x27Ae27110350B98d564b9A3eeD31bAeBc82d878d",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x27Ae27110350B98d564b9A3eeD31bAeBc82d878d/logo.png"
	},
	"DAI": {
		"name": "Dai Token",
		"symbol": "DAI",
		"address": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3/logo.png"
	},
	"DND": {
		"name": "DIAMOND",
		"symbol": "DND",
		"address": "0x34EA3F7162E6f6Ed16bD171267eC180fD5c848da",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x34EA3F7162E6f6Ed16bD171267eC180fD5c848da/logo.png"
	},
	"DODO": {
		"name": "DODO bird",
		"symbol": "DODO",
		"address": "0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2/logo.png"
	},
	"DOGE": {
		"name": "Dogecoin",
		"symbol": "DOGE",
		"address": "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
		"chainId": 56,
		"decimals": 8,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xbA2aE424d960c26247Dd6c32edC70B295c744C43/logo.png"
	},
	"DOP": {
		"name": "Dopple Token",
		"symbol": "DOP",
		"address": "0x844FA82f1E54824655470970F7004Dd90546bB28",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x844FA82f1E54824655470970F7004Dd90546bB28/logo.png"
	},
	"DOT": {
		"name": "Polkadot Token",
		"symbol": "DOT",
		"address": "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402/logo.png"
	},
	"EPS": {
		"name": "Ellipsis",
		"symbol": "EPS",
		"address": "0xA7f552078dcC247C2684336020c03648500C6d9F",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xA7f552078dcC247C2684336020c03648500C6d9F/logo.png"
	},
	"FEG": {
		"name": "FEGtoken",
		"symbol": "FEG",
		"address": "0xacFC95585D80Ab62f67A14C566C1b7a49Fe91167",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xacFC95585D80Ab62f67A14C566C1b7a49Fe91167/logo.png"
	},
	"FOOTBALLSTARS": {
		"name": "FTS",
		"symbol": "FOOTBALLSTARS",
		"address": "0x6507458BB53aec6Be863161641ec28739C41cC97",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x6507458BB53aec6Be863161641ec28739C41cC97/logo.png"
	},
	"FOR": {
		"name": "The Force Token",
		"symbol": "FOR",
		"address": "0x658A109C5900BC6d2357c87549B651670E5b0539",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x658A109C5900BC6d2357c87549B651670E5b0539/logo.png"
	},
	"FRANK": {
		"name": "Frankenstein Finance",
		"symbol": "FRANK",
		"address": "0x129e6d84c6CAb9b0c2F37aD1D14a9fe2E59DAb09",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x129e6d84c6CAb9b0c2F37aD1D14a9fe2E59DAb09/logo.png"
	},
	"GHOSTFACE": {
		"name": "GHOSTFACE",
		"symbol": "GHOSTFACE",
		"address": "0x0952dDFfDE60786497C7CEd1f49B4A14cF527f76",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0952dDFfDE60786497C7CEd1f49B4A14cF527f76/logo.png"
	},
	"GMR": {
		"name": "GAMER",
		"symbol": "GMR",
		"address": "0x0523215DCafbF4E4aA92117d13C6985a3BeF27D7",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0523215DCafbF4E4aA92117d13C6985a3BeF27D7/logo.png"
	},
	"GUH": {
		"name": "Goes Up Higher",
		"symbol": "GUH",
		"address": "0x42069C0CF4DA25420fC4C9d9001ba5af7846CCfd",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x42069C0CF4DA25420fC4C9d9001ba5af7846CCfd/logo.png"
	},
	"HODL": {
		"name": "HODL",
		"symbol": "HODL",
		"address": "0x0E3EAF83Ea93Abe756690C62c72284943b96a6Bc",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E3EAF83Ea93Abe756690C62c72284943b96a6Bc/logo.png"
	},
	"HOTCROSS": {
		"name": "Hot Cross Token",
		"symbol": "HOTCROSS",
		"address": "0x4FA7163E153419E0E1064e418dd7A99314Ed27b6",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x4FA7163E153419E0E1064e418dd7A99314Ed27b6/logo.png"
	},
	"HUNNY": {
		"name": "Hunny Token",
		"symbol": "HUNNY",
		"address": "0x565b72163f17849832A692A3c5928cc502f46D69",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x565b72163f17849832A692A3c5928cc502f46D69/logo.png"
	},
	"INJ": {
		"name": "Injective Protocol",
		"symbol": "INJ",
		"address": "0xa2B726B1145A4773F68593CF171187d8EBe4d495",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xa2B726B1145A4773F68593CF171187d8EBe4d495/logo.png"
	},
	"IOTX": {
		"name": "IoTeX Network",
		"symbol": "IOTX",
		"address": "0x9678E42ceBEb63F23197D726B29b1CB20d0064E5",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x9678E42ceBEb63F23197D726B29b1CB20d0064E5/logo.png"
	},
	"IRON": {
		"name": "IRON Stablecoin",
		"symbol": "IRON",
		"address": "0x7b65B489fE53fCE1F6548Db886C08aD73111DDd8",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x7b65B489fE53fCE1F6548Db886C08aD73111DDd8/logo.png"
	},
	"JGN": {
		"name": "Juggernaut DeFi",
		"symbol": "JGN",
		"address": "0xC13B7a43223BB9Bf4B69BD68Ab20ca1B79d81C75",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xC13B7a43223BB9Bf4B69BD68Ab20ca1B79d81C75/logo.png"
	},
	"KALM": {
		"name": "Kalmar Token",
		"symbol": "KALM",
		"address": "0x4BA0057f784858a48fe351445C672FF2a3d43515",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x4BA0057f784858a48fe351445C672FF2a3d43515/logo.png"
	},
	"LINA": {
		"name": "Linear Token",
		"symbol": "LINA",
		"address": "0x762539b45A1dCcE3D36d080F74d1AED37844b878",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x762539b45A1dCcE3D36d080F74d1AED37844b878/logo.png"
	},
	"LINK": {
		"name": "ChainLink Token",
		"symbol": "LINK",
		"address": "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD/logo.png"
	},
	"LIZ": {
		"name": "lizardtoken.finance",
		"symbol": "LIZ",
		"address": "0xfCb520B47f5601031E0Eb316F553A3641FF4B13C",
		"chainId": 56,
		"decimals": 8,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xfCb520B47f5601031E0Eb316F553A3641FF4B13C/logo.png"
	},
	"LTC": {
		"name": "Litecoin Token",
		"symbol": "LTC",
		"address": "0x4338665CBB7B2485A8855A139b75D5e34AB0DB94",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x4338665CBB7B2485A8855A139b75D5e34AB0DB94/logo.png"
	},
	"MBOX": {
		"name": "Mobox",
		"symbol": "MBOX",
		"address": "0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377/logo.png"
	},
	"MEPAD": {
		"name": "MemePad",
		"symbol": "MEPAD",
		"address": "0x9d70a3EE3079A6FA2bB16591414678b7Ad91f0b5",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x9d70a3EE3079A6FA2bB16591414678b7Ad91f0b5/logo.png"
	},
	"MERL": {
		"name": "Merlin Token",
		"symbol": "MERL",
		"address": "0xDA360309C59CB8C434b28A91b823344a96444278",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xDA360309C59CB8C434b28A91b823344a96444278/logo.png"
	},
	"NAFT": {
		"name": "Nafter",
		"symbol": "NAFT",
		"address": "0xD7730681B1DC8f6F969166B29D8A5EA8568616a3",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xD7730681B1DC8f6F969166B29D8A5EA8568616a3/logo.png"
	},
	"NRV": {
		"name": "Nerve",
		"symbol": "NRV",
		"address": "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096/logo.png"
	},
	"O3": {
		"name": "O3 Swap Token",
		"symbol": "O3",
		"address": "0xEe9801669C6138E84bD50dEB500827b776777d28",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xEe9801669C6138E84bD50dEB500827b776777d28/logo.png"
	},
	"PARA": {
		"name": "Paralink Network",
		"symbol": "PARA",
		"address": "0x076DDcE096C93dcF5D51FE346062bF0Ba9523493",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x076DDcE096C93dcF5D51FE346062bF0Ba9523493/logo.png"
	},
	"PAWG": {
		"name": "PAWGcoin",
		"symbol": "PAWG",
		"address": "0x19B60612F9A93359bca835A788A334D4157E675B",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x19B60612F9A93359bca835A788A334D4157E675B/logo.png"
	},
	"PIGGY": {
		"name": "Piggy Bank Token",
		"symbol": "PIGGY",
		"address": "0xCd2eCd5e06b1a330789B30e8AdA3D11c51503a71",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xCd2eCd5e06b1a330789B30e8AdA3D11c51503a71/logo.png"
	},
	"PORNROCKET": {
		"name": "PORNROCKET",
		"symbol": "PORNROCKET",
		"address": "0xCF9f991b14620f5ad144Eec11f9bc7Bf08987622",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xCF9f991b14620f5ad144Eec11f9bc7Bf08987622/logo.png"
	},
	"RAMP": {
		"name": "RAMP DEFI",
		"symbol": "RAMP",
		"address": "0x8519EA49c997f50cefFa444d240fB655e89248Aa",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8519EA49c997f50cefFa444d240fB655e89248Aa/logo.png"
	},
	"REEF": {
		"name": "Reef.finance",
		"symbol": "REEF",
		"address": "0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e/logo.png"
	},
	"RFOX": {
		"name": "RFOX",
		"symbol": "RFOX",
		"address": "0x0a3A21356793B49154Fd3BbE91CBc2A16c0457f5",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0a3A21356793B49154Fd3BbE91CBc2A16c0457f5/logo.png"
	},
	"RISE": {
		"name": "EverRise",
		"symbol": "RISE",
		"address": "0xC7D43F2B51F44f09fBB8a691a0451E8FFCF36c0a",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xC7D43F2B51F44f09fBB8a691a0451E8FFCF36c0a/logo.png"
	},
	"SAFEHAMSTERS": {
		"name": "SafeHamsters",
		"symbol": "SAFEHAMSTERS",
		"address": "0xa016F295A5957cB80D03d8E5464A429007555124",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xa016F295A5957cB80D03d8E5464A429007555124/logo.png"
	},
	"SAFEMOON": {
		"name": "SafeMoon",
		"symbol": "SAFEMOON",
		"address": "0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3/logo.png"
	},
	"SFP": {
		"name": "SafePal Token",
		"symbol": "SFP",
		"address": "0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb/logo.png"
	},
	"SFUND": {
		"name": "SeedifyFund",
		"symbol": "SFUND",
		"address": "0x477bC8d23c634C154061869478bce96BE6045D12",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x477bC8d23c634C154061869478bce96BE6045D12/logo.png"
	},
	"SGO": {
		"name": "Sportemon-Go",
		"symbol": "SGO",
		"address": "0xe5D46cC0Fd592804B36F9dc6D2ed7D4D149EBd6F",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xe5D46cC0Fd592804B36F9dc6D2ed7D4D149EBd6F/logo.png"
	},
	"STEEL": {
		"name": "IRON Share V2",
		"symbol": "STEEL",
		"address": "0x9001eE054F1692feF3A48330cB543b6FEc6287eb",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x9001eE054F1692feF3A48330cB543b6FEc6287eb/logo.png"
	},
	"SUSHI": {
		"name": "SushiToken",
		"symbol": "SUSHI",
		"address": "0x947950BcC74888a40Ffa2593C5798F11Fc9124C4",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x947950BcC74888a40Ffa2593C5798F11Fc9124C4/logo.png"
	},
	"SWAMP": {
		"name": "Swampy",
		"symbol": "SWAMP",
		"address": "0xc5A49b4CBe004b6FD55B30Ba1dE6AC360FF9765d",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xc5A49b4CBe004b6FD55B30Ba1dE6AC360FF9765d/logo.png"
	},
	"SXP": {
		"name": "Swipe",
		"symbol": "SXP",
		"address": "0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A/logo.png"
	},
	"TENDIE": {
		"name": "TendieSwapFinance Tendie",
		"symbol": "TENDIE",
		"address": "0x9853A30C69474BeD37595F9B149ad634b5c323d9",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x9853A30C69474BeD37595F9B149ad634b5c323d9/logo.png"
	},
	"TIKI": {
		"name": "TIKI",
		"symbol": "TIKI",
		"address": "0x9b76D1B12Ff738c113200EB043350022EBf12Ff0",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x9b76D1B12Ff738c113200EB043350022EBf12Ff0/logo.png"
	},
	"TKO": {
		"name": "Tokocrypto Token",
		"symbol": "TKO",
		"address": "0x9f589e3eabe42ebC94A44727b3f3531C0c877809",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x9f589e3eabe42ebC94A44727b3f3531C0c877809/logo.png"
	},
	"TLM": {
		"name": "Alien Worlds Trilium",
		"symbol": "TLM",
		"address": "0x2222227E22102Fe3322098e4CBfE18cFebD57c95",
		"chainId": 56,
		"decimals": 4,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x2222227E22102Fe3322098e4CBfE18cFebD57c95/logo.png"
	},
	"TPAD": {
		"name": "TrustPad",
		"symbol": "TPAD",
		"address": "0xADCFC6bf853a0a8ad7f9Ff4244140D10cf01363C",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xADCFC6bf853a0a8ad7f9Ff4244140D10cf01363C/logo.png"
	},
	"TPT": {
		"name": "TokenPocket Token",
		"symbol": "TPT",
		"address": "0xECa41281c24451168a37211F0bc2b8645AF45092",
		"chainId": 56,
		"decimals": 4,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xECa41281c24451168a37211F0bc2b8645AF45092/logo.png"
	},
	"TRONPAD": {
		"name": "TRONPAD.network",
		"symbol": "TRONPAD",
		"address": "0x1Bf7AedeC439D6BFE38f8f9b20CF3dc99e3571C4",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x1Bf7AedeC439D6BFE38f8f9b20CF3dc99e3571C4/logo.png"
	},
	"TRX": {
		"name": "TRON",
		"symbol": "TRX",
		"address": "0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B/logo.png"
	},
	"TUSD": {
		"name": "TrueUSD",
		"symbol": "TUSD",
		"address": "0x14016E85a25aeb13065688cAFB43044C2ef86784",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x14016E85a25aeb13065688cAFB43044C2ef86784/logo.png"
	},
	"TWT": {
		"name": "Trust Wallet",
		"symbol": "TWT",
		"address": "0x4B0F1812e5Df2A09796481Ff14017e6005508003",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x4B0F1812e5Df2A09796481Ff14017e6005508003/logo.png"
	},
	"UNCL": {
		"name": "UNCL on xDai on BSC",
		"symbol": "UNCL",
		"address": "0x0E8D5504bF54D9E44260f8d153EcD5412130CaBb",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E8D5504bF54D9E44260f8d153EcD5412130CaBb/logo.png"
	},
	"UNCX": {
		"name": "UniCrypt on xDai on BSC",
		"symbol": "UNCX",
		"address": "0x09a6c44c3947B69E2B45F4D51b67E6a39ACfB506",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x09a6c44c3947B69E2B45F4D51b67E6a39ACfB506/logo.png"
	},
	"UNI": {
		"name": "Uniswap",
		"symbol": "UNI",
		"address": "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xBf5140A22578168FD562DCcF235E5D43A02ce9B1/logo.png"
	},
	"USDC": {
		"name": "USD Coin",
		"symbol": "USDC",
		"address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d/logo.png"
	},
	"UST": {
		"name": "Wrapped UST Token",
		"symbol": "UST",
		"address": "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x23396cF899Ca06c4472205fC903bDB4de249D6fC/logo.png"
	},
	"VAI": {
		"name": "VAI Stablecoin",
		"symbol": "VAI",
		"address": "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7/logo.png"
	},
	"VRT": {
		"name": "Venus Reward Token",
		"symbol": "VRT",
		"address": "0x5F84ce30DC3cF7909101C69086c50De191895883",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x5F84ce30DC3cF7909101C69086c50De191895883/logo.png"
	},
	"WDEFI": {
		"name": "Woonkly Defi",
		"symbol": "WDEFI",
		"address": "0x291083C8aEdfC3CD0384494e1fcDcf2067d28D3e",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x291083C8aEdfC3CD0384494e1fcDcf2067d28D3e/logo.png"
	},
	"WEX": {
		"name": "WaultSwap",
		"symbol": "WEX",
		"address": "0xa9c41A46a6B3531d28d5c32F6633dd2fF05dFB90",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xa9c41A46a6B3531d28d5c32F6633dd2fF05dFB90/logo.png"
	},
	"WIN": {
		"name": "WINk",
		"symbol": "WIN",
		"address": "0xaeF0d72a118ce24feE3cD1d43d383897D05B4e99",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xaeF0d72a118ce24feE3cD1d43d383897D05B4e99/logo.png"
	},
	"WOOP": {
		"name": "Woonkly Power",
		"symbol": "WOOP",
		"address": "0x8b303d5BbfBbf46F1a4d9741E491e06986894e18",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x8b303d5BbfBbf46F1a4d9741E491e06986894e18/logo.png"
	},
	"WSB": {
		"name": "WSB Token",
		"symbol": "WSB",
		"address": "0x22168882276e5D5e1da694343b41DD7726eeb288",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x22168882276e5D5e1da694343b41DD7726eeb288/logo.png"
	},
	"XPOSE": {
		"name": "Xpose",
		"symbol": "XPOSE",
		"address": "0xcc10c8AfD683c5AA86B1d170d75B555bce5a2C37",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xcc10c8AfD683c5AA86B1d170d75B555bce5a2C37/logo.png"
	},
	"XRP": {
		"name": "XRP Token",
		"symbol": "XRP",
		"address": "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE/logo.png"
	},
	"XVS": {
		"name": "Venus",
		"symbol": "XVS",
		"address": "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
		"chainId": 56,
		"decimals": 18,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63/logo.png"
	},
	"YUMMY": {
		"name": "YUMMY",
		"symbol": "YUMMY",
		"address": "0x05F2dF7B3D612A23fe12162A6c996447dCE728a5",
		"chainId": 56,
		"decimals": 9,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x05F2dF7B3D612A23fe12162A6c996447dCE728a5/logo.png"
	},
	"ZIL": {
		"name": "Zilliqa",
		"symbol": "ZIL",
		"address": "0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787",
		"chainId": 56,
		"decimals": 12,
		"logoURI": "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787/logo.png"
	}
}

if (tokenContractList[symbol]!==undefined) {
       returnVal=tokenContractList[symbol];
} else {
       returnVal={
           "name":"",
           "symbol": symbol,
           "address": "",
           "chainId": 56,
           "decimals": 18,
           "logoURI": ""
       }
}
return returnVal;
}

export function getGoatxTokenAddress() {
    return "0x6d2baf9b208967bd769ce71d6c772cd7fefe4c28"
}

export function getGrainStoreAddress() {
    return "0x9C9ecdb228303d3106A5a5A8eC5a0aC87903D46A"
}

export function getMasterChefAddress() {
    return "0xa2807727A626a2E2212Af9498bb07746ADc244c7"
}

export function getGoatxBusdAddress() {
    return "0x2A3F5CC4Fc419C449571168315FbD04CB72061C4"
}

export function getPancakeSwapRouter2() {
    return "0x10ED43C718714eb63d5aA57B78B54704E256024E"
}

export function getBUSDTokenAddress() {
    return "0xe9e7cea3dedca5984780bafc599bd69add087d56"
}

export function getPancakeFactoryV2() {
    return "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73"
}


