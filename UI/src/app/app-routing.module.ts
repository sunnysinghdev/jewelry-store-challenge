import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimateComponent } from './estimate/estimate.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "estimate",
    component: EstimateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
