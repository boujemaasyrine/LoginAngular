import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {LayoutComponent} from "./pages/layout/layout.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {authGuard} from "./services/auth.guard";
import {SignupComponent} from "./pages/signup/signup/signup.component";

export const routes: Routes = [

    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    { path: 'signup', component: SignupComponent },
    {path:'',component:LayoutComponent,children:[
            {
                path:'dashboard',
                component:DashboardComponent,
                canActivate: [authGuard]
            }
        ]},

];
