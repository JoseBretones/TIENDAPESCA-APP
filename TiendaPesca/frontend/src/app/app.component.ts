import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { User } from './models/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  public user : User;
  userLogged;
  token;
  constructor(private userService : UserService){
    this.user = new User('','','','','','','',0,'ROLE_USER',0);
    console.log(this.user);
  }

  public login(form: NgForm) {
    const params = {
      email: form.value.email,
      password: form.value.password,
      gethash: true
    };
    this.userService.login(params).subscribe(Response=>{
      this.userLogged=Response['user'];
      if(this.token!=null){
        //toast de success
      }else{
        localStorage.setItem('userLogged',JSON.stringify(this.userLogged));
        this.token = Response['token'];
        if(this.token.length<=0){
          //toast error
        }else{
          localStorage.setItem('token',this.token);
          //toast success
        }
      }
    });
  }

}
