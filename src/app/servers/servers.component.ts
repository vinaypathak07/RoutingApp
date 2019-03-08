import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers : { id : number, name:string, status:string }[] = [];

  constructor(private serverService : ServersService,private router : Router , private route : ActivatedRoute) {
   }

  ngOnInit() {
      this.servers = this.serverService.getServers();
  }
  onReload(){
       //relative to the current ActivatedRoute it should navigate
      this.router.navigate(['servers'],{relativeTo:this.route});
  }
}
