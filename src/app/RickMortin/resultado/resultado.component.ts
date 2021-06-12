import { Component, OnInit } from '@angular/core';
import { RickMortinService } from '../service/rick-mortin.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styles: [
  ]
})
export class ResultadoComponent implements OnInit {

  // resultado:any=[]

  constructor( private rickMortinService:RickMortinService ) { }

  ngOnInit(): void {
    // this.rickMortinService.ResultadoRickMortin()
    // .subscribe( resp  =>{
    //   // console.log(resp);
    //   this.resultado = resp.results
    // })
  }

  get resultadoBusqueda(){
   
    if(this.rickMortinService.notFound === true)
      return this.rickMortinService.resultadoBusqueda
    else{
      return this.rickMortinService.notFound
    }
  
  }

}
