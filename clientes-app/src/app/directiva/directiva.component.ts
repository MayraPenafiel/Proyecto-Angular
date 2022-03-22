import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listareinos: string[]=['Fungi o Hongos','Animalia o Animales','Plantea o Plantas','Protista o Celulas','Monera o Bacterias'];
  listaanimalia: string[]=['Vertebrados','Invertabrados: artropodos, anelidos, moluscos, poriferos,equinodermos, nematodos, platelmintos'];
  listafungi: string[]=['Basidiomicetos','Ascomicetos','Glomeromicetos','Zigomicetos','Quitridiomicetos','Monofiletica'];
  listaplantae: string[]=['Primoplantae','Verdes','Terrestres','Vasculares','Megafilos','Con Semilla','Con flor','etc'];
  listaprotoctista: string[]=['Chromista','Protozoa'];
  listamonera: string[]=['arqueas','bacterias','Cianobacterias'];
  listaprotista:string[]=['Excavata','Diaphoretickes','Amorphea','Stramenopiles','Alveolata','Rhizaria','Amoboza','Opisthokonta'];

  hab: boolean=true;
  habp: boolean=true;

  constructor() { }
  
  setHab():void{ 
     this.hab = (this.hab == true)? false: true;
  }

  setHabp():void{
    this.habp = (this.hab == true)? false: true;
  }
}
