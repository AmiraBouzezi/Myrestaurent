import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title:String; //any 
  source:String;


  constructor() { }

  ngOnInit() {
    this.title="Hello";
    this.source ="assets/img/logo.png";
  }
  test(){
    alert("test");
  }

}
