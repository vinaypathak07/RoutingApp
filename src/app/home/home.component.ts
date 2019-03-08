import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router,private authService : AuthService,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  onLoadServers(id:number){
      //complex calculations
      //Triggering the route programatically but not with the routerLink
      // Passing query params using navigate method
      this.router.navigate(['/servers',id,'edit'],{ queryParams : { allowEdit : '2'} , fragment : 'loading' });
  }

  logIn(){
    this.authService.login();
    this.router.navigate(['/servers'],{relativeTo:this.route});
  }
  logOut(){
    this.authService.logout();
  }

}
