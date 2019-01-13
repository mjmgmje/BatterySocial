import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClubLecturaPage } from './club-lectura.page';

const routes: Routes = [
  {
    path: '',
    component: ClubLecturaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClubLecturaPage]
})
export class ClubLecturaPageModule {}
