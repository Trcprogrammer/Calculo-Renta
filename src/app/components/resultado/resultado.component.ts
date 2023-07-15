import { Component } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {

subscribir:Subscription;

resultado:any;
validacion:boolean=false;


constructor( private _servicioService:ServicioService){
  this.subscribir=this._servicioService.getDato().subscribe(data =>{
    this.resultado=data.resultado;

    if(this.resultado === data.resultado){
      this.validacion=true;


    }
    
  })

}




}
