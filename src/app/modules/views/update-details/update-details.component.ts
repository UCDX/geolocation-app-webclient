import { Component } from '@angular/core';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent {

  updateDetails(name: string, age: string, birthdate: string, message: string) {
    console.log(name, age, birthdate, message)
  }
}
