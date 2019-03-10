import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Data } from '@angular/router';
@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage : string ;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    // Use Case 1: Getting the data synchronously -- here the changes will not be reflected if the data changes dynamically at runtime
    // this.errorMessage = this.route.snapshot.data['message'];

    //Use Case 2: Geeting the data asynchronously -- here the changes will be reflected if the data changes dynamically at runtime.
    this.route.data.subscribe(
      (data:Data) =>{
        this.errorMessage = data['message'];
      }
    )
  }

}
