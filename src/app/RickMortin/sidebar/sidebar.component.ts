import { Component } from '@angular/core';
import { RickMortinService } from '../service/rick-mortin.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent  {

  constructor( private rickMortinService: RickMortinService ) { }

  get historial(){
   
    return this.rickMortinService.historial;
  
  
  }


  buscar( termino:string ){
    // console.log(termino);
    return this.rickMortinService.buscarPeronsaje( termino )
  }
 

}
