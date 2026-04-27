import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paso7',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './paso7.html',
  styleUrl: '../../../styles.css'
})
export class Paso7 {
  copyCode(btn: HTMLButtonElement, pre: HTMLPreElement) {
    navigator.clipboard.writeText(pre.innerText).then(() => {
      btn.textContent = '¡copiado!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'copiar'; btn.classList.remove('copied'); }, 2000);
    });
  }
}