import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  plat:any={};
  addPlatForm : FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.addPlatForm=this.formBuilder.group(
      {
        platName : [''],
        price : [''],
        description : ['']
        
      }
    )
  }
  addPlat(){
    console.log(this.plat);

    let plats = JSON.parse(localStorage.getItem("plats") || "[]"); //na5la9 key jdida ,el [] ken tab vide
    let idPlat= JSON.parse(localStorage.getItem("idPlat") || "1"); //getili lkey sinn atini 1 ke nma famech nhadharha lel plat eljey

    this.plat.id= idPlat;
    let connectedUser=JSON.parse(localStorage.getItem("connectedUser"));//obj mouch tab donc ma n9olouch ou || donc ken fama ya3tih sinn null 
    this.plat.idChef = connectedUser.id;
    
    plats.push(this.plat);

    localStorage.setItem("plats", JSON.stringify(plats)); 
    localStorage.setItem("idPlat", idPlat + 1);
  }

}
