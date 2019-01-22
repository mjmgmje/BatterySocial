import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-concierto-detail',
  templateUrl: './concierto-detail.page.html',
  styleUrls: ['./concierto-detail.page.scss'],
})
export class ConciertoDetailPage implements OnInit {
  conciertoToShow: any;
  eventSource = [{
    id: 1,
    title: 'Concierto Carismos',
    startTime: new Date('2019-01-17T17:00:00'),
    endTime: new Date('2019-01-17T18:00:00'),
    photo: 'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    allDay: false,
  },
];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.conciertoToShow = this.eventSource[0];
    moment.locale('es');
    this.conciertoToShow.startTime = moment(this.conciertoToShow.startTime).format('lll');
    this.conciertoToShow.endTime = moment(this.conciertoToShow.endTime).format('lll');
  }

}
