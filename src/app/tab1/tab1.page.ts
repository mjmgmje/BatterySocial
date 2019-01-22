import { Component } from '@angular/core';
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
  notices = [
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'noticia',
      description: 'descripcion de la noticia',
      time: '2d'
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'noticia',
      description: 'descripcion de la noticia',
      time: '2d'
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'noticia',
      description: 'descripcion de la noticia',
      time: '2d'
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'noticia',
      description: 'descripcion de la noticia',
      time: '2d'
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'noticia',
      description: 'descripcion de la noticia',
      time: '2d'
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'noticia',
      description: 'descripcion de la noticia',
      time: '2d'
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'noticia',
      description: 'descripcion de la noticia',
      time: '2d'
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'noticia',
      description: 'descripcion de la noticia',
      time: '2d'
    }
  ];

  constructor(private router: Router) {}

  viewDetail(id: number) {
    this.router.navigate(['dashboard/tabs/productDetail/' + id]);
  }
}
