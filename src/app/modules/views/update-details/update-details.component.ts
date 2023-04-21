import { Component } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent {

  constructor(
    private backend: BackendService
  ) { }

  updateDetails(name: string, age: string, birthdate: string, message: string) {
    console.log(name, age, birthdate, message)

    // this.backend
  }
}
