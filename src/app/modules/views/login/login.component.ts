import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router
  ) { }

  login(userName: string, passwd: string) {
    // logic to execute the login.
    console.log(`user: ${userName} passwd: ${passwd}`)
  }

  goToPage(path: string) {
    this.router.navigateByUrl(path);
  }

}
