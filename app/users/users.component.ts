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
        "name": "Francis"
    },
    {
        "id": 2877,
        "name": "Nakia"
    },
    {
        "id": 2878,
        "name": "Latina"
    }
];
  constructor() { }

  ngOnInit() {
  }

}
