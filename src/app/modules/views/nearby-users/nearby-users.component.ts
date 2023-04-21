import { Component, OnInit } from '@angular/core';
import { SocketWebServiceService } from 'src/app/services/socket-web-service.service';

@Component({
  selector: 'app-nearby-users',
  templateUrl: './nearby-users.component.html',
  styleUrls: ['./nearby-users.component.css']
})
export class NearbyUsersComponent implements OnInit {
  constructor(
    private websocket: SocketWebServiceService
  ) { }

  ngOnInit(): void {
    this.websocket.emitLocation({ user_id: 444, lat: 21, lon: -85 })
  }

}
