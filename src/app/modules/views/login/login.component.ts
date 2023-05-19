import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private backend: BackendService
  ) { }

  async login(userName: string, passwd: string) {
    // logic to execute the login.
    const data = {
      username: userName,
      password: passwd
    }
    const response = await this.backend.login(data)
    console.log(`response: ${response}`)
    localStorage.setItem('user_id', response.data.id)
    localStorage.setItem('username', response.data.username)

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
