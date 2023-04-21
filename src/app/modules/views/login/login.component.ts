import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private backend: BackendService
  ) { }

  login(userName: string, passwd: string) {
    // logic to execute the login.
    console.log(`user: ${userName} passwd: ${passwd}`)

    //this.backend
  }

  goToPage(path: string) {
    this.router.navigateByUrl(path);
  }

}
