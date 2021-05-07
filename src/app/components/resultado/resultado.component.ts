import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  resultado : string;
  interpretacion: string;
  //atrapar el valor de un componente
  constructor(private route: ActivatedRoute) { 
    this.resultado ='';
    this.interpretacion=''
    this.bmi = +route.snapshot.paramMap.get('valor')!;

  }

  ngOnInit(): void {
    this.getResultado();
  }
  getResultado(){
      if (this.bmi >= 25) {
        this.resultado = 'Exceso de Peso'
        this.interpretacion= 'Tienes un peso corporal superior al normal, Intenta hacer mas ejercicio'
      }else if(this.bmi >= 18.5 ){
        this.resultado = '  Normal de Peso'
        this.interpretacion= 'Tienes un peso normal, Buen Trabajo!'
      }else{
        this.resultado = 'Bajo de Peso',
        this.interpretacion = 'Tienes un peso corporal mas bajo de lo normal, Puedes comer un poco mas'
      }
  }
}
