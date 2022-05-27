import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private readonly apiurl:string = 'https://randomuser.me/api';

  constructor(private http: HttpClient) { }

  // Fetch Users
getUsers(){
  
}
  // Fetch user using userID UUID.
}
