import { Component, OnInit } from '@angular/core';
import { QsService } from '../qs.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	title = 'login';
	angForm: FormGroup;
  constructor(private service: QsService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      email: ['', Validators.required],
      password: String
    });
  }

   login(email, password) {
   	this.service.login(email, password);
   }

  ngOnInit() {
  }

}
