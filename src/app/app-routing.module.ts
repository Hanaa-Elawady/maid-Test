import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { NOTFOUNDComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path:'' ,
  component:LayoutComponent , children:[
  {path:'' , redirectTo:"home" , pathMatch:'full'},
  {path:'home' , component:HomeComponent,title:'Home'},
  {path:'details/:id' , component:UserDetailsComponent ,title:'User'},
  {path:'**', component:NOTFOUNDComponent ,title:'Not Found'}


]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
