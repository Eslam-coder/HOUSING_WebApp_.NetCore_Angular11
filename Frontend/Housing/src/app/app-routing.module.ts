import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboradComponent } from './Dashboard/dashborad/dashborad.component';
import { HomeComponent } from './Home/home/home.component';
import { PageNotFoundComponent } from './PageNotFound/page-not-found/page-not-found.component';
import { AddingNewPropertyComponent } from './Property/AddingNewProperty/adding-new-property/adding-new-property.component';
import { CreatePropertyComponent } from './Property/CreateProperty/create-property/create-property.component';
import { PropertyByIdComponent } from './Property/PropertyById/property-by-id/property-by-id.component';
import { PropertyDetailsComponent } from './Property/PropertyDetails/property-details/property-details.component';
import { PropertyListComponent } from './Property/PropertyList/property-list/property-list.component';
import { LoginComponent } from './User/Login/login/login.component';
import { RegisterComponent } from './User/Register/register/register.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Property-Details/:id',component:PropertyDetailsComponent},
  {path:'PropertyList',component:PropertyListComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'AddingNewProperty',component:AddingNewPropertyComponent},
  {path:'AdminPanelDashboard',component:DashboradComponent},
  {path:'CreateProperty',component:CreatePropertyComponent},
  {path:'House/:id',component:PropertyByIdComponent},
  {path:'**',component:PageNotFoundComponent},
  {path:'',redirectTo:'Home',pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
