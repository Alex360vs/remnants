import { Component, OnInit, inject } from '@angular/core';
import { ELEMENT_DATA, PeriodicElement, TablComponent} from '../tabl/tabl.component';
import { ActivatedRoute } from '@angular/router';






@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {
  
  ELEMENT_DATA = ELEMENT_DATA;
  remnant!: PeriodicElement;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.remnant = this.ELEMENT_DATA.find(element => element.id === id)!;
  }

  getStatusStyle(status: string) {
    switch (status) {
      case 'pending':
        return { color: '#FFA500' }; // Orange
      case 'available':
        return { color: '#6EFF33' }; // Green
      case 'reserved':
        return { color: '#0000FF' }; // Blue
      case 'used':
        return { color: '#FF0000' }; // Red
      default:
        return {}; // Puedes agregar estilos por defecto aquí si es necesario
    }
  }
  getStatusStyle1(status: string) {
    switch (status) {
      case 'hold':
        return { color: '#FFA500' }; // Orange
      case 'required':
        return { color: '#6EFF33' }; // Green
      case 'in process':
        return { color: '#0000FF' }; // Blue
      case 'completed':
        return { color: '#FF0000' }; // Red
      default:
        return {}; // Puedes agregar estilos por defecto aquí si es necesario
    }
  }
 
  
  
  
  
  
  
}
