import { Routes, CanActivate} from '@angular/router';
import { HeroesComponent }      from '../components/heroes/heroes.component';
import { EmployeeComponent } from '../components/employee/employee.component';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component'
import { from } from 'rxjs';
import { HeroInfoComponent } from '../components/heroes/hero-info/hero-info.component';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { secureRoute } from './secure-route';
import { AuthGuardService as authGuard } from '../auth/auth-guard.service';
export const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  // { path: 'heroes/:id', component: HeroInfoComponent},
  {
    path:'emp',component:EmployeeComponent
  },
  {path:'',redirectTo:'dash',pathMatch:'full'},

  {path:'login',component:LoginComponent},


  {path:'dash', component:DashboardComponent, children:secureRoute, canActivate: [authGuard] },



  {path:'**',redirectTo:'dash'},



];