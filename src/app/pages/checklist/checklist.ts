import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CheckItem {
  label: string;
  code: string;
  done: boolean;
}

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './checklist.html'
})
export class Checklist {
  items = signal<CheckItem[]>([
    { label: 'Node.js y npm instalados y verificados',               code: 'v20+',     done: false },
    { label: 'Angular CLI instalado globalmente',                    code: 'ng v17+',  done: false },
    { label: 'Proyecto creado con ng new',                           code: 'ng new',   done: false },
    { label: 'Servidor de desarrollo funcionando en localhost:4200', code: 'ng serve', done: false },
    { label: 'Componente raíz editado con interpolación de datos',   code: '{{ }}',    done: false },
    { label: 'Nuevo componente generado con ng generate',            code: 'ng g c',   done: false },
    { label: 'Build de producción generado',                         code: 'ng build', done: false },
  ]);

  completed = computed(() => this.items().filter(i => i.done).length);
  total      = computed(() => this.items().length);
  progress   = computed(() => Math.round((this.completed() / this.total()) * 100));
  allDone    = computed(() => this.completed() === this.total());

  toggle(index: number) {
    this.items.update(list =>
      list.map((item, i) => i === index ? { ...item, done: !item.done } : item)
    );
  }
}