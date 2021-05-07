import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState = null;

  constructor(private auth: AngularFireAuth, public router: Router, private alertController: AlertController) {
    this.auth.authState.subscribe(state => {
      console.log(state);
      this.authState = state;
    });
   }

   loginUser(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password)
      .then(async resp => {

          this.auth.currentUser.then(async token => {
          localStorage.setItem("correo", email);
          this.router.navigateByUrl('home');
        });
      }).catch(function(e) {
        return 1;
      });
  }

  logout() {
    this.auth.signOut();
  }

  async IngresoIncorrecto(titulo:string, mensaje:string) {

    const alert = await this.alertController.create({
      animated: true,
      backdropDismiss: true,
      cssClass: 'my-custom-class',
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
     await alert.present();
  }
  
}
