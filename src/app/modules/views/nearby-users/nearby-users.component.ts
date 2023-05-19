import { Component, OnInit } from '@angular/core';
import { SocketWebServiceService } from 'src/app/services/socket-web-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nearby-users',
  templateUrl: './nearby-users.component.html',
  styleUrls: ['./nearby-users.component.css']
})
export class NearbyUsersComponent implements OnInit {
  lat: number = 0
  lon: number = 0
  nearbyUsers: Array<any> = []
  intervalId: any
  constructor(
    private websocket: SocketWebServiceService,
    private router: Router
  ) {
    this.startGeoloc()
    console.log('geo loc start')
  }

  ngOnInit(): void {
    // this.websocket.emitLocation({ user_id: 444, lat: 21, lon: -85 })
    if(!this.isThereSession()) {
      this.goToPage('/login')
      return
    }
    // this.startGeoloc()
    // this.websocket.onNearbyUsers(this.catchUsersHandler)
    this.websocket.onNearbyUsers( (data: any) => {
      console.log('catch users hanlder')
      sessionStorage.setItem('nearby-users', JSON.stringify(data))
      this.nearbyUsers = data
      console.log(this.nearbyUsers)
      console.log(this.nearbyUsers.length)
    } )

    let usersList = sessionStorage.getItem('nearby-users')
    if (usersList != null) {
      this.nearbyUsers = JSON.parse(usersList)
    }
  }

  startGeoloc() {
    if (navigator.geolocation) {

      const sendLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
          var latitud = position.coords.latitude;
          var longitud = position.coords.longitude;
          this.lat = latitud
          this.lon = longitud
          console.log(`new location read: lat=${latitud};lon=${longitud}`)
          // Enviar la geolocalización al servidor
          // socket.emit('ubicacion', {lat: latitud, lon: longitud});
          let userId = localStorage.getItem('user_id')
          if (userId == null) {
            console.log('ERROR IN SESSION DATA: No user_id was found in local storage. No geolocation data will be sent to server.')
            return
          }
  
          this.websocket.emitLocation({ user_id: parseInt(userId), lat: latitud, lon: longitud })
        });
      }

      // Ejecutar la función de envío de ubicación cada segundo
      this.intervalId = setInterval(sendLocation, 1000);

      console.log('whatching geolocalization')
    } else {
      console.log('Geolocalización no es soportada por este navegador');
    }
  }

  stopGeoloc() {
    // Detener el envío de ubicación al servidor
    clearInterval(this.intervalId);
  }

  goToPage(path: string) {
    this.router.navigateByUrl(path);
  }

  isThereSession() {
    // return this.session.get_userdata() != null;
    return localStorage.getItem('user_id') != null
  }

  seeUserDetails(userId: number) {
    this.router.navigateByUrl(`/nearby-users/${userId}/details`);
  }

}
