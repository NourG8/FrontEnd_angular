import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {Location} from "@angular/common";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  checkbox:boolean = false;
  constructor(private auth:AuthService, private router:Router,     private location:Location,) { }

  ngOnInit(): void {
  }

  logout(){
    // console.log(this.checkbox);
    this.auth.logout(this.checkbox).subscribe((res)=>{
      console.log(res);
      localStorage.removeItem('user');
      localStorage.removeItem('loggedIn');

      this.router.navigate(['/'])
      .then(() => {
        window.location.reload();
      });
   
      this.auth.toggleLogin(false);
      // Redirect
      // this.router.navigate(['/']);
      
      // this.onReload();

    }, (err) =>{
      console.log(err)
    })
}
}