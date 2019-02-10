import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/* RoutingModule */
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/* Services */
import { ServersService } from './servers/servers.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServersService,AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
