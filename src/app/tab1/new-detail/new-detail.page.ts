import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.page.html',
  styleUrls: ['./new-detail.page.scss'],
})
export class NewDetailPage  {

  NewToShow: any;
  news = environment.news;

  constructor(private route: ActivatedRoute, private firebaseService: FirebaseService) { }

  ionViewWillEnter(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const param1 = String(params.get('paramId'));
      this.firebaseService.getnew(param1).subscribe(New =>
        this.NewToShow = New
      );
    });
  }
}
