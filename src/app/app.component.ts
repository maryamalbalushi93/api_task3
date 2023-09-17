import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
  title = 'task3';
  constructor(private toastr: ToastrService) { }

  showToaster() {
    this.toastr.success('Toaster Message', 'Toaster Title');
  }
  showAlert() {
    Swal.fire({
      title: 'Alert Title',
      text: 'Alert Message',
      icon: 'success',
      confirmButtonText: 'OK'
    });
    
}}
