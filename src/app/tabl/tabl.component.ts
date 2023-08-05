import { Component, OnInit, ViewChild } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';


export interface PeriodicElement {
  id: number;
  name: string;
  
  width: number;
  height: number;
  tickness: number;
  status: string;
  statusjob:string;
  active: string;
  createdBy:string;
  code:string;
  price:string;
  image:string;
  
}

export const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', width: 1.0079, height: 1.0079,tickness: 1.0079, status: 'available',statusjob:'hold', active: 'active',createdBy: 'Hydrogen',code: '1243',price: '$/.500.00',image:'assets/images/foto01.jpeg'},
  {id: 2, name: 'Helium', width: 4.0026, height: 1.0079, tickness: 1.0079, status: 'Hydrogen',statusjob:'hold', active: 'active',createdBy: 'Hydrogen',code: '4312',price: '23',image:'assets/images/im.png'},
  {id: 3, name: 'Lithium', width: 6.941,height: 1.0079,tickness: 1.0079, status: 'Hydrogen',statusjob:'hold', active: 'active' ,createdBy: 'Hydrogen',code: '2313',price: '12',image:'assets/images/hydrogen.png'},
  {id: 4, name: 'Beryllium', width: 9.0122, height: 1.0079,tickness: 1.0079, status: 'Hydrogen',statusjob:'hold', active: 'active' ,createdBy: 'Hydrogen',code: '2333',price: '43',image:'assets/images/hydrogen.png'},
  {id: 5, name: 'Boron', width: 10.811, height: 1.0079, tickness: 1.0079, status: 'Hydrogen',statusjob:'hold', active: 'active' ,createdBy: 'Hydrogen',code: '1111',price: '54',image:'assets/images/hydrogen.png'},
  {id: 6, name: 'Carbon', width: 12.0107, height: 1.0079, tickness: 1.0079, status: 'Hydrogen',statusjob:'hold', active: 'active', createdBy: 'Hydrogen',code: '2233',price: '55',image:'assets/images/hydrogen.png'},
  {id: 7, name: 'Nitrogen', width: 14.0067, height: 1.0079,tickness: 1.0079, status: 'Hydrogen',statusjob:'hold', active: 'active', createdBy: 'Hydrogen',code: '3344',price: '65',image:'assets/images/hydrogen.png'},
  {id: 8, name: 'Oxygen', width: 15.9994,height: 1.0079, tickness: 1.0079, status: 'Hydrogen',statusjob:'hold',active: 'active' ,createdBy: 'Hydrogen',code: '1212',price: '76',image:'assets/images/hydrogen.png'},
  {id: 9, name: 'Fluorine', width: 18.9984, height: 1.0079,tickness: 1.0079, status: 'Hydrogen',statusjob:'hold', active: 'active', createdBy: 'Hydrogen',code: '2121',price: '87',image:'assets/images/hydrogen.png'},
  {id: 10, name: 'Neon', width: 20.1797, height: 1.0079,tickness: 1.0079, status: 'Hydrogen',statusjob:'hold', active: 'active' ,createdBy: 'Hydrogen',code: '4554',price: '45',image:'assets/images/hydrogen.png'},
  {id: 11, name: 'Lithium', width: 6.941,height: 1.0079,tickness: 1.0079, status: 'Hydrogen',statusjob:'hold', active: 'active' ,createdBy: 'Hydrogen',code: '6777',price: '23',image:'assets/images/hydrogen.png'},
  {id: 12, name: 'Beryllium', width: 9.0122, height: 1.0079,tickness: 1.0079, status: 'Hydrogen',statusjob:'hold', active: 'active' ,createdBy: 'Hydrogen',code: '8777',price: '45',image:'assets/images/hydrogen.png'},
  {id: 13, name: 'Boron', width: 10.811, height: 1.0079, tickness: 1.0079, status: 'Hydrogen',statusjob:'hold', active: 'active' ,createdBy: 'Hydrogen',code: '8888',price: '12',image:'assets/images/hydrogen.png'},
  {id: 14, name: 'Carbon', width: 12.0107, height: 1.0079, tickness: 1.0079, status: 'Hydrogen',statusjob:'hold', active: 'active', createdBy: 'Hydrogen',code: '9889',price: '11',image:'assets/images/hydrogen.png'},
  {id: 15, name: 'Nitrogen', width: 14.0067, height: 1.0079,tickness: 1.0079, status: 'Hydrogen',statusjob:'hold', active: 'active', createdBy: 'Hydrogen',code: '5665',price: '67',image:'assets/images/hydrogen.png'},
  {id: 16, name: 'Oxygen', width: 15.9994,height: 1.0079, tickness: 1.0079, status: 'Hydrogen',statusjob:'hold',active: 'active' ,createdBy: 'Hydrogen',code: '455445',price: '45',image:'assets/images/hydrogen.png'},
  {id: 17, name: 'Fluorine', width: 18.9984, height: 1.0079,tickness: 1.0079, status: 'Hydrogen',statusjob:'hold', active: 'active', createdBy: 'Hydrogen',code: '5445',price: '67',image:'assets/images/hydrogen.png'},
  {id: 18, name: 'Neon', width: 20.1797, height: 1.0079,tickness: 1.0079, status: 'Hydrogen',statusjob:'hold', active: 'active' ,createdBy: 'Hydrogen',code: '6776',price: '55',image:'assets/images/im.png'},
];
@Component({
  selector: 'app-tabl', 
  templateUrl: './tabl.component.html',
  styleUrls: ['./tabl.component.css']
})
export class TablComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'width', 'height','tickness','status','active','createdBy','code','price','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private sanitizer: DomSanitizer) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit(): void {
    
  }
  
}
