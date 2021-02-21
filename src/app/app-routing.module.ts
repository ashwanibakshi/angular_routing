import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path:'home',
  component:HomeComponent
  },
  {
    path:'about',
    component:AboutusComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }