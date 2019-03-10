import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { ErrorPageComponent } from './error-page/error-page.component';


import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { AuthService  } from './auth.service';
import { ServersService } from './servers/servers.service';
import { ServerResolver } from './servers/server/server-resolver.service';

//localhost:4200/users
const appRoutes : Routes = [
  {path : '' ,component : HomeComponent },
  
  {path : 'servers' ,
  // canActivate : [AuthGuardService],
  canActivateChild : [AuthGuardService],
  component : ServersComponent,children:[ 
    {path : ':id' , component : ServerComponent ,resolve :{server : ServerResolver } },  // resolve helps us to dynamically resolve the passed data into our component
    {path : ':id/edit' ,component : EditServerComponent ,canDeactivate:[CanDeactivateGuard]}
    // {path : ':id/edit' ,component : EditServerComponent}
  ]},
  
  {path : 'users' ,component : UsersComponent ,children:[
  {path : ':id/:name' ,component : UserComponent}  
  ]},
  {path: 'edit',component : EditServerComponent },
  {path: 'not-found',component :ErrorPageComponent,data:{ message :' Page Not Found !'}}, // Passing static data to the currently activated route.See in ErrorPageComponent , how to acces this static data.
  {path:'**', redirectTo:'/not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [ServersService,AuthService ,AuthGuardService,CanDeactivateGuard,ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
