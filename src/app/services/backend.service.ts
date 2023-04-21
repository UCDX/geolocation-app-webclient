import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

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
}
