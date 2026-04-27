import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, DecimalPipe],
  templateUrl: './home.html'
})
export class Home {
  steps = [
    { num: 1, url: 'paso1', title: 'Instalación de Node.js y npm',         sub: 'Preparación del equipo de trabajo',    tag: 'Setup',  tagClass: 'tag-setup'  },
    { num: 2, url: 'paso2', title: 'Instalación Angular CLI',              sub: 'Pilar base para el uso del framework', tag: 'Setup',  tagClass: 'tag-setup'  },
    { num: 3, url: 'paso3', title: 'Crea un nuevo proyecto',               sub: 'Primeros pasos con la herramienta',    tag: 'Config', tagClass: 'tag-config' },
    { num: 4, url: 'paso4', title: 'Ejecuta el servidor de desarrollo',    sub: 'Hola Mundo del framework',             tag: 'Dev',    tagClass: 'tag-setup'  },
    { num: 5, url: 'paso5', title: 'Entiende y edita el componente raíz',  sub: 'Tu primer componente Angular',         tag: 'Código', tagClass: 'tag-code'   },
    { num: 6, url: 'paso6', title: 'Genera un nuevo componente',           sub: 'Arquitectura basada en componentes',   tag: 'Código', tagClass: 'tag-code'   },
    { num: 7, url: 'paso7', title: 'Compila y despliega',                  sub: 'La web ya es tuya',                    tag: 'Deploy', tagClass: 'tag-config' },
  ];
}