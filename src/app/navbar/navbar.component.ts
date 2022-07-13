import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn:boolean = false;
  test:any;
  user:any;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {

    // Check status
    this.user= JSON.parse(localStorage.getItem('user') || '[]') || [];
              //  JSON.parse(localStorage.getItem('IdAgriculteur') || '[]') || [])
    console.log(this.user.name);


    this.test= JSON.parse(localStorage.getItem('loggedIn') || '[]') || [];
    console.log("nourrrrrrrr");
    console.log(this.test)
    console.log(JSON.parse(localStorage.getItem('loggedIn') || '[]') || [])
    this.auth.status().subscribe((res) => {
      this.loggedIn = res;

      console.log(res);
      // console.log('navbar:' + this.loggedIn);
    }, (err) => {
      console.log(err);
    })
  }

}