import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly URL_API = 'http://localhost:3000/tienda/usuarios';

  constructor(private http: HttpClient){}


  getUsers(){
    return this.http.get(this.URL_API);
  }

  getUserById(_id: String){
    return this.http.get(this.URL_API+`/${_id}`);
  }

  addUser(user: User){
    return this.http.post(this.URL_API, user);
  }

  editUser(user: User){
    return this.http.put(this.URL_API+`/${user._id}`, user);
  }

  deleteUser(_id: String){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}
