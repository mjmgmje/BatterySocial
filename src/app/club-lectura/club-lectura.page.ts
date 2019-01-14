import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-lectura',
  templateUrl: './club-lectura.page.html',
  styleUrls: ['./club-lectura.page.scss'],
})
export class ClubLecturaPage implements OnInit {

  books = [
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'libreta',
      description: 'descripcion de la libreta',
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'libreta',
      description: 'descripcion de la libreta',
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'libreta',
      description: 'descripcion de la libreta',
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'libreta',
      description: 'descripcion de la libreta',
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'libreta',
      description: 'descripcion de la libreta',
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'libreta',
      description: 'descripcion de la libreta',
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'libreta',
      description: 'descripcion de la libreta',
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'libreta',
      description: 'descripcion de la libreta',
    }, {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'libreta',
      description: 'descripcion de la libreta',
    },
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'libreta',
      description: 'descripcion de la libreta',
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  viewDetail() {}

}
