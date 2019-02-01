import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.page.html',
  styleUrls: ['./add-activity.page.scss'],
})
export class AddActivityPage  {
  FormActivity: FormGroup;
  constructor(private fb: FormBuilder,
    private firebaseService: FirebaseService) {
      this.FormActivity = new FormGroup({
        name: new FormControl(),
        thumb: new FormControl(),
        description: new FormControl(),
        profesor: new FormControl(),
        hours: new FormControl(),
      });
     }

  ionViewWillEnter(): void {
  }

  addActivity(value) {
    const data = JSON.parse(JSON.stringify(value));
    this.firebaseService.addClass(data);
  }

}
