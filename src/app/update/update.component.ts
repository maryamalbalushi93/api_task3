import { Component, OnInit } from '@angular/core';
import { CommnService } from '../commn.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  alert: boolean = false;
  update: FormGroup;

  constructor(
    private upemp: CommnService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.update = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.upemp.getcurrentdata(id).subscribe((result: any) => {
          this.update.patchValue({
            name: result['name'],
            email: result['email'],
            phone_number: result['phone_number'],
            address: result['address']
          });
        });
      }
    });
  }

  alertClose(): void {
    this.alert = false;
  }

  updateRest(): void {
    const id = this.router.snapshot.params['id'];
    this.upemp.updaterests(id, this.update.value).subscribe(
      (result) => {
        console.log(result, "success");
        this.alert = true;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}