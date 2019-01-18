import {
  Component,
  OnInit
} from '@angular/core';
import * as moment from 'moment';
import { AlertController, ModalController, NavController } from '@ionic/angular';


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
    allDay: false,
  },
];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(
    public navCtrl: NavController,
    // private modalCtrl: ModalController,
    // private alertCtrl: AlertController
  ) {}


  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    const start = moment(event.startTime).format('LLLL');
    const end = moment(event.endTime).format('LLLL');

    // const alert = this.alertCtrl.create({
    //   title: '' + event.title,
    //   subTitle: 'From: ' + start + '<br>To: ' + end,
    //   buttons: ['OK']
    // });
    // alert.present();
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
  ngOnInit(): void {}
}
