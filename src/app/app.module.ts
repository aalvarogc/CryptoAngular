import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CryptoCardComponent } from './crypto-card/crypto-card.component';
import { CryptoDetailsComponent } from './crypto-details/crypto-details.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderPortfolioComponent } from './header-portfolio/header-portfolio.component';
import { BodyPortfolioComponent } from './body-portfolio/body-portfolio.component';
import { TableCoinComponent } from './table-coin/table-coin.component';

import * as CanvasJSAngularChart from "../assets/canvasjs.angular.component";
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CryptoCardComponent,
    CryptoDetailsComponent,
    FooterComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    PortfolioComponent,
    HeaderPortfolioComponent,
    BodyPortfolioComponent,
    TableCoinComponent,
    CanvasJSChart
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
