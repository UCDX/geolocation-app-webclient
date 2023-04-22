import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nearby-user-details',
  templateUrl: './nearby-user-details.component.html',
  styleUrls: ['./nearby-user-details.component.css']
})
export class NearbyUserDetailsComponent implements OnInit {

  userData: any = {}

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    if(!this.isThereSession()) {
      this.goToPage('/login')
      return
    }

    let nearbyUsers: Array<any>
    let usersList = sessionStorage.getItem('nearby-users')
    if (usersList != null) {
      nearbyUsers = JSON.parse(usersList)
    } else {
      alert('No se encontraron los usuarios cercanos en memoria. Esto es un error.')
      return
    }
    let username = this.route.snapshot.paramMap.get('user')
    for(let u of nearbyUsers) {
      if (u.username == username) {
        this.userData = u
        break
      }
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
