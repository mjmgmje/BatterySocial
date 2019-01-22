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
  classes = [
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'actividad 1',
      description: 'descripcion de la actividad',
      hours: 'L-X-V (19:00:20:00)'
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'actividad 1',
      description: 'descripcion de la actividad',
      hours: 'L-X-V (19:00:20:00)'
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'actividad 1',
      description: 'descripcion de la actividad',
      hours: 'L-X-V (19:00:20:00)'
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'actividad 1',
      description: 'descripcion de la actividad',
      hours: 'L-X-V (19:00:20:00)'
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'actividad 1',
      description: 'descripcion de la actividad',
      hours: 'L-X-V (19:00:20:00)'
    },
  ];

  constructor(private router: Router) {}

  viewDetail(id: number) {
    this.router.navigate(['dashboard/tabs/actividadDetail/' + id]);
  }

  ngOnInit(): void {}
}
