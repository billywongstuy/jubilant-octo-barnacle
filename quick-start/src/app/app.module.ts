import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { IndexComponent } from './index/index.component';

// ROUTES 
import { appRoutes } from './routerConfig';


// SERVICES 
import { QsService } from './qs.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateProfileComponent,
    EditProfileComponent,
    CreateCompanyComponent,
    EditCompanyComponent,
    HomeComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [QsService],
  bootstrap: [AppComponent]
})


export class AppModule { }
