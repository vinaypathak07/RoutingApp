import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable ({
    providedIn:'root'
})

export class ServersService{
    constructor(){}
    private servers = [
    {
        id:1,
        name: 'ProductionServer',
        status : 'online'
    },
    {
        id:2,
        name:'Testserver',
        status:'offline'
    },
    {
        id:3,
        name:'Devserver',
        status:'offline'
    }
    ];

    getServers(){
        return this.servers;
    }

    //url:string ='http://www.filltext.com/?rows=5&pretty=true&id={index}&name={firstName}&status={firstName}';

    getServer(id : number){
        const server = this.servers.find(
            (s) => {
                return s.id === id;
            }
            );
        return server ;
    }

    updateServer(id : number , serverInfo : {name : string,status : string }){
        const server = this.servers.find(
            (s) => {
                return s.id === id;
            }
            );
        if (server) {
            server.name = serverInfo.name;
            server.status = serverInfo.status;
        }
    }

}
