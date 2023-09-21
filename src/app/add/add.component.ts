import { Component, OnInit } from '@angular/core';
import { CommnService } from '../commn.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  alert :boolean = false;
  add = new FormGroup({
    employeeId: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      phone_number: new FormControl(''),
      address: new FormControl('')
  })
  constructor(private employee:CommnService) {}
ngOnInit(): void {
}
createEmployees(){
  //console.log(this.add.value);
  this.employee.addemployees(this.add.value).subscribe((result)=>{
    this.alert=true;
    this.add.reset({});
    console.log("Get Data from server",result)
})}
alertclose(){
  this.alert=false;
}
}

