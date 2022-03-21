import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { MustMatch } from '../confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  constructor(private formBuilder : FormBuilder,private userService:UserService) { }

  ngOnInit() {
    this.signupForm=this.formBuilder.group(
      {
        firstName : ['',[Validators.required,Validators.minLength(3)]],
        lastName : ['',[Validators.required,Validators.minLength(5)]],
        email : ['',[Validators.required,Validators.email]],
        password : ['',[Validators.required,Validators.minLength(8)]],
        confirmPassword : [''],
        tel : ['',[Validators.required,Validators.minLength(8),Validators.maxLength(13)]],
      },
      {
        validator : MustMatch('password','confirmPassword')
      }
    )
  }
  signup(f:any){
    // console.log(f);
    // let users = JSON.parse(localStorage.getItem("users") || "[]");
    // let idUser= JSON.parse(localStorage.getItem("idUser") || "1");

    // f.id= idUser;
    // f.role= "client"; // demarche bech fel localstorage ykoun 3anna des chefs ,des clients des admin hassb lrole

    // users.push(f);

    // localStorage.setItem("users", JSON.stringify(users)); //el key eli njib menha nraja3 fiha 
    // localStorage.setItem("idUser", idUser + 1); //najm nahiha json.strigify 5tr andi hne nuber
  this.userService.createUser(f).subscribe(
    (data)=>{console.log(data);}
  )
  
  }

}
