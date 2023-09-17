import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  apiService: any;
  login() {
    this.apiService.get('http://localhost:4200/login').subscribe((data: any) => {
      console.log(data);
    });
}}
