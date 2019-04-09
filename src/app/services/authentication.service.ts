import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from './firebase.service';
import * as jwt from 'jsrsasign';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(false);

  constructor(
    private storage: Storage,
    private plt: Platform,
    private firebase: FirebaseService
  ) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      this.firebase.getUserByToken(res).subscribe(data => {
        if (data[0]) {
          sessionStorage.setItem('isAdmin', (data[0] as any).isAdmin);
          sessionStorage.setItem('userid', (data[0] as any).id);
          this.authenticationState.next(true);
        }
      });
    });
  }

  login(token: string) {
    return this.storage.set(TOKEN_KEY, token).then(() => {
      this.authenticationState.next(true);
    });
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }


  generateJWT(userId: string) {
    // tslint:disable-next-line:max-line-length
    const RSA_PRIVATE_KEY = 'MIICWgIBAAKBgFvFpADEZydwKvf83tJuAkFK72baXxq3TszxmdCdpm2YRS4jfcMAFbB2/Ubl52s7ubA3NK8CqFPJfC5HA9t+vgM8tXUrsU0FW1eM4o28AsI9jZQMgLqgEkaQ0s6oy4vAvdSiSURZls5/fYoZfH3UmyUOOdXxBFwnscD8ox9pAEHNAgMBAAECgYBHXpnfut4aDqJr/2zuK313d6Zcz6C8rygKPC4JzkC65HuQmStZtjwn4zGvrGXfwC/1eclv/VoY5w27E6FNVvC/tI52wzUPDknFf01LWD2Hah1RYozTcQfFapUIelrtiTuNot50TupTIyo9kVlc5vPFkD7L2Q1Ciz1pclT4tfhdpQJBALKA69WGzJcPFmEgHEymjz8rP8+AAkk9HBiLKTT3UwqxuUes1Wd8TLGUfJ6zbxBcVpmqRPKnF8WPNSGLLcsDrRcCQQCDnUgThMQh2Ids3zStAueRNWbwZez5dOke5Vav4+nZ+GcgbQL+GuDjvODCFxi4ZebcffIbNw9uC1t7YsoJjP67AkAVTKTXWbpX3AkDld1KmCVHmFWI4PFk49HSa+iC1XAnOoWtM8ZTDtXn6pvkI+0AusPqmhKYEbAYdroUQpM4QjwJAkBulHwVYixD36BQ+exRHKqhF0Qo4QpMwUyIl9nQqGY3q/xBgzXLd5vR3ETe7fboHz3rran38bf2FnbDYUos4hi3AkBVF9d+YZPWGWzhfsgIrgOiRZM6bmJv+CB+teTR6/hP+EZ3WHwWCB1iGrvVhZkugg1pwOJja66QhFAG+jwKUeYk';
    const oHeader = {alg: 'HS256', typ: 'JWT'};

   // Payload
   const oPayload: any = {};
   const tNow = jwt.KJUR.jws.IntDate.get('now');
   const tEnd = jwt.KJUR.jws.IntDate.get('now + 1hour');
   oPayload.sub = userId;
   oPayload.iat = tNow;
   oPayload.exp = tEnd;

   const sHeader = JSON.stringify(oHeader);
   const sPayload = JSON.stringify(oPayload);
   const sJWT = jwt.KJUR.jws.JWS.sign('HS256', sHeader, sPayload, '616161');
   return sJWT;
 }
}
