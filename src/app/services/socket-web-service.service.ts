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
    this.listen()
  }

  private listen() {
    this.ioSocket.on('nearby-users', (data: any) => {
      console.log(data)
    })
  }

  emitLocation(payload = {}) {
    //payload = { user_id, lat, lon }
    this.ioSocket.emit('update-location', payload)
  }
}
