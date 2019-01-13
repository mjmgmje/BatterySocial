import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', canActivate: [AuthGuardService], loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'conciertos', loadChildren: './conciertos/conciertos.module#ConciertosPageModule' },
  // { path: 'actividades', loadChildren: './actividades/actividades.module#ActividadesPageModule' },
  // { path: 'club-lectura', loadChildren: './club-lectura/club-lectura.module#ClubLecturaPageModule' },
  // { path: 'bar-info', loadChildren: './bar-info/bar-info.module#BarInfoPageModule' },
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
