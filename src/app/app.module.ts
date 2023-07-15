import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculoComponent } from './components/calculo/calculo.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalculoComponent,
    ResultadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
