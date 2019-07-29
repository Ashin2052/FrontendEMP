import { Component, OnInit } from '@angular/core';
import { User } from "src/app/models/user.model";
import { EmpListService } from "src/app/services/empList/emp-list.service";
@Component({
  selector: 'app-revision',
  templateUrl: './revision.component.html',
  styleUrls: ['./revision.component.css']
})
export class RevisionComponent implements OnInit {
 empList=[];
 editUser;
  constructor(private EmpListService: EmpListService) { }

  ngOnInit() {
    this.getEmpList()
  }

getEmpList()
{
  this.EmpListService.empList().subscribe((Response:any)=>{
    this.empList=Response.filter(x=>
      {
       return x._id!=JSON.parse(localStorage.getItem("token")).emplyee_Details._id;
      })
      console.log(this.empList,"revised emplist get ")
  })
}
editBind(emp)
{
this.editUser={...emp};
}
deleteEmp(emp,index)
{
  this.EmpListService.delete(emp._id).subscribe((Response:any)=>
  {
   this.empList.splice(index, 1);
  })
}

}
