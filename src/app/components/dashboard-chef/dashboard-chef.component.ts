import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-chef',
  templateUrl: './dashboard-chef.component.html',
  styleUrls: ['./dashboard-chef.component.css']
})
export class DashboardChefComponent implements OnInit {
  plats :any;
  connectedUser:any;
  myPlats:any=[];
  constructor() { }

  ngOnInit() {
    this.plats=JSON.parse(localStorage.getItem("plats") || "[]");
    this.connectedUser=JSON.parse(localStorage.getItem("connectedUser") );
    for (let i =0;i<this.plats.length;i++)
    {
      if (this.plats[i].idChef==this.connectedUser.id){
        this.myPlats.push(this.plats[i])
      }
    }
    
  }

}
