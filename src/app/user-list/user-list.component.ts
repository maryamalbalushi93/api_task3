import { Component } from '@angular/core';
import { CommnService } from '../commn.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  public collection:any;
constructor( private commonservice:CommnService){}
  ngOnInit():void{
this.commonservice.getRestoList().subscribe((result)=>{
  this.collection=result; 
  console.log(this.collection)
});
  }
  deleteemp(id: any){
    this.commonservice.deleted(id).subscribe(
      (result) => {
        console.warn("result", result);
        console.log(result, "data deleted ");
        // After successful deletion, you may want to update your collection or reload data.
        this.collection = this.collection.filter((emp: any) => emp.id !== id);
      },
      (error) => {
        console.error("Error deleting item:", error);
        console.log("Error status:", error.status);
      }
    );
  }
}


