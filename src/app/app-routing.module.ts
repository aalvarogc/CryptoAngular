import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RoutesGuardGuard } from './routes-guard.guard';
import { CryptoDetailsComponent } from './crypto-details/crypto-details.component';


const routes: Routes = [
  { path: '', component:  LandingPageComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'register', component:  RegisterComponent},
  { path: 'portfolio', component:  PortfolioComponent, canActivate: [RoutesGuardGuard]},
  { path: 'details/:id', component: CryptoDetailsComponent },
  { path: '**', component:  LandingPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
