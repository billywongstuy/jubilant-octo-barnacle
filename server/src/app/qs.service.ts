import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from "rxjs/";
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class QsService {

	result: any;
  constructor(private http: HttpClient) { }

  addFounder(name, email) {
  	const uri = 'http://localhost:4000/founder/add';
  	const obj = {
  		name: name,
  		email: email
  	};
  	this.http.post(uri, obj).subscribe(res => console.log('Done'));
   }

   getFounders() {
   	const uri = 'http://localhost:4000/founder/add';
   	return this.http.get(uri).map(res => { return res; });
   }

   editFounder(id) {
   	const uri = 'http://localhost:4000/founders/edit-profile' + id;
   	return this.http.get(uri).map(res => { return res; });
   }

   updateFounder(name, email, id) {
     const uri = 'http://localhost:4000/coins/update/' + id;

     const obj = {
       name: name,
       email: email
     };
     this.http.post(uri, obj).subscribe(res => console.log('Done'));
   }

   deleteFounder(id) {
     const uri = 'http://localhost:4000/founders/delete/' + id;

     return this.http.get(uri).map(res => { return res });
   }
}
