import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  username: string;

  constructor(private router: Router, private firebaseService: FirebaseService) {}

  ionViewWillEnter() {
    this.firebaseService
      .getUserID(sessionStorage.getItem('userid'))
      .subscribe(data => {
        this.username = data.username;
      });
  }

  logout() {
    this.authSevice.logout();
  }
  GotoChangeProfile() {
    this.router.navigate(['dashboard/tabs/ChangeProfile/']);
  }
  GotoChangePass() {
    this.router.navigate(['dashboard/tabs/ChangePass/']);
  }
  GoToInfo() {
    this.router.navigate(['dashboard/tabs/Info/']);
  }
}
