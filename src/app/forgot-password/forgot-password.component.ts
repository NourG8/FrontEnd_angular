import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  error={
    email:null
  };
  message:any;
  msg:any;

  wait:boolean = false;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.wait = true;
    const email = form.value.email;
    this.auth.forgot(email).subscribe((res:any)=>{
      this.message = res.message;
      this.wait = false;
      console.log(this.message);

      if(this.message=="Email Does not exists."){
        this.msg=false;
      }
      else{
        this.msg=true;
      }

    }, (err)=>{
     this.error = err.error.errors;
     this.wait = false;
    })
  }


}
