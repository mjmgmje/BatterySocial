import { Component, OnInit } from '@angular/core';
import { Concierto } from '../../models/concierto';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-add-concert',
  templateUrl: './add-concert.page.html',
  styleUrls: ['./add-concert.page.scss'],
})
export class AddConcertPage implements OnInit {
  FormConcert: FormGroup;
  startTime: string;

  constructor( private fb: FormBuilder,
    private firebaseService: FirebaseService) {
    this.FormConcert = new FormGroup({
      title: new FormControl(),
      photo: new FormControl(),
      startTime: new FormControl(),
      endTime: new FormControl(),
    });
   }

  ngOnInit() {
  }

  addConcert(value: Concierto) {
    const startTime = {seconds: new Date(value.startTime).getTime() / 1000};
    const endTime = {seconds: new Date(value.endTime).getTime() / 1000};
    const Concert = {title: value.title, startTime: startTime, endTime: endTime, photo: value.photo};
    this.firebaseService.addConcert(Concert);
  }
}
