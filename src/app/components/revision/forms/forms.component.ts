import { Component, OnInit ,Input} from '@angular/core';
import { User } from 'src/app/models/user.model';
import { visitAstChildren } from '@angular/compiler';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  recievedEmpData=new User();
  constructor() { }

  ngOnInit() {
console.log(this.recievedEmpData,"recieved Emp F")
  }


  @Input() set empData(value)
  {
this.recievedEmpData=value;
  }
  

}
