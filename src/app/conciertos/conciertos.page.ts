import {
  Component,
  OnInit
} from '@angular/core';
import * as moment from 'moment';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FirebaseService } from '../services/firebase.service';
import { Observable, Subscription } from 'rxjs';



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
export class ConciertosPage  {
  eventSource = [];
  isAdmin: string;
  eventSelected: any;
  viewTitle: string;
  selectedDay = new Date();
  unsub: Subscription;
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private firebaseService: FirebaseService
  ) {
    moment.locale('es');
    this.unsub = this.firebaseService.getConcerts().subscribe(data => {
    data.forEach(elem => {
        elem.startTime = new Date(elem.startTime.seconds * 1000);
        elem.endTime = new Date(elem.endTime.seconds * 1000);
      });
    this.eventSource = data;
    });

  }


  onViewTitleChanged(title) {
    moment.locale('es');
    this.viewTitle = title;
  }

  ionViewDidLeave(): void {
    this.unsub.unsubscribe();
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
  ionViewWillEnter(): void {
    // this.eventSource = environment.eventSource;
    // console.log(this.eventSource[0]);
    this.isAdmin = sessionStorage.getItem('isAdmin');
  }
  GoToAddConcert() {
    this.router.navigate(['dashboard/tabs/AddConcert/']);
  }
}
