import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libro-detail',
  templateUrl: './libro-detail.page.html',
  styleUrls: ['./libro-detail.page.scss'],
})
export class LibroDetailPage implements OnInit {

  libroToShow: any;
  books = [
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'libreta',
      // tslint:disable-next-line:max-line-length
      description: 'descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta descripcion de la libreta',
      comments: [
        {nombre: 'Maria' , comment: 'una maravilla', photo: 'https://www.w3schools.com/howto/img_avatar.png'},
        {nombre: 'Luisa' , comment: 'Gran libro', photo: 'https://www.w3schools.com/howto/img_avatar2.png' },
        {nombre: 'Fernando' , comment: 'no me termino de convencer', photo: 'https://www.w3schools.com/w3images/avatar2.png' },
        {nombre: 'Raul' , comment: 'Muy divertido', photo: 'https://www.w3schools.com/w3images/avatar6.png' },
      ]
    },
  ];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.libroToShow = this.books[0];

  }

}
