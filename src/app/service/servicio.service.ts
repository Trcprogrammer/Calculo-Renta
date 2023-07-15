import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {



  private obeservable$=new Subject <any>();

  calculo:number;

  constructor() {
    this.calculo=0
  
   }


    pago(cantidad:any){
      this.obeservable$.next(cantidad)

    }

    getDato():Observable<any>{

     return this.obeservable$.asObservable();


    }
}
