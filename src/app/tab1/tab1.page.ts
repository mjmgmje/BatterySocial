import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private toolbarColor: string;
  notices = [
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'noticia',
      description: 'descripcion de la noticia',
      time: '2d'
    }
  ];

  constructor() {
    this.toolbarColor = 'yellow';
  }

  viewDetail(id: number) {}
}
