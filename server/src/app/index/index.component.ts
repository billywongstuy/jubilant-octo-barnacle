import { Component, OnInit } from '@angular/core';
import { QsService } from '../qs.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

	founders: any;

  constructor(private http: HttpClient, private service: QsService) { }


  ngOnInit() {
  	this.getFounders();
  }

  getFounders() {
  	this.service.getFounders().subscribe(res => {
  		this.founders = res;
  	});
  }

}
