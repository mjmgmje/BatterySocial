import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { FormControl } from '@angular/forms';
import * as sha256 from 'sha256';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage  {
  Username$ = new FormControl('');
  Password$ = new FormControl('');

  constructor(
    private authService: AuthenticationService,
    private firebaseService: FirebaseService,
  ) {}

  ionViewWillEnter(): void {}

  login() {
    this.firebaseService.getUser(this.Username$.value).subscribe(user => {
      if (user[0]) {
      if (user[0].password === sha256(this.Password$.value)) {
        this.authService.login();
        sessionStorage.setItem('isAdmin', user[0].isAdmin);
        sessionStorage.setItem('userid', user[0].id);
      }
    }
    });
  }
}
