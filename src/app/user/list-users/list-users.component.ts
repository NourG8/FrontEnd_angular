import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  persons: User[] = [];

  // constructor() { }
  constructor(private personService: UserService) { }

  ngOnInit(): void {
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

