import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FruitsComponent } from './fruits/fruits.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoffComponent } from './logoff/logoff.component';
import { FcartComponent } from './fcart/fcart.component';
import { VcartComponent } from './vcart/vcart.component';

const routes: Routes = [
  {
    path:'login', component:LoginComponent, pathMatch: 'full',
  },

  {
    path:'', component: LoginComponent, 
  },

  {
    path:'home', component:HomeComponent, 
  },

  {
    path:'fruits', component:FruitsComponent, 
  },

  {
    path:'vegetables', component: VegetablesComponent , 
  },
  
  {
    path:'navbar', component:NavbarComponent, 
  },
  {
    path:'logoff',component:LogoffComponent,
  },
  {
   path:'fcart',component:FcartComponent, 
  },
  {
    path:'vcart',component:VcartComponent, 
   },
 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
