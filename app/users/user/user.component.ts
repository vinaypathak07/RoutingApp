import { Component, OnInit , OnDestroy } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit , OnDestroy {

   user :{ id:number , name :string};
   paramsSubscription : Subscription;
  constructor(private activeRoute:ActivatedRoute ) { }

  ngOnInit() {
     // retrieving query params // If The current route  is reloaded with different query params then the query params are not updated in this approach
      this.user = {
          id: this.activeRoute.snapshot.params['id'],
          name : this.activeRoute.snapshot.params['name']
      }

      // Another way to retrieve query params // Here if the current route  is reloaded with different query params then the query params are  updated in this approach
      this.paramsSubscription = this.activeRoute.params
          .subscribe(
              (params:Params) => {
                  this.user.id = params['id'];
                  this.user.name = params['name'];
              }
              );
  }
  ngOnDestroy(){
          this.paramsSubscription.unsubscribe();
  }

}
