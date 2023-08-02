import { Component, ViewChild } from '@angular/core';
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
  active: string;
  createdBy:string;
  code:string;
  price:string;
  image:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', width: 1.0079, height: 1.0079,tickness: 1.0079, status: 'Hydrogen', active: 'Hydrogen',createdBy: 'Hydrogen',code: 'Hydrogen',price: 'Hydrogen',image:'assets/images/hydrogen.png'},
  {id: 2, name: 'Helium', width: 4.0026, height: 1.0079, tickness: 1.0079, status: 'Hydrogen', active: 'Hydrogen',createdBy: 'Hydrogen',code: 'Hydrogen',price: 'Hydrogen',image:'assets/images/hydrogen.png'},
  {id: 3, name: 'Lithium', width: 6.941,height: 1.0079,tickness: 1.0079, status: 'Hydrogen', active: 'Hydrogen' ,createdBy: 'Hydrogen',code: 'Hydrogen',price: 'Hydrogen',image:'assets/images/hydrogen.png'},
  {id: 4, name: 'Beryllium', width: 9.0122, height: 1.0079,tickness: 1.0079, status: 'Hydrogen', active: 'Hydrogen' ,createdBy: 'Hydrogen',code: 'Hydrogen',price: 'Hydrogen',image:'assets/images/hydrogen.png'},
  {id: 5, name: 'Boron', width: 10.811, height: 1.0079, tickness: 1.0079, status: 'Hydrogen', active: 'Hydrogen' ,createdBy: 'Hydrogen',code: 'Hydrogen',price: 'Hydrogen',image:'assets/images/hydrogen.png'},
  {id: 6, name: 'Carbon', width: 12.0107, height: 1.0079, tickness: 1.0079, status: 'Hydrogen', active: 'Hydrogen', createdBy: 'Hydrogen',code: 'Hydrogen',price: 'Hydrogen',image:'assets/images/hydrogen.png'},
  {id: 7, name: 'Nitrogen', width: 14.0067, height: 1.0079,tickness: 1.0079, status: 'Hydrogen', active: 'Hydrogen', createdBy: 'Hydrogen',code: 'Hydrogen',price: 'Hydrogen',image:'assets/images/hydrogen.png'},
  {id: 8, name: 'Oxygen', width: 15.9994,height: 1.0079, tickness: 1.0079, status: 'Hydrogen',active: 'Hydrogen' ,createdBy: 'Hydrogen',code: 'Hydrogen',price: 'Hydrogen',image:'assets/images/hydrogen.png'},
  {id: 9, name: 'Fluorine', width: 18.9984, height: 1.0079,tickness: 1.0079, status: 'Hydrogen', active: 'Hydrogen', createdBy: 'Hydrogen',code: 'Hydrogen',price: 'Hydrogen',image:'assets/images/hydrogen.png'},
  {id: 10, name: 'Neon', width: 20.1797, height: 1.0079,tickness: 1.0079, status: 'Hydrogen', active: 'Hydrogen' ,createdBy: 'Hydrogen',code: 'Hydrogen',price: 'Hydrogen',image:'assets/images/hydrogen.png'},
];
@Component({
  selector: 'app-tabl', 
  templateUrl: './tabl.component.html',
  styleUrls: ['./tabl.component.css']
})
export class TablComponent {
  displayedColumns: string[] = ['id', 'name', 'width', 'height','tickness','status','active','createdBy','code','price','image','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private sanitizer: DomSanitizer) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  
}
