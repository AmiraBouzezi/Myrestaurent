import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
user :any={};
id:any;
users:any;
title:any;
adduserForm : FormGroup;
  constructor(private formBuilder :FormBuilder, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    this.users = JSON.parse(localStorage.getItem("users") || "[]");
    if(this.id){
      //edit
    this.title="Edit user"
    for(let i=0;i<this.users.length;i++)
    {
       if (this.users[i].id==this.id){
         this.user=this.users[i]
       }
        
    }
  }
    else {
      //add
      this.title="Add Chef"
    }
  
    this.adduserForm = this.formBuilder.group(
      {
        firstName : [''],
        lastName : [''],
        email : [''],
        password : [''],
        speciality : [''],
        experience : [''],
        dateOfBirth : [''],
        tel : ['']
      }
    )
  
  
  }

  addChef(){
    if(this.id){
      //edit
    //this.title="Edit user"
    for(let i=0;i<this.users.length;i++)
    {
       if (this.users[i].id==this.id){
         this.users[i] = this.user; //user yhez w yjib mel html ll ts wel 3aks
       }
       localStorage.setItem("users", JSON.stringify(this.users)); //el jdid tzidou ll tab 
    }

    }
    else {
    console.log(this.user);

    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let iduser= JSON.parse(localStorage.getItem("iduser") || "1");

    this.user.id= iduser;
    this.user.role= "chef";

    users.push(this.user);

    localStorage.setItem("users", JSON.stringify(users)); //el key eli njib menha nraja3 fiha 
    localStorage.setItem("iduser", iduser + 1); //najm nahiha json.strigify 5tr andi hne nuber
  }

}
}
