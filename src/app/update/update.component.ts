import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id!: number;
  User!: User;
  form!: FormGroup;
  u:User=new User();

  constructor(
    public UserService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.UserService.find(this.id).subscribe((data: User)=>{
      this.User = data;
    });

    this.form = new FormGroup({
      name:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      // password: new FormControl('', [ Validators.required, ])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.u.name=this.form.value.name;
    // this.u.password=this.form.value.password;
    this.u.email=this.form.value.email;
 
    console.log(this.u);
    this.UserService.update(this.id, this.u).subscribe(res => {
         console.log('User updated successfully!');
         this.router.navigateByUrl('listusers');
    })
  }

}