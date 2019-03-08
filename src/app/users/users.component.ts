import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 users =   [
    {
        "id": 2876,
        "name": "Akshit"
    },
    {
        "id": 2877,
        "name": "Akshat"
    },
    {
        "id": 2878,
        "name": "Vinay"
    }
];
  constructor() { }

  ngOnInit() {
  }

}
