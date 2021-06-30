import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { GoogleChartComponent } from 'ng2-google-charts';
import { ChartTestComponent } from './chart-test/chart-test.component';
import { DataResolver, ActiveOrderResolver, CustomerListResolver, BackgroundDataResolver, TokenPairResolver } from './data.resolver';
import { BrokerPageComponent } from './pages/broker-page/broker-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { DocsPageComponent } from './pages/docs-page/docs-page.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { FullOrderComponent } from './pages/full-order/full-order.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { GoatxTokenComponent } from './pages/goatx-token/goatx-token.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { LiquidityPageComponent } from './pages/liquidity-page/liquidity-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NeedHelpComponent } from './pages/need-help/need-help.component';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';
import { NewOrderComponent } from './pages/new-order/new-order.component';
import { NewTradeComponent } from './pages/new-trade/new-trade.component';
import { NftPageComponent } from './pages/nft-page/nft-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { OurServiceComponent } from './pages/our-service/our-service.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ResearchPageComponent } from './pages/research-page/research-page.component';
import { RoadmapPageComponent } from './pages/roadmap-page/roadmap-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { StakingPageComponent } from './pages/staking-page/staking-page.component';
import { TokenAssetsComponent } from './pages/token-assets/token-assets.component';
import { TokenListComponent } from './pages/token-list/token-list.component';
import { TokenPairsComponent } from './pages/token-pairs/token-pairs.component';
import { TradePageComponent } from './pages/trade-page/trade-page.component';
import { TransactionsPageComponent } from './pages/transactions-page/transactions-page.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { WatchlistPageComponent } from './pages/watchlist-page/watchlist-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },{
    path: 'trade',
    component: TradePageComponent
  },{
    path: 'newtrade',
    component: NewTradeComponent
  },
  {
    path: 'nfts',
    component: NftPageComponent
  },
  {
    path: 'liquidity',
    component: LiquidityPageComponent,
    resolve: { data: BackgroundDataResolver  }    
  },
  {
    path: 'token-list',
    component: TokenListComponent,
    resolve: { data: DataResolver  }
  },  
  {
    path: 'roadmap',
    component: RoadmapPageComponent
  },
  {
    path: 'faqs',
    component: FaqPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'broker-home',
    component: BrokerPageComponent,
    resolve: { data: ActiveOrderResolver  }
  },
  {
    path: 'assets',
    component: TokenAssetsComponent
  },
  {
    path: 'pairs',
    component: TokenPairsComponent,
    resolve: { data: TokenPairResolver  }
  },
  {
    path: 'create-order',
    component: NewOrderComponent
  },
  {
    path: 'new-cusomer',
    component: NewCustomerComponent
  },
  {
    path: 'order-list',
    component: BrokerPageComponent
  },
  {
    path: 'new-order',
    component: NewOrderComponent,
    resolve: { data: CustomerListResolver  }
  },
  {
    path: 'customer-list',
    component: CustomerListComponent,
    resolve: { data: CustomerListResolver  }
  },
  {
    path: 'full-order',
    component: FullOrderComponent
  },
  {
    path: 'wallet',
    component: WalletComponent
  },
  {
    path: 'privacy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'getstarted',
    component: GetStartedComponent
  },
  {
    path: 'team',
    component: OurTeamComponent
  },
  {
    path: 'help',
    component: NeedHelpComponent
  },
  {
    path: 'team',
    component: OurTeamComponent
  },
  {
    path: 'token',
    component: GoatxTokenComponent
  },
  {
    path: 'service',
    component: OurServiceComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'chart',
    component: ChartTestComponent
  },
  {
    path: 'portfolio',
    component: PortfolioPageComponent
  },
  {
    path: 'watchlist',
    component: WatchlistPageComponent
  },
  {
    path: 'staking',
    component: StakingPageComponent
  },
  {
    path: 'orders',
    component: OrdersPageComponent
  },
  {
    path: 'transactions',
    component: TransactionsPageComponent
  },
  {
    path: 'research',
    component: ResearchPageComponent
  },
  {
    path: 'docs',
    component: DocsPageComponent
  },
  {
    path: 'info',
    component: InfoPageComponent
  },
  {
    path: 'settings',
    component: SettingsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload'} )],
  exports: [RouterModule],
  providers: [CustomerListResolver, DataResolver, ActiveOrderResolver, TokenPairResolver]
})
export class AppRoutingModule { }
