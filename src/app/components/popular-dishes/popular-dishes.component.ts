import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-dishes',
  templateUrl: './popular-dishes.component.html',
  styleUrls: ['./popular-dishes.component.css']
})
export class PopularDishesComponent implements OnInit {
plats:any;
users:any;
connectedUser:any;


  constructor(private router:Router) { }

  ngOnInit() {
    this.plats=JSON.parse(localStorage.getItem("plats") || "[]");
    this.users=JSON.parse(localStorage.getItem("users") || "[]");
    //this.connectedUser=JSON.parse(localStorage.getItem("connectedUser") );
    
  }
update(e){
  this.plats=e;
}




}
