import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {
@Input() childPlat :any;
//connectedUser=any[];


//declar de @output
@Output() newPlats = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  //  this.connectedUser=JSON.parse(localStorage.getItem("connectedUser") );

  }
  deletPlat(id){
    let plats=JSON.parse(localStorage.getItem("plats") || "[]");
    let pos;
    for (let i=0;i<plats.length;i++)
    {
      if(plats[i].id==id){
        pos=i;
      }
    }
    plats.splice(pos,1);
    localStorage.setItem("plats",JSON.stringify(plats));
    //declenchement de l event
    this.newPlats.emit(plats);
  }

}
