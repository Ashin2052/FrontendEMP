import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { EmpListService } from "src/app/services/empList/emp-list.service";
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';
import { from } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { finalize } from "rxjs/operators";
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  multipleSelectedItem=[];
  emplist = [];
  fullEmpList = [];
  editUser;
  p: number = 1;
  n = 10;
  emp;
  selectMultiple=false;
  searchKeyword = "";
  loading : boolean = false;
  @ViewChild(ToastContainerDirective, {static:false}) toastContainer: ToastContainerDirective;
  constructor(private EmpListService: EmpListService,private toastr: ToastrService, private router: Router,private spinner: NgxSpinnerService,private socket: Socket) {}

  ngOnInit() {
    let token = JSON.parse(localStorage.getItem("token"));

    if (token === null) {
      this.router.navigateByUrl("");
    } else {
      this.getEmpList();
    }
  }

  getEmpList() {
    this.loading = true;
    this.EmpListService.empList()
    .pipe(finalize(() =>{this.loading = false;}))
    .subscribe((response: any) => {
      console.log("Employee List", response);
      this.emplist = response;
      this.fullEmpList = response;
      this.emplist = this.emplist.filter(x => {
        return (
          x._id != JSON.parse(localStorage.getItem("token")).emplyee_Details._id
        );

      });
      // this.loading = false;
      let ourObj = this.emplist.find(x => x.fullName == "Tunil ssfss");
      console.log("obj", ourObj);
    });
  }

  editBind(emp) {
    console.log("emp is vejas",emp)
    // let index = this.emplist.findIndex(x=>x.id == emp._id);
    //  this.editUser = this.emplist[index];
    this.editUser = { ...emp }; //json.parse(json.stringify())
  }

  delete(id, index) {
    if (window.confirm("Are you want to delete?")) {
      console.log(id);
      this.EmpListService.delete(id).subscribe((response: any) => {

        this.emplist.splice(index, 1);
      });
    }
  }

  receivedData(newData) {
    let index = this.emplist.findIndex(x => x._id == newData._id);
    console.log(index);
    if (index == -1) {
      console.log("console");
      this.emplist.push(newData);
    } else {
      this.emplist[index] = newData;
    }
    //   console.log('event fff', event)
    //   this.EmpListService.update(event).subscribe((response:any)=>{
    //     this.emplist=response;
    //    })
  }

  leaveList = [];
  particularEmpLeaveList(emp) {
    console.log("log point particularEmployeeList", emp);
    this.EmpListService.particularEmpLeaveList(emp).subscribe(
      (response: any) => {
        this.leaveList = response;
        console.log(this.leaveList, "leavelistr ");
      }
    );
  }
  nameSortAsc() {
    let fullName = this.emplist.sort((a, b) => {
      if (a.fullName.toLowerCase() < b.fullName.toLowerCase()) return -1;
      return 1;
    });
    this.emplist = fullName;
  }
  nameSortDsc() {
    let fullName = this.emplist.sort((a, b) => {
      if (a.fullName.toLowerCase() > b.fullName.toLowerCase()) return -1;
      return 1;
    });
    this.emplist = fullName;
  }
  joinedDateSortAsc() {
    return this.emplist.sort((val1, val2) => {
      return <any>new Date(val1.joinedDate) - <any>new Date(val2.joinedDate);
    });
  }
  joinedDateSortDsc() {
    return this.emplist.sort((val1, val2) => {
      return <any>new Date(val2.joinedDate) - <any>new Date(val1.joinedDate);
    });
  }

  adminUpdate(emp, event) {
    if (event == true) {
      if (window.confirm("are u sure to make this dumb an admin?")) {
        this.makeAdmin(emp, event);
      } else {
        emp.isadmin = false;
        let index = this.emplist.findIndex(y => y._id == emp._id);
        this.emplist[index] = emp;
      }
    } else {
      if (
        window.confirm(
          "Are u sure want to remove the selected user from admin?"
        )
      ) {
        this.makeAdmin(emp, event);
      } else {
        emp.isadmin = true;
        let index = this.emplist.findIndex(y => y._id == emp._id);
        this.emplist[index] = emp;
      }
    }
  }
  makeAdmin(emp, event) {
    console.log(emp._id, event);
    this.EmpListService.isadminUpdate(emp._id, event.toString()).subscribe(
      (response: any) => {
        console.log("adminupdate", event, emp._id);
      }
    );
  }

  sendUserDetail(emp) {
    // console.log(emp, "kera khau");
    this.emp = { ...emp };
    // console.log(this.emp, "this.emp");
  }

  checkMultiple()
  {
this.selectMultiple=true;
  }
  multipleChecked(id,i,x)
  {

    console.log(x,"checked unchecked items")
    if(x==true)
    {
      this.multipleSelectedItem.push({id: id, index: i});
      console.log(this.multipleSelectedItem,"multiple selected items")
    }
else{
  var l=this.multipleSelectedItem.length;
 for(var ind=0;ind<l;ind++)
 {
   
   console.log("id check",id,"this.multipleSelectedItem[ind].id",ind,this.multipleSelectedItem[ind].id)
   if(id==this.multipleSelectedItem[ind].id)
   {
     console.log(this.multipleSelectedItem[ind],ind,"this.multipleSelectedItem[i]")
     this.multipleSelectedItem.splice(ind,1);
     console.log(this.multipleSelectedItem,"final result")

   }
 }
}

  }
  deleteMultiple(){
    this.multipleSelectedItem.forEach(x=>{
      this.EmpListService.delete(x.id).subscribe((response: any) => {
        this.emplist.splice(x.index, 1);
        // this.getEmpList()
        this.selectMultiple=false;

      });
    })

  }
  starRatingsUpdate(ratings)
  {
    console.log("ratings",ratings)
  }
  searchFunction( searchString ) {

    this.emplist = this.fullEmpList.filter(x => x.fullName.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) > -1 || x.email.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) > -1 );
    
  //   var input, filter, table, tr, td, i;
  //   input = searchString.target.value;
  //   filter = input.toUpperCase();
  //   console.log(filter,"adadaa")
  //   table = document.getElementById("empTable");
  //   tr = table.getElementsByTagName("tr");
  // console.log('tr',tr)
  //   for (i = 0; i < tr.length; i++) {
  //     td = tr[i].getElementsByTagName("td")[1];
  //     if (td) {
  //       if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
  //         tr[i].style.display = "";
  //       } else {
  //         tr[i].style.display = "none";
  //       }
  //     }
  //   }
  }
}
