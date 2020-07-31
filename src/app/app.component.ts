import { Component } from '@angular/core';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Services';
  employees = [];
  constructor(private employeesSer : EmployeesService){ 
  	
  }

  ngOnInit(){
  	this.employees = this.employeesSer.getData();
  }

}
