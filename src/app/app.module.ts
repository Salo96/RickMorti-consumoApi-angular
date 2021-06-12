import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { RickMortinModule } from './RickMortin/rick-mortin.module';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RickMortinModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
