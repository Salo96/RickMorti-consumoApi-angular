import { Component, ElementRef, ViewChild } from '@angular/core';
import { RickMortinService } from '../service/rick-mortin.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  constructor( private rickMortinServices: RickMortinService ){}

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
 
  buscar(){
    //obtengo el valor de la busqueda
    const valor = this.txtBuscar.nativeElement.value;
    // console.log(valor);

      //sino tiene nada auque sea una palabra, no mande nada
    if( valor.trim().length === 0 ){
      return;
    }

    //mando el valor al sevicio
    this.rickMortinServices.buscarPeronsaje( valor );

    //borro el contenido de la busqueda
    this.txtBuscar.nativeElement.value="";
    
  }


}
