import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-principal',
  templateUrl: './componente-principal.component.html',
  styleUrls: ['./componente-principal.component.css']
})
export class ComponentePrincipalComponent {
  public nombre_actual : string='USUARIO NUEVO'
  nombre_beta: string=''
  index:number=0
  index2:number=0
  n:number=0
  historial:string[]=[]
  index_historial:number[]=[]
  activar_historial:boolean=true

  guardar_nombre(){
    if(this.nombre_beta|| null){
      this.nombre_actual=this.nombre_beta
      this.nombre_beta=''
      this.n =this.n + 1
      this.historial.push(this.nombre_actual)
      this.index_historial.push(this.n)
      if(this.index>9 && this.index2>9){
       this.historial.shift()
       this.index_historial.shift()
      }
      this.index2=this.index2+1
      this.index=this.index+1
    }
  }
}
