import { Injectable } from '@angular/core';

// needed to make HTTP calls to the server api
import { HttpClient } from '@angular/common/http'

// needed to fetch the api domain
// we modified angular.json to replace this w/environment.prod.ts in production build
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  // read api url from environment file
  serverUrl: string = environment.serverUrl

  constructor(private http: HttpClient) { }

  // get all from api
  getEmployers() {
    return this.http.get(`${this.serverUrl}/api/employers`)
  }

}
