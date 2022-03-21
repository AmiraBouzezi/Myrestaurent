import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardChefComponent } from './components/dashboard-chef/dashboard-chef.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PopularDishesComponent } from './components/popular-dishes/popular-dishes.component';
import { SignupComponent } from './components/signup/signup.component';
import { TestComponent } from './components/test/test.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'test',component:TestComponent},
  {path:'addAdmin',component:AddAdminComponent},
  {path:'signup',component:SignupComponent},
  {path:'addChef',component:AddChefComponent},
  {path:'dashboardAdmin',component:DashboardAdminComponent},
  {path:'dashboardChef',component:DashboardChefComponent},
  {path:'addPlat',component:AddPlatComponent},
  //path dynamique
  {path:'displayUser/:id',component:DisplayUserComponent},
  {path:'editUser/:id',component:AddAdminComponent},
  {path:'editChef/:id',component:AddChefComponent},
  {path:'myplats/:id',component:PopularDishesComponent},
  {path:'allPlats/:id',component:PopularDishesComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
