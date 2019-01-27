import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-info',
  templateUrl: './bar-info.page.html',
  styleUrls: ['./bar-info.page.scss']
})
export class BarInfoPage implements OnInit {
  informations = [
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'información',
      description: 'descripcion de la información',
    }
  ];

  constructor() {}

  viewDetail(id: number) {}

  ngOnInit() {}
}
