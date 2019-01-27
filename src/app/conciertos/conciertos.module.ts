import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// import { FlatpickrModule } from 'angularx-flatpickr';
// import { CalendarModule, DateAdapter } from 'angular-calendar';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


import { IonicModule } from '@ionic/angular';

import { ConciertosPage } from './conciertos.page';


// nuevos modulos para calendario
import { NgCalendarModule  } from 'ionic2-calendar';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




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
    NgCalendarModule,
  ],
  declarations: [ConciertosPage],
  providers: [
  ]
})
export class ConciertosPageModule {}
