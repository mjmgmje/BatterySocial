import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', canActivate: [AuthGuardService], loadChildren: './tabs/tabs.module#TabsPageModule' },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './public/login/login.module#LoginPageModule'
  },
  {
    path: 'register',
    loadChildren: './public/register/register.module#RegisterPageModule'
  },  { path: 'concierto-detail', loadChildren: './conciertos/concierto-detail/concierto-detail.module#ConciertoDetailPageModule' },
  { path: 'libro-detail', loadChildren: './club-lectura/libro-detail/libro-detail.module#LibroDetailPageModule' },
  { path: 'actividad-detail', loadChildren: './actividades/actividad-detail/actividad-detail.module#ActividadDetailPageModule' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
