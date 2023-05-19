import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-nearby-user-details',
  templateUrl: './nearby-user-details.component.html',
  styleUrls: ['./nearby-user-details.component.css']
})
export class NearbyUserDetailsComponent implements OnInit {

  userData: any = {}

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private backend: BackendService
  ) { }
  
  async ngOnInit() {
    console.log('details init')
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
        console.log('target user found:')
        let response = await this.backend.getUserInfo(parseInt(u.id))
        console.log(response.data)
        this.userData = response.data
        // this.userData = u
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

  async sendComment(comment: string) {
    let userId = -1
    let storedUserId = localStorage.getItem('user_id')
    if (storedUserId != null) {
      userId = parseInt(storedUserId)
    }
    let payload = {
      'comment': comment,
      'fromUserId': userId,
      'toUserId': this.userData.id
    }
    console.log(payload)
    let response = await this.backend.postComment(payload)
    console.log('comment created:')
    console.log(response)
    if (response.message == 'Registro exitoso') {
      let newComment = [{
        'comment': comment,
        'from': localStorage.getItem('username'),
        'rate': response.data.rate
      }]
      this.userData.comments = newComment.concat(this.userData.comments)
    }
  }
}
