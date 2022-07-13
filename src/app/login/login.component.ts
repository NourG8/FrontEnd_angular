import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  test:any;

  constructor( private router:Router, private auth:AuthService) { }

  ngOnInit(): void {
    
  }
  onSubmit(form:NgForm){
    const email = form.value.email;
    const password = form.value.password;

    // console.log(email, password);
    this.auth.login(email, password).subscribe((res:any)=>{
      // console.log(res);
      localStorage.setItem('user', JSON.stringify(res))
      localStorage.setItem('loggedIn', JSON.stringify('loggedIn'))
      localStorage.setItem('token', JSON.stringify(res.token))

      // redirect to dashboard
      // this.router.navigate(['/dashboard']);
      this.router.navigate(['/dashboard'])
      .then(() => {
        window.location.reload();
      });
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