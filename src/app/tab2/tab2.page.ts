import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}

  goBar() {
    this.router.navigate(['dashboard/tabs/bar-info']);
  }

  goConcierto() {
    this.router.navigate(['dashboard/tabs/conciertos']);
  }

  goLectura() {
    this.router.navigate(['dashboard/tabs/club-lectura']);
  }

  goClases() {
    this.router.navigate(['dashboard/tabs/actividades']);
  }



}
