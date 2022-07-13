import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  test=true;
  js:any;
valid:any;
msg:any;


  constructor( private router:Router, private auth:AuthService,private userService:UserService) { }

  ngOnInit(): void {

  }
  onSubmit(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;

    this. userService.verif(email).subscribe( (a: any) =>{
      Object.keys(a).map(function(key){
        let arr = [];
        arr.push({[key]:a[key]})
        console.log(arr[0]);
        console.log(a[key].role);
        localStorage.setItem('valid', JSON.stringify(a[key].valid));
    });

    
    })


    this.auth.login(email, password).subscribe((res:any)=>{
      this.test=true;
      // console.log(res);
      localStorage.setItem('user', JSON.stringify(res))
      localStorage.setItem('loggedIn', JSON.stringify('loggedIn'))
      localStorage.setItem('token', JSON.stringify(res.token))

      // redirect to dashboard
      // this.router.navigate(['/dashboard']);
    this.valid= JSON.parse(localStorage.getItem('valid') || '[]') || [];
    console.log(this.valid);
      if(this.valid!="Non valid"){
        console.log("qsqdsqdsfdfgfgftgtfyhytjyujuyjds")
      this.router.navigate(['/dashboard'])
      .then(() => {
        window.location.reload();
      });
      this.msg=0;
    }else{
      this.msg=1;
    }
    },

    err=>{
      console.log('asdsqdsdfdgtfgtrhtyhtyhyt');
      console.log(err.error.message);

      if(err.error.message=='bad Creds'){
        this.test=false;
      }
      else{
        this.test=true;
      }

    })


console.log(this.test);
  }

}