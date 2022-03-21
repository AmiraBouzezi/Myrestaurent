import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
user:any={};
addAdminForm : FormGroup;
id:any;
users:any;
title:any;
  constructor(private formBuilder : FormBuilder ,private activatedRoute:ActivatedRoute,private userService:UserService) { }

  ngOnInit( ) {
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
   // this.users = JSON.parse(localStorage.getItem("users") || "[]");
    if(this.id){
      //edit
    this.title="Edit User"
    // for(let i=0;i<this.users.length;i++)
    // {
    //    if (this.users[i].id==this.id){
    //      this.user=this.users[i]
    //    }
        
    // }
    this.userService.getUser(this.id).subscribe(
      (data)=>{
        console.log(data.user);
        this.user=data.user;
      }
    )
  }
    else {
      //add
      this.title="Add Admin"
    }
    
  
    this.addAdminForm = this.formBuilder.group(
      {
        firstName : [''],
        lastName : [''],
        email : [''],
        password : [''],
        tel : ['']
      }
    )
    
    
  }
  addOrEditUser(){
    
    if(this.id){
      //edit
    //this.title="Edit User"
    // for(let i=0;i<this.users.length;i++)
    // {
    //    if (this.users[i].id==this.id){
    //      this.users[i] = this.user; //user yhez w yjib mel html ll ts wel 3aks
    //    }
    //    localStorage.setItem("users", JSON.stringify(this.users)); //el jdid tzidou ll tab 
    // }
   this.userService.updateUser(this.user).subscribe(
     (data)=>{
       console.log(data.message);
     }
   )
    }
    else {
      //add
      //this.title="Add Admin"
    //   console.log(this.user);

    // let users = JSON.parse(localStorage.getItem("users") || "[]");
    // let idUser= JSON.parse(localStorage.getItem("idUser") || "1");

    // this.user.id= idUser;
    // this.user.role= "admin";

    // users.push(this.user);

    // localStorage.setItem("users", JSON.stringify(this.users)); //el key eli njib menha nraja3 fiha 
    // localStorage.setItem("idUser", idUser + 1); //najm nahiha json.strigify 5tr andi hne nuber
    this.userService.createUser(this.user).subscribe(
      (data)=>{
        console.log(data.message);
      }
    )
  
    }
  
  }

}

