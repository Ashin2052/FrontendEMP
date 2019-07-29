import {  Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { AdminComponent } from '../components/dashboard/admin/admin.component';
import { NotadminComponent } from '../components/dashboard/notadmin/notadmin.component';
import { LeaveListComponent } from '../components/leave-list/leave-list.component';
import { UpdateComponent } from '../components/update/update.component';
import { DetailsComponentComponent } from '../components/details-component/details-component.component';
import {  RoleGuardService as RoleGuard } from '../auth/role-guard.service';
import { from } from 'rxjs';
import { RevisionComponent } from '../components/revision/revision.component';
export const secureRoute :Routes=[
    {path:'dash',component:DashboardComponent},
    {path:'admin',component:AdminComponent,canActivate:[RoleGuard],data: {onlyForAdmin:true}},
    {path:"updateuser",component:UpdateComponent},
    {path:'notadmin',component:NotadminComponent,canActivate:[RoleGuard],data: {onlyForAdmin:false}},    
    {path:'empLeaveList',component:LeaveListComponent,canActivate:[RoleGuard],data: {onlyForAdmin:true}},
    
    {path:'details/:id',component:DetailsComponentComponent},
   {path:'revision',component:RevisionComponent}
]