import { Component } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import * as sha256 from 'sha256';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {
  username: string;
  newpass: string;
  newpass2: string;
  img: string;

  constructor(private firebaseService: FirebaseService, private alertController: AlertController, private router: Router) {}

  ionViewWillEnter(): void {}

  create() {
    if (this.newpass === this.newpass2) {
      if (!this.img) {
        this.img = 'https://www.w3schools.com/w3images/avatar6.png';
      }
      const user = { img: this.img, isAdmin: false, password: sha256(this.newpass), username: this.username };
      this.firebaseService.adduser(user).then();
      this.router.navigate(['login/']);
    } else {
      this.passwordsAlert();
    }
  }

  async passwordsAlert() {
    const alert = await this.alertController.create({
      header: 'Error contraseña',
      message: 'Las contraseñas proporcionadas no coinciden',
      animated: true,
      buttons: ['OK'],
      backdropDismiss: true
    });
    await alert.present();
  }
}
