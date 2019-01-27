import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-concierto-detail',
  templateUrl: './concierto-detail.page.html',
  styleUrls: ['./concierto-detail.page.scss'],
})
export class ConciertoDetailPage implements OnInit {
  conciertoToShow: any;
  start: string;
  end: string;
  eventSource = environment.eventSource;

  constructor(private route: ActivatedRoute, private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const param1 = String(params.get('paramId'));
      this.firebaseService.getConcert(param1).subscribe(data => {
        this.conciertoToShow = data;
        this.start = moment(new Date(this.conciertoToShow.startTime.seconds * 1000)).format('lll');
        this.end = moment(new Date(this.conciertoToShow.endTime.seconds * 1000)).format('lll');
      });
    });
  }

}
