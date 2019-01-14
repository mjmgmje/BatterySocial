import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConciertosPage } from './conciertos.page';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: ConciertosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  declarations: [ConciertosPage]
})
export class ConciertosPageModule {}
