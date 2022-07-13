import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private auth:AuthService) {}

  user:any;
  ngOnInit(): void {
    // Check status
    this.user= JSON.parse(localStorage.getItem('user') || '[]') || [];
              //  JSON.parse(localStorage.getItem('IdAgriculteur') || '[]') || [])
    console.log(this.user.name);

  }
}