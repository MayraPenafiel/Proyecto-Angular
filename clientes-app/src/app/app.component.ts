import { Component } from '@angular/core';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {

  title = 'Bienvenidos/as \\(^-^)/';
  curso: string='M4B'
  carrera: string='Tecnología Superior en Desarrollo de Software'
  materia: string='Programacion de Aplicaciones Web'
  estudiante: string ='Mayra Peñafiel'
  instituto: string='Instituto Superior Tecnologico del Azuay'
  alectivo: string='2021 - 2022'

}
