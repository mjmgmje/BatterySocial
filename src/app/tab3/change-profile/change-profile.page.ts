import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.page.html',
  styleUrls: ['./change-profile.page.scss'],
})
export class ChangeProfilePage {

  img: string;
  username: string;

  constructor(private firebaseService: FirebaseService) { }

  ionViewWillEnter() {
    this.firebaseService.getUserID(sessionStorage.getItem('userid')).subscribe(data => {
      this.img = data.img;
      this.username = data.username;
    });
  }
  change() {
    const user = {img: this.img, username: this.username };
    this.firebaseService.updateuser(user, sessionStorage.getItem('userid')).then();
  }

}
