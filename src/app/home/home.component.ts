import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthGuardService } from '../auth-guard.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router,private authService:AuthService) { }

  ngOnInit() {
  }

  onLoadServers(id:number){
      //complex calculations
      //Triggering the route programatically but not with the routerLink
      // Passing query params using navigate method
      this.router.navigate(['/servers',id,'edit'],{ queryParams : { allowEdit : '2'} , fragment : 'loading' });
  }

  onLogin(){
    this.authService.login();
  }
  onLogout(){
    this.authService.logout();
  }

}
