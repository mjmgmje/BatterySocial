import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.page.html',
  styleUrls: ['./change-profile.page.scss'],
})
export class ChangeProfilePage {

  img: string;
  username: string;

  constructor(private firebaseService: FirebaseService, private alertController: AlertController) { }

  ionViewWillEnter() {
    this.firebaseService.getUserID(sessionStorage.getItem('userid')).subscribe(data => {
      this.img = (data as any).img;
      this.username = (data as any).username;
    });
  }
  change() {
    const user = {img: this.img, username: this.username };
    this.firebaseService.updateuser(user, sessionStorage.getItem('userid')).then();
  }

  async imageChangeAlert() {
    const alert = await this.alertController.create({
      header: 'Error nueva contraseña',
      inputs: [
        {
          name: 'image',
          placeholder: 'New Image URL'
        }
      ],
      message: 'Aqui puedes cambiar tu imagen de Usuario',
      animated: true,
      buttons: [{
        text:'OK',
        handler: data => this.img = data.image
      }, 'Cancelar'],
      backdropDismiss: true
    });
    await alert.present();
  }

}
