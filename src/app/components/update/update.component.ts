import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"]
})
export class UpdateComponent implements OnInit {
  userInfo: any;
// P
  constructor() {}

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem("token")).emplyee_Details;
    console.log(this.userInfo, " khaukkk");
  }

  edit(userInfo) {
    this.userInfo = {...userInfo};
  }

  receiverData(event) {
    console.log('Event from child', event)
    this.userInfo = JSON.parse(localStorage.getItem("token")).emplyee_Details = event;
  }
}
