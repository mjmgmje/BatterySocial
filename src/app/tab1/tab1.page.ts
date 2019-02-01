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

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
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
export class Tab1Page {
  notices;
  isAdmin: string;
  constructor(
    private router: Router,
    private firebaseService: FirebaseService
  ) {}

  viewDetail(id: number) {
    this.router.navigate(['dashboard/tabs/productDetail/' + id]);
  }

  ionViewWillEnter(): void {
    this.firebaseService.getNews().subscribe(data => (this.notices = data));
    this.isAdmin = sessionStorage.getItem('isAdmin');
  }

  GoToAddNew() {
    this.router.navigate(['dashboard/tabs/AddNew/']);
  }
}
