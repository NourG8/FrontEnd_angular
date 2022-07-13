import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

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
      console.log(this.User);
    });

  }

  valid(id:any){
    // this.u.name=this.form.value.name;
    // this.u.password=this.form.value.password;
     this.u.valid="valid";

    this.UserService.update(this.id, this.u).subscribe(res => {
         console.log('validation user updated successfully!');
         this.router.navigate(['/details/'+id ])
         .then(() => {
           window.location.reload();
         });
    })
  }

  invalid(id:any){
    // this.u.name=this.form.value.name;
    // this.u.password=this.form.value.password;
     this.u.valid="Non valid";

    this.UserService.update(this.id, this.u).subscribe(res => {
         console.log('validation user updated successfully!');
         this.router.navigate(['/details/'+id])
         .then(() => {
           window.location.reload();
         });
    })
  }
}
