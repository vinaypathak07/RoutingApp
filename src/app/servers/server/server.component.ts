import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute ,Params,Router,Data} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  paramsSubscription:Subscription;

  server : { id : number , name:string, status:string};
  constructor(private serverService : ServersService,private route:ActivatedRoute,private router :Router){
  }

  ngOnInit() {

    // Use Case 1: 
    // this.server = this.serverService.getServer(1);
    // // + sign helps in type casting the string to number
    // const id = +this.route.snapshot.params['id'];
    // console.log(id);
    // this.paramsSubscription = this.route.params.subscribe(
    //   (params:Params) => {
    //       this.server = this.serverService.getServer(+params['id']);
    //   }
    // );

    // Use Case 2:  Using The Resolve Guard ( Resolving Data Asynchronously)
    this.route.data.subscribe(
      (data:Data) =>{ 
        this.server = data['server'];
      }
    );

  }
  ngOnDestroy(){
    // unsubscribe() not working with Resolver(Accessing Data Asynchronously)
    // this.paramsSubscription.unsubscribe();
  }
  // queryParamsHandling: 'preserve' or 'merge'(it will overwrite the old queryParams['allowEdit'])  to preserve the allowEdit value to be preserved  in edit component
  onEdit(){
    this.router.navigate(['edit'],{relativeTo: this.route, queryParamsHandling : 'preserve'});
  }

}
