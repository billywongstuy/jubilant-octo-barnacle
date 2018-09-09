import { Routes } from '@angular/router';
import { CreateProfileComponent } from 'src/app/create-profile/create-profile.component';
import { CreateCompanyComponent } from 'src/app/create-company/create-company.component';
import { EditProfileComponent } from 'src/app/edit-profile/edit-profile.component';
import { EditCompanyComponent } from 'src/app/edit-company/edit-company.component';


export const appRoutes: Routes = [
{ path: 'create-profile', component: CreateProfileComponent },
{ path: 'edit-profile/:id', component: EditProfileComponent }, 
{ path: 'create-company', component: CreateCompanyComponent },
{ path: 'edit-company/:id', component: EditCompanyComponent },


];

