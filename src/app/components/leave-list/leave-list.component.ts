import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LeaceListService } from "src/app/services/leace-service.service";

@Component({
  selector: "app-leave-list",
  templateUrl: "./leave-list.component.html",
  styleUrls: ["./leave-list.component.css"]
})
export class LeaveListComponent implements OnInit {
  flag = false;
  unFilterdLeaveList = [];
  constructor(
    private LeaceListService: LeaceListService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getLeaveList();
  }
  allEmpLeaveList = [];
  getLeaveList() {
    this.LeaceListService.empLeaveList().subscribe((response: any) => {
      this.unFilterdLeaveList = response;

      this.allEmpLeaveList = response;
      console.log(this.allEmpLeaveList, "leavelist");
      this.allEmpLeaveList = this.allEmpLeaveList.filter(
        (y, i) =>
          y && this.allEmpLeaveList.findIndex(x => x.eid[0] == y.eid[0]) == i
      );
    });
  }
  showDetails(i) {
    console.log(i.eid[0], "eid leave list");
    this.flag = !this.flag;
    if (this.flag === true) {
      this.getPar(i);
      // console.log("i", i);
      // this.allEmpLeaveList = this.unFilterdLeaveList.filter(x => x.eid[0]== i.eid[0]);
    } else {
      console.log("ffff");
      this.getLeaveList();
    }
  }

  leaveStatus(id, updatedLeaveStatus) {
    this.LeaceListService.leaveStatus(id, updatedLeaveStatus).subscribe(
      (response: any) => {
        console.log(response, "updatedleavestatus");
      }
    );
  }

  getPar(i) {
    this.LeaceListService.particularEmpLeaveList(i.eid[0]).subscribe(
      (response: any) => {
        this.allEmpLeaveList = response;
        console.log(response, "response");
      }
    );
  }
}
