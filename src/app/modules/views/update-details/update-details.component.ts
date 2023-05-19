import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent {

  name: string = ''
  age: number = 0
  birthdate: Date = new Date()
  interests: string = ''

  constructor(
    private router: Router,
    private backend: BackendService
  ) { }

  async ngOnInit(): Promise<void> {
    if(!this.isThereSession()) {
      this.goToPage('/login')
      return
    }

    const userId = localStorage.getItem('user_id')
    if (userId == null) {
      this.goToPage('/login')
      return
    }
    const response = await this.backend.getUserInfo(parseInt(userId))
    const user = response.data
    console.log(`response.data: ${JSON.stringify(response.data)}`)
    this.name = user.name
    this.age = user.age
    this.birthdate = new Date( user.birthdate )
    this.interests = user.interests
  }

  async updateDetails(name: string, age: string, birthdate: string, interests: string) {
    console.log(name, age, birthdate, interests)

    if (name == '' || age == '' || birthdate == '' || interests == '') {
      alert('Todos los campos son obligatorios')
      return
    }

    const userId = localStorage.getItem('user_id')
    if (userId == null) return
    const data = {
      'name': name,
      'age': age,
      'birthdate': birthdate,
      'interests': interests
    }
    console.log(data)
    const response = await this.backend.updateUserInfo(parseInt(userId), data)
    console.log(`response: ${response}`)
  }

  goToPage(path: string) {
    this.router.navigateByUrl(path);
  }

  isThereSession() {
    // return this.session.get_userdata() != null;
    return localStorage.getItem('user_id') != null
  }
}
