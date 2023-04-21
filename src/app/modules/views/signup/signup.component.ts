import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(
    private router: Router,
    private backend: BackendService
  ) { }

  signup(userName: string, passwd: string, passwdConfirm: string) {
    // logic to execute the login.
    console.log(`user: ${userName} passwd: ${passwd} confirm-passwd: ${passwdConfirm}`)
    if (passwd != passwdConfirm) {
      alert('Las contraseñas no coinciden!')
      return
    }

    // this.backend
  }

  goToPage(path: string) {
    this.router.navigateByUrl(path);
  }
}
