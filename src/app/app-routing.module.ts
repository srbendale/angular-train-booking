import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
{ path: '', component: HomeComponent,canActivate:[AuthGaurdService] },
{ path: 'login', component: LoginComponent },

{ path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },

// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
