import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../environments/environment.prod';
import { Observable } from "rxjs/";
import 'rxjs/add/operator/map';
import { Stitch } from 'mongodb-stitch-browser-sdk';
import { authUser } from 'expressRoutes/mongo-auth.js';


@Injectable({
  providedIn: 'root'
})
export class QsService {

	result: any;
  constructor(private http: HttpClient) { }

  addFounder(name, email, password) {
  	const uri = environment.create;
  	const obj = '?email='+ email + '&pass=' + password +'&secret=' + environment.secret;

    const emailConf = this.confirmEmail(email, password);
  	this.http.post(uri, obj).subscribe(res => console.log('Done'));
   }

   confirmEmail(email, password) {
     let newEmail = authUser(email, password);
     newEmail.getEmail();
   }

   login(email, password) {
     const uri = environment.login;
     const obj = '?email=' + email + '&pass=' + password + '&secret=' + environment.secret;
     let login = authUser();
     const user = environment.url + '/index'
     login.login();

     return user;
   }

   getFounders() {
    const uri = environment.url +'founder/';
   	return this.http.get(uri).map(res => { return res; });
   }

   editFounder(id) {
   	const uri = environment.url + '/founder/edit-profile' + id;
   	return this.http.get(uri).map(res => { return res; });
   }

   updateFounder(name, email, id) {
     const uri = environment.url + '/founder/update/' + id;

     const obj = {
       name: name,
       email: email
     };
     this.http.post(uri, obj).subscribe(res => console.log('Done'));
   }

   deleteFounder(id) {
     const uri = environment.url + '/founders/delete/' + id;

     return this.http.get(uri).map(res => { return res });
   }

   addCompany(name, founder, industry, funding_series, amount_raised, current_val) {
     const uri = environment.url +'company/add';

     const obj = {
      name: name,
      founder: founder,
      industry: industry,
      funding_series: funding_series,
      amount_raised: amount_raised,
      current_val: current_val,
    };
    this.http.post(uri, obj).subscribe(res => console.log('Done'));
   }

   getCompanies() {
     const uri = environment.url +'company/';
     return this.http.get(uri).map(res => { return res; });
   }

   deleteCompany(id) {
     const uri = environment.url + '/company/delete/' + id;

     return this.http.get(uri).map(res => { return res });
   }
}
