import {
  Component,
  OnInit
} from '@angular/core';
import * as moment from 'moment';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'app-conciertos',
  templateUrl: './conciertos.page.html',
  styleUrls: ['./conciertos.page.scss']
})
export class ConciertosPage implements OnInit {
  eventSource = [{
    id: 1,
    title: 'Concierto Carismos',
    startTime: new Date('2019-01-17T17:00:00'),
    endTime: new Date('2019-01-17T18:00:00'),
    photo: 'https://s3.amazonaws.com/ionic-marketplace/ionic-3-start-theme/screenshot_1.png',
    allDay: false,
  },
];
  eventSelected: any;
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(
    public navCtrl: NavController,
    private router: Router
    // private modalCtrl: ModalController,
    // private alertCtrl: AlertController
  ) {
    moment.locale('es');

  }


  onViewTitleChanged(title) {
    moment.locale('es');
    this.viewTitle = title;
    console.log(this.viewTitle);
  }

  onEventSelected(event) {
    moment.locale('es');
    const start = moment(event.startTime).format('LLLL');
    const end = moment(event.endTime).format('LLLL');
    this.eventSelected = event;
    this.router.navigate(['dashboard/tabs/conciertoDetail/' + event.id]);

    // const alert = this.alertCtrl.create({
    //   title: '' + event.title,
    //   subTitle: 'From: ' + start + '<br>To: ' + end,
    //   buttons: ['OK']
    // });
    // alert.present();
  }

  onTimeSelected(ev) {
    moment.locale('es');
    this.selectedDay = ev.selectedTime;

  }
  ngOnInit(): void {
    moment.locale('es');
  }
}
