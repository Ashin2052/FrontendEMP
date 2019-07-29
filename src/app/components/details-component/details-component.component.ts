import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { EmpListService } from "src/app/services/empList/emp-list.service";

@Component({
  selector: "app-details-component",
  templateUrl: "./details-component.component.html",
  styleUrls: ["./details-component.component.css"]
})
export class DetailsComponentComponent implements OnInit {
  id;
  userDetails=[];
  constructor(private EmpListService: EmpListService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.getUserDetails(this.id)

    }
  }
  

  ngOnInit() {
  }
 
getUserDetails(Eid)
{
  console.log(Eid,'Eid')
  this.EmpListService.particularEmpList(Eid).subscribe(
    (response: any) => {
      this.userDetails=response;
      console.log(response,"response of userInfo")
    
    }
  );
}

editDetails(userDetails)
{
  this.userDetails={...userDetails};
}

receivedData($event) {
  this.userDetails=$event;
}

}
