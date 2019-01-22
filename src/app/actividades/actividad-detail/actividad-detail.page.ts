import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actividad-detail',
  templateUrl: './actividad-detail.page.html',
  styleUrls: ['./actividad-detail.page.scss'],
})
export class ActividadDetailPage implements OnInit {
  classToShow: any;
  classes = [
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'actividad 1',
      // tslint:disable-next-line:max-line-length
      description: 'descripcion de la actividad descripcion de la actividad descripcion de la actividad descripcion de la actividad descripcion de la actividad descripcion de la actividad descripcion de la actividad',
      hours: 'L-X-V (19:00:20:00)'
    }
  ];

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.classToShow = this.classes[0];

  }

}
