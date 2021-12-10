import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    console.log(this.txtBuscar);

    const valor = this.txtBuscar.nativeElement.value;

    console.log(valor);

    this.txtBuscar.nativeElement.value = '';
  }

}
