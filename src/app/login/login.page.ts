import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userLoginDto: userLoginDto = {
    username: "",
    password: ""
  };

  constructor(
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  login() {

    if(this.userLoginDto.username == 'jrodas@analytics.pe' && this.userLoginDto.password == '12345678') {
      this.router.navigate(['/assigned-orders']);
    } else {
      if(this.userLoginDto.username == "" || this.userLoginDto.password == "") {
        this.presentAlert('Usuario o Contraseña son requeridos');
      } else {
        this.presentAlert('Usuario o Contraseña son incorrectas');
      }
      
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
