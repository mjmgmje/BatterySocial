import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-actividad-detail',
  templateUrl: './actividad-detail.page.html',
  styleUrls: ['./actividad-detail.page.scss']
})
export class ActividadDetailPage {
  classToShow: any;

  constructor(
    private route: ActivatedRoute,
    private firebaseService: FirebaseService
  ) {}

  ionViewWillEnter(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const param1 = String(params.get('paramId'));
      this.firebaseService
        .getClass(param1)
        .subscribe(data => (this.classToShow = data));
    });
  }
}
