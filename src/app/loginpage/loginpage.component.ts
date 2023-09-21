import { Component, OnInit } from '@angular/core';
import { CommnService } from '../commn.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
 
  alert:boolean =false;
  name:any ;
  password:any ;
 constructor(private users:CommnService,private router:Router){}

 ngOnInit(): void {
}
login() {
  this.name = "maryam";
  this.password = "123";

  if (this.name == "maryam" && this.password == "123") {
    this.router.navigate([("../list")]);
  } else {
    console.log("invalid username , password");
  }
}
}
