import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private baseUrl = 'https://geolocation-app-server.onrender.com'

  constructor() { }

  // Ejemplo de uso de promessas
  exampleMethod(data = {}) {
    return new Promise((resolve, reject) => {
      if (Object.keys(data).length === 0) {
        reject('El objeto está vacío')
      }
      resolve(data)
    })
  }

  login(data: any) {
    const endpoint = `${this.baseUrl}/login`

    return fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else if (response.status == 404) {
        alert('Usuario o contraseña incorrectos')
        throw new Error('Usuario o contraseña incorrectos')
      } else {
        throw new Error('Error en la respuesta de la API')
      }
    })
    .then(jsonData => {
      return jsonData
    })
    .catch(error => {
      throw new Error(error)
    })
  }

  signup(data: any) {
    const endpoint = `${this.baseUrl}/register`

    return fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else if (response.status == 409) {
        alert('El usuario ya existe')
        throw new Error('El usuario ya existe')
      } else {
        throw new Error('Error en la respuesta de la API')
      }
    })
    .then(jsonData => {
      return jsonData
    })
    .catch(error => {
      throw new Error(error)
    })
  }

  getUserInfo(userId: number) {
    const endpoint = `${this.baseUrl}/user/${userId}`

    return fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Error en la respuesta de la API')
      }
    })
    .then(jsonData => {
      return jsonData
    })
    .catch(error => {
      throw new Error(error)
    })
  }

  updateUserInfo(userId: number, data: any) {
    const endpoint = `${this.baseUrl}/user/${userId}`

    return fetch(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert('Actualización exitosa')
        return response.json()
      } else {
        throw new Error('Error en la respuesta de la API')
      }
    })
    .then(jsonData => {
      return jsonData
    })
    .catch(error => {
      throw new Error(error)
    })
  }
}
