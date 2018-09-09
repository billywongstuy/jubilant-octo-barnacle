import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QsService } from '../qs.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

	founder: any;
	angForm: FormGroup;
	title = 'Edit Profile';

  constructor(private route: ActivatedRoute, private router: Router, private service: QsService, private fb: FormBuilder) {
  this.createForm();
   }

   createForm() {
   	this.angForm = this.fb.group({
   		name: ['', Validators.required ],
   		email: ['', Validators.required ]
   	});
   }

   updateFounder(name, email) {
   	this.route.params.subscribe(params => {
   		this.service.updateFounder(name, email, params['id']);
   		this.router.navigate(['index']);
   	});
   }

   deleteFounder(id) {
   	this.service.deleteFounder(id).subscribe(res => {
   		console.log('Deleted');
   	});
   }
   
  ngOnInit() {
  	this.route.params.subscribe(params => {
  		this.founder = this.service.editFounder(params['id'])
  		.subscribe(res => {
  			this.founder = res;
  		});
  	});
  }

}
