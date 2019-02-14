import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import * as sha256 from 'sha256';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.page.html',
  styleUrls: ['./change-pass.page.scss']
})
export class ChangePassPage {
  oldpass: string;
  newpass: string;
  newpass2: string;
  realoldpass: string;

  constructor(private firebaseService: FirebaseService, private alertController: AlertController) {}

  ionViewWillEnter() {
    this.firebaseService
      .getUserID(sessionStorage.getItem('userid'))
      .subscribe(data => {
        this.realoldpass = (data as any).password;
      });
  }

  change() {
    if (this.realoldpass === sha256(this.oldpass)) {
      if (this.newpass === this.newpass2) {
        const user = { password: sha256(this.newpass) };
        this.firebaseService
          .updateuser(user, sessionStorage.getItem('userid'))
          .then();
      } else {
        this.passwordsAlert();
      }
    } else {
      this.oldPasswordAlert();
    }
  }
  async passwordsAlert() {
    const alert = await this.alertController.create({
      header: 'Error nueva contraseña',
      message: '"Nueva contraseña" no coincide con la contraseña de confirmación.',
      animated: true,
      buttons: ['OK'],
      backdropDismiss: true
    });
    await alert.present();
  }

    async oldPasswordAlert() {
      const alert = await this.alertController.create({
        header: 'Error antigua contraseña',
        message: 'La contraseña del usuairo no coincide con "Antigua Contraseña"',
        animated: true,
        buttons: ['OK'],
        backdropDismiss: true
      });
      await alert.present();
    }
}
