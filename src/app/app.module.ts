import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RoadmapPageComponent } from './pages/roadmap-page/roadmap-page.component';
import { LiquidityPageComponent } from './pages/liquidity-page/liquidity-page.component';
import { NftPageComponent } from './pages/nft-page/nft-page.component';
import { TradePageComponent } from './pages/trade-page/trade-page.component';
import { FooterDisplayComponent } from './display/footer-display/footer-display.component';
import { HeaderDisplayComponent } from './display/header-display/header-display.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrokerPageComponent } from './pages/broker-page/broker-page.component';
import { NgxTablePaginationModule } from 'ngx-table-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { providers } from 'ethers';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { TransferPageComponent } from './pages/transfer-page/transfer-page.component';
import { BrokerNavComponent } from './display/broker-nav/broker-nav.component';
import { NewOrderComponent } from './pages/new-order/new-order.component';
import { EditOrderComponent } from './pages/edit-order/edit-order.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';
import { EditCustomerComponent } from './pages/edit-customer/edit-customer.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { BrokerClientComponent } from './display/broker-client/broker-client.component';
import { FullOrderComponent } from './pages/full-order/full-order.component';
import { TokenListComponent } from './pages/token-list/token-list.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { GoatxTokenComponent } from './pages/goatx-token/goatx-token.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NeedHelpComponent } from './pages/need-help/need-help.component';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { OurServiceComponent } from './pages/our-service/our-service.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { NewTradeComponent } from './pages/new-trade/new-trade.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TokenPairsComponent } from './pages/token-pairs/token-pairs.component';
import { TokenAssetsComponent } from './pages/token-assets/token-assets.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ChartTestComponent } from './chart-test/chart-test.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { WatchlistPageComponent } from './pages/watchlist-page/watchlist-page.component';
import { StakingPageComponent } from './pages/staking-page/staking-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { TransactionsPageComponent } from './pages/transactions-page/transactions-page.component';
import { ResearchPageComponent } from './pages/research-page/research-page.component';
import { DocsPageComponent } from './pages/docs-page/docs-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RoadmapPageComponent,
    LiquidityPageComponent,
    NftPageComponent,
    TradePageComponent,
    FooterDisplayComponent,
    HeaderDisplayComponent,
    FaqPageComponent,
    LoginPageComponent,
    CustomerPageComponent,
    TransferPageComponent,
    BrokerPageComponent,
    BrokerNavComponent,
    NewOrderComponent,
    EditOrderComponent,
    CustomerListComponent,
    NewCustomerComponent,
    EditCustomerComponent,
    OrderListComponent,
    BrokerClientComponent,
    FullOrderComponent,
    TokenListComponent,
    WalletComponent,
    GoatxTokenComponent,
    OurTeamComponent,
    AboutUsComponent,
    NeedHelpComponent,
    GetStartedComponent,
    PrivacyPolicyComponent,
    OurServiceComponent,
    ContactUsComponent,
    NewTradeComponent,
    TokenPairsComponent,
    TokenAssetsComponent,
    ChartTestComponent,
    PortfolioPageComponent,
    WatchlistPageComponent,
    StakingPageComponent,
    OrdersPageComponent,
    TransactionsPageComponent,
    ResearchPageComponent,
    DocsPageComponent,
    InfoPageComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxTablePaginationModule,
    Ng2SearchPipeModule,
    NgbModule,
    Ng2GoogleChartsModule
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
