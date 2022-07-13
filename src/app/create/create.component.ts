import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
  u:User=new User();

  constructor(
    public personService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required, ]),
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
   this.u.name=this.form.value.name;
   this.u.password=this.form.value.password;
   this.u.email=this.form.value.email;

   console.log(this.u);
    this.personService.create(this.u).subscribe(res => {
         console.log('Person created successfully!');
         this.router.navigateByUrl('/listusers');
    })
  }

}
