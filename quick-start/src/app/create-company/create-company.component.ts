import { Component, OnInit } from '@angular/core';
import { QsService } from '../qs.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

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

  addCompany(name, founder, industry, funding_series, amount_raised, current_val){
  	this.QsService.addCompany(name, founder, industry, funding_series, amount_raised, current_val);
  }
  
  ngOnInit() {
  }
}
