import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core'
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    email:'',
    password:''
  };
  loginErr;

  constructor(private loginService:LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  login(user)
  {
  this.loginService.login(user).subscribe((response: any) => {
    console.log(response, 'response');
    if(response) {
      localStorage.setItem('token', JSON.stringify(response));
      this.router.navigateByUrl('dash');
    }
  }, (error)=>{
    console.log(error)
    this.loginErr="Enter the correct email or password";
  })
  }

}
