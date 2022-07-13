import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  persons: User[] = [];
  u:User=new User();
  id!: number;
  User!: User;

  // constructor() { }
  constructor(private personService: UserService   , private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personService.find(this.id).subscribe((data: User)=>{
      this.User = data;
    });

    this.personService.getAll().subscribe((data: User[])=>{
      this.persons = data;
      console.log(this.persons);
    })
  }

  deletePerson(id:any){
    this.personService.delete(id).subscribe(res => {
         this.persons = this.persons.filter(item => item.id !== id);
         console.log('Person deleted successfully!');
    })
  }





}

