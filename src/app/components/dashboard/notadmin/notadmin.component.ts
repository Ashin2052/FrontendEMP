import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LeaceListService } from "src/app/services/leace-service.service";
import { User } from 'src/app/models/user.model';
import { Leave} from 'src/app/models/leave.model';
declare var $: any;

@Component({
  selector: 'app-notadmin',
  templateUrl: './notadmin.component.html',
  styleUrls: ['./notadmin.component.css']
})
export class NotadminComponent implements OnInit {

  constructor(private LeaceListService: LeaceListService, private router: Router) { }

  ngOnInit() {
    this.looggedOnUserLeavedList()
  }
  allLeaveList=[];
  newLeave=new Leave();
 message;
  submitLeave(leaveInfo)
  {
this.LeaceListService.addNewUserLeave(leaveInfo).subscribe(

  (response: any)=>{
    this.newLeave=response;
    this.message="leave posted successfully"
    this.allLeaveList.push(this.newLeave);
    $("#modalLeavetable").modal("hide");

  },
  (error:any)=>{
    console.log("kera", error);
    this.message="Error check in Return and leave date";
  }
)
  }

  // applyCss( status ){
  //   console.log("@@@",status);
  //   return {
  //     'color':'red'
  //   }
  // }
  looggedOnUserLeavedList()
  {    let token=JSON.parse(localStorage.getItem('token'))
            let id=token.emplyee_Details._id;
    this.LeaceListService.particularEmpLeaveList(id).subscribe(
      (response: any)=>{
      this.allLeaveList=response;
      console.log('all leave list',this.allLeaveList)
      }
    )
  }


}
