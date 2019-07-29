import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loginErr;

  constructor(private router:Router) { }

  ngOnInit() {
    let token=localStorage.getItem('token');
    console.log('ssssss')
    //       this.router.navigateByUrl('/dash/admin');

        console.log(JSON.parse(token).emplyee_Details)
    if(token===null){
      
      this.router.navigateByUrl('');
      this.loginErr="Enter the correct email or password";
    }
    else if(JSON.parse(token).emplyee_Details.isadmin)
        {
          this.router.navigateByUrl('/dash/admin');
        }
        else
        {
              this.router.navigateByUrl('/dash/notadmin');

        }
    // else{
    //   if(JSON.parse(token).emplyee_Details.isadmin)s
    //   {
    //     this.router.navigateByUrl('admin');
    //   }
    //   else
    //   {
    //     this.router.navigateByUrl('notadmin');
    //   }
    // }
  }
}
