import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paso6',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './paso6.html',
  styleUrl: '../../../styles.css'
})
export class Paso6 {

  ac = '{';
  cc = '}';


  copyCode(btn: HTMLButtonElement, pre: HTMLPreElement) {
    navigator.clipboard.writeText(pre.innerText).then(() => {
      btn.textContent = '¡copiado!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'copiar'; btn.classList.remove('copied'); }, 2000);
    });
  }
}