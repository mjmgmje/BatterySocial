import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './public/login/login.module#LoginPageModule'
  },
  {
    path: 'register',
    loadChildren: './public/register/register.module#RegisterPageModule'
  },
  // {
  //   path: 'members',
  //   canActivate: [AuthGuardService],
  //   loadChildren: './members/member-routing.module#MemberRoutingModule'
  // },
  { path: 'dashboard', canActivate: [AuthGuardService], loadChildren: './tabs/tabs.module#TabsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
