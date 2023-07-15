import { Component } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent {

veces:number=0;
cantidadDinero:number=0;
unidad:string=''
validacion:boolean=false;
resultado:number=0



constructor(  private _servicioService:ServicioService){

}


hacerCalculo():void{
if(this.veces === 0  || this.cantidadDinero === 0  || this.unidad === '' ){
  this.validacion=true;


}else{
  this.validacion=false;
  this.resultado=this.veces *  this.cantidadDinero;
  
}


  const  informacion={
   resultado: this.resultado

  }
  this._servicioService.pago(informacion)
   

  this.unidad=''
  this.cantidadDinero=0;
  this.veces=0;


}


}
