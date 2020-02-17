import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL_API: string;

  constructor(private http: HttpClient){
    this.URL_API = environment.url;
  }

  login(params){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.URL_API+'login',params,httpOptions);
  }

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
