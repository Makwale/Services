import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }
  getData(){
  	return [{id : 1, name : "Emmanuel", salary : 2000},

  		{id : 2, name : "Evidence", salary : 6000},

  		{id : 3, name : "Thabiso", salary : 6500},

  		{id : 4, name : "Ishmael", salary : 20000},

  		{id : 5, name : "Derick",  salary : 4500},
  		{id : 5, name : "Derick",  salary : 4500},
  		{id : 5, name : "Derick",  salary : 4500},
  		{id : 5, name : "Derick",  salary : 4500},
  		{id : 5, name : "Derick",  salary : 4500}];
  }
}
