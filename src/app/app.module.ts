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

import { ServersService } from './servers/servers.service';

//localhost:4200/users
const appRoutes : Routes = [
  {path : '' ,component : HomeComponent },
  
  {path : 'servers' ,component : ServersComponent,children:[ 
    {path : ':id' , component : ServerComponent },
    {path : ':id/edit' ,component : EditServerComponent }
  ]},
  
  {path : 'users' ,component : UsersComponent ,children:[
  {path : ':id/:name' ,component : UserComponent}  
  ]},
  {path: 'edit',component : EditServerComponent }
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
