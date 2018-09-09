import { Component, OnInit } from '@angular/core';
import { QsService } from '../qs.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {

	title = 'Create profile here';
	angForm: FormGroup;
  constructor(private QsService: QsService, private fb: FormBuilder) { 
  	this.createForm();
  }

  createForm() {
  	this.angForm = this.fb.group({
  		name: ['', Validators.required],
  		email: ['', Validators.required]
  	});
  }

  addFounder(name, email){
  	this.QsService.addFounder(name, email);
  }
  
  ngOnInit() {
  }

}
