import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router,
    private backend: BackendService
  ) { }

  async signup(userName: string, passwd: string, passwdConfirm: string) {
    // logic to execute the login.
    console.log(`user: ${userName} passwd: ${passwd} confirm-passwd: ${passwdConfirm}`)
    if (passwd != passwdConfirm) {
      alert('Las contraseñas no coinciden!')
      return
    }

    const data = {
      username: userName,
      password: passwd
    }
    const response = await this.backend.signup(data)
    console.log(`response: ${response}`)
    localStorage.setItem('user_id', response.data.id)

    this.goToPage('/nearby-users')
  }

  ngOnInit(): void {
    if(this.isThereSession()) {
      this.goToPage('/nearby-users')
      return
    }
  }

  goToPage(path: string) {
    this.router.navigateByUrl(path);
  }

  isThereSession() {
    // return this.session.get_userdata() != null;
    return localStorage.getItem('user_id') != null
  }
}
