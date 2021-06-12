import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RickMortinPageComponent } from './rick-mortin-page/rick-mortin-page.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { BusquedaComponent } from './busqueda/busqueda.component';


@NgModule({
  declarations: [
    SidebarComponent,
    RickMortinPageComponent,
    ResultadoComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    RickMortinPageComponent
  ]
})
export class RickMortinModule { }
