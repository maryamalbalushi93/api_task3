import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommnService } from '../commn.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
      alert :boolean = false;
      creatuser = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(''),
        phone_number: new FormControl(''),
        password: new FormControl('')
      });
  
  constructor(private reg:CommnService) {}
  ngOnInit(): void {
  }
  reguser(){
    //console.log(this.add.value);
    this.reg.createuser(this.creatuser.value).subscribe((result)=>{
      this.alert=true;
      this.creatuser.reset({});
      console.log("Get Data from server",result)
  })
}

  alertclose(){
    this.alert=false;
  }
  
  }

