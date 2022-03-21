import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  users :any={};
  plats:any={};
  //plat:any;
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
    
    //this.users=JSON.parse(localStorage.getItem("users") || "[]");
    this.userService.getUsers().subscribe(
      (data)=>{
        console.log(data.users);
      }
    )
    this.plats=JSON.parse(localStorage.getItem("plats") || "[]");
    
  }
  deleteUser(id){
    // let pos;
    // for (let i=0;i<this.users.length;i++)
    // {
    //   if (this.users[i].id==id){
    //     pos=i;
    //   }
    // }
    // this.users.splice(pos,1);
    // localStorage.setItem("users",JSON.stringify(this.users));
    this.userService.deleteUser(id).subscribe(
      (data)=>{
        console.log(data.message);
      }
    )
  }
  displayUser(id){
     // for (let i = 0; i < this.users.length; i++) {
    //   if (this.users[i].id ==id) {
    //     user =this.users[i];
        
    //   }
      
    // }
    this.router.navigate([`displayUser/${id}`]);
  }
  editUser(id){
    let user;
    for (let i =0;i<this.users.length;i++){
    if (this.users[i].id==id){
      user= this.users[i];
    }
  }
  if(user.role=="admin" || user.role=="client"){
    this.router.navigate([`editUser/${id}`]);

  }else {
    this.router.navigate([`editChef/${id}`]);

  }
  
  
}
getColor(role){
  switch(role){
    case 'admin':
      return 'blue'
      break;
    case 'chef':
      return 'green'
      break;
    case 'client' :
      return 'red'
      break;
    default:
      break;

  }
}


}
