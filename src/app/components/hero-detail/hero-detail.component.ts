import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  TemplateRef
} from "@angular/core";
import { Hero } from "../../hero";
import { HEROES } from "../../mock-heroes";
import { NgForm } from "@angular/forms";
import { User } from "src/app/models/user.model";
import { ToastrService, ToastContainerDirective } from 'ngx-toastr';

import { EmpListService } from "src/app/services/empList/emp-list.service";
declare var $: any;

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  confirmpassword;
  hero: Hero;
  heroes = HEROES;
  errorMsg='';
 registerORadd='';
  newUser = new User();
  @Output() newData = new EventEmitter();
  @ViewChild("createUser", { static: false }) formData: NgForm;
  @ViewChild('modalRegister', { static: false }) modalRegister: TemplateRef<any>;
  @ViewChild(ToastContainerDirective, {static:false}) toastContainer: ToastContainerDirective;

  constructor(private _empSer: EmpListService,private toastr: ToastrService) {}

  ngOnChanges() {
    console.log(this.newUser,"blablavla");
  }

  ngOnInit() {
    
    
  }

  @Input() set NewUser(value) {
    if (value) {
      this.newUser = value;
      console.log(this.newUser,"yhismlk ,makfma")
    }
  }

  // ngOnChanges()
  // {
  //   console.log(this.hero,"HHHH")
  // }
  // newUser = new Hero();

  // openModal(id)
  // {
  //   if(id)
  //   {
  //     let index=this.heroes.findIndex(x=>x.id==id)
  //     this.newUser=this.heroes[index];
  //   }
  //   else
  //   {
  //     this.newUser=new Hero;
  //   }
  // }
  clickhandler(newUser) {
    console.log("newUser",newUser)
    if (newUser._id) {
      this.registerORadd='Update'
      this.submit(newUser);
      
    } else {
      this.registerORadd='Add New User'
      this.addNew(newUser);
    

    }

  }
  

  addNew(newUser) {
    if(newUser.password==newUser.confirmpassword)
    {
      this._empSer.addNewUser(newUser).subscribe(
        (response:any)=>{
          console.log("res", response);
          this.newData.emit(response);
          this.formData.form.reset();
          this.newUser = new User();
          this.errorMsg="SignUp successful"
          $("#modalRegisterForm").modal("hide");
          
  
        },
        error => {
          console.log("kera", error);
          this.errorMsg=error.error.message;
  
        }
      )
    }
    else
    {
      this.errorMsg="password mismatch"
    }
   
  }
  submit(newUser) {
    console.log("Formdata", this.formData);
    this._empSer.update(newUser).subscribe(
      (response: any) => {
        console.log("res", response);
        this.newData.emit(response);
        this.formData.form.reset();
        // this.newUser = new User();
        this.closeModal()
        $("#modalRegisterForm").modal("hide");

        
      },
      error => {
        console.log("kera", error);
        this.errorMsg=error.error.message;
        

      }
    );
    // this.newData.emit(newUser)
  }

  // add(newUser){
  //   this.heroes.push(newUser);
  // }

  // update(newUser, index){
  //   this.heroes[index] = newUser;
  // }

  closeModal() {
    // this.formData.form.reset();
    // console.log('After reset', this.formData);
    this.newUser=new User() ;
    console.log("new user",this.newUser)
    this.errorMsg=""
  }
}
