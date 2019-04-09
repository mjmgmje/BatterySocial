import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  query,
  stagger
} from '@angular/animations';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FirebaseService } from '../services/firebase.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-90px)' }),
            stagger(
              '100ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('1000ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class ActividadesPage  {
  classes;
  isAdmin: string;
  unsub: Subscription;

  constructor(
    private router: Router,
    private firebaseService: FirebaseService
  ) {}

  viewDetail(id: number) {
    this.router.navigate(['dashboard/tabs/actividadDetail/' + id]);
  }

  ionViewWillEnter(): void {
    if (!this.classes) {
    this.unsub = this.firebaseService.getClasses().subscribe(data => (this.classes = data));
    this.isAdmin = sessionStorage.getItem('isAdmin');
    }
  }

  ionViewDidLeave(): void {
    this.unsub.unsubscribe();
  }
  GoToAddActivity() {
    this.router.navigate(['dashboard/tabs/AddActivity/']);
  }
}
