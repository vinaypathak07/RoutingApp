import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
//localhost:4200/users
const routes: Routes = [
  {path : '' ,component : HomeComponent },
  
  {path : 'servers' ,
  // Guarding the routes and child routes . See the AuthGuardService 
  // canActivate:[AuthGuardService] , canActivateChild guard will be applied to all its child routes
  // canActivateChild:[AuthGuardService],
  component : ServersComponent,
  children:[ 
    {path : ':id' , component : ServerComponent },
    {path : ':id/edit' ,component : EditServerComponent , canDeactivate:[CanDeactivateGuard] }
  ]},
  
  {path : 'users' ,component : UsersComponent ,children:[
  {path : ':id/:name' ,component : UserComponent}  
  ]},
  
  {path: 'edit',component : EditServerComponent },
  {path: 'not-found' ,component : PageNotFoundComponent},
  //Using wild card routes.Note that it is last route as it matches all the not found routes
  {path: '**' , redirectTo:'/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
