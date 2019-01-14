import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss']
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

  constructor() {}

  viewDetail(id: number) {}

  ngOnInit(): void {}
}
