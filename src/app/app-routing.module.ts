import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashBoardComponent} from "./pages/dash-board/dash-board.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {ProgressComponent} from "./pages/progress/progress.component";
import {GraficMainComponent} from "./pages/grafic-main/grafic-main.component";
import {NoPageFoundComponent} from "./pages/no-page-found/no-page-found.component";
import {PagesComponent} from "./pages/pages.component";

const routes : Routes = [
  { path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashBoardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica-main', component: GraficMainComponent },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: '**', component: NoPageFoundComponent}

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ]
})
export class AppRoutingModule { }
