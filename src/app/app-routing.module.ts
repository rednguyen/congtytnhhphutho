import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TuyendungComponent } from './tuyendung/tuyendung.component';
import { LoginComponent } from './login/login.component';
import { BaogiaComponent } from './baogia/baogia.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "tuyendung",
    component: TuyendungComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "baogia",
    component: BaogiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
