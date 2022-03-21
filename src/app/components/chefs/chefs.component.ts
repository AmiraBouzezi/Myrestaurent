import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
  users:any;

  constructor() { }

  ngOnInit() {
    this.users=JSON.parse(localStorage.getItem("users") || "[]")
  }

}
