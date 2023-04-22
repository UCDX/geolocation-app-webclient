import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketWebServiceService extends Socket {

  constructor() {
    super({
      'url': 'http://localhost:5000'
    })
    console.log('Socket instanciated')
  }

  onNearbyUsers(handler: any) {
    this.ioSocket.on('nearby-users', handler)
  }

  emitLocation(payload = {}) {
    //payload = { user_id, lat, lon }
    this.ioSocket.emit('update-location', payload)
  }
}
