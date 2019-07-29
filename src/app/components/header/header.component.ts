import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveListComponent } from '../leave-list/leave-list.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
@ViewChild(LeaveListComponent,{static:false}) LeaveListComponent

 @Input() loginInfo
 isadmin = true;
  constructor(private router:Router) { }

  ngOnInit() {
if(localStorage.getItem('token')){
  let token=JSON.parse(localStorage.getItem('token'))
  this.isadmin=token.emplyee_Details.isadmin

}

//     let token=JSON.parse(localStorage.getItem('token'))
// console.log(token,"token kha")
// this.isadmin=token.emplyee_Details.isadmin
// console.log(this.isadmin,"token isadmin kha")    

  }

  Home()
  {
    this.router.navigateByUrl('dash/dash')

  }
  logOut()
  {
    console.log("log")
    this.router.navigateByUrl('login')
    localStorage.clear();
  }
  empLeaveList()
  {
    this.router.navigateByUrl('dash/empLeaveList')
  }
  settings()
  {
  
  }

}
