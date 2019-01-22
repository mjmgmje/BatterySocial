import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.page.html',
  styleUrls: ['./new-detail.page.scss'],
})
export class NewDetailPage implements OnInit {

  NewToShow: any;
  news = [
    {
      id: 1,
      thumb:
        'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
      name: 'noticia',
      description: 'descripcion de la noticia',
      time: '2d',
      // tslint:disable-next-line:max-line-length
      new: 'La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que La noticia es que',
    },
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.NewToShow = this.news[0];
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   const param1 = String(params.get('paramId'));
    //   this.DbService.getNewById(param1).subscribe(new =>
    //     this.NewToShow = new
    //   );
    // });
  }
}
