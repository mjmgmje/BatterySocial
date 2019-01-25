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
export class ActividadesPage implements OnInit {
  classes;
  isAdmin: string;
  constructor(
    private router: Router,
    private firebaseService: FirebaseService
  ) {}

  viewDetail(id: number) {
    this.router.navigate(['dashboard/tabs/actividadDetail/' + id]);
  }

  ngOnInit(): void {
    this.firebaseService.getClasses().subscribe(data => (this.classes = data));
    this.isAdmin = sessionStorage.getItem('isAdmin');
  }
  GoToAddActivity() {
    this.router.navigate(['dashboard/tabs/AddActivity/']);
  }
}
