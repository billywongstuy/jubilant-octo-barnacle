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

// ROUTES 
import { appRoutes } from './routerConfig';


// SERVICES 
import { QsService } from './qs.service';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateProfileComponent,
    EditProfileComponent,
    CreateCompanyComponent,
    EditCompanyComponent,
    IndexComponent
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
