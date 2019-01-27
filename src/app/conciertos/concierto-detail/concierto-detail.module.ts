import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConciertoDetailPage } from './concierto-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ConciertoDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConciertoDetailPage]
})
export class ConciertoDetailPageModule {}
