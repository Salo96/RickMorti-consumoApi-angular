import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfaceRickMortin, Result } from '../interface/RickMortin.interface';

@Injectable({
  providedIn: 'root'
})
export class RickMortinService {

  private URL:                   string          =     "https://rickandmortyapi.com/api/character/";
  private _historial:            string[]        =     [];
  public resultadoBusqueda:      Result[]        =     [];
  public notFound:               boolean          =     false

  constructor(private http: HttpClient) {
  }

 
  // ResultadoRickMortin(){
  //   return this.http.get<InterfaceRickMortin>(this.URL);
  // }


  get historial(){
    return [...this._historial];
  }

  buscarPeronsaje( query: string ){

    //sirva para poner en miniscula ejemplo DBZ a dbz y no salga repetido por mayuscula o miniscula
    query = query.trim().toLowerCase();



    //peticion http para el consumo de la api
    this.http.get<InterfaceRickMortin>(`${ this.URL }?name=${ query }`)
      .subscribe( (resp) =>{

        // console.log(resp.results)
        this.resultadoBusqueda = resp.results
        this.notFound = true

        //condicion para que no insertar valores repetidos en el array
        if( !this._historial.includes( query )  && this.notFound) {

        //agrego los resultado en un array
        this._historial.unshift( query );

        //para que en la vista solo tenga 10 valores a mostrar
        this._historial = this._historial.splice( 0, 10 );
    }

      },error =>{
        this.notFound = false
      })
    

  }

  
}
