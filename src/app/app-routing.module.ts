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
  },

  // { path: 'add-concert', loadChildren: './conciertos/add-concert/add-concert.module#AddConcertPageModule' },
  // { path: 'add-activity', loadChildren: './actividades/add-activity/add-activity.module#AddActivityPageModule' },
  // { path: 'add-book', loadChildren: './club-lectura/add-book/add-book.module#AddBookPageModule' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
