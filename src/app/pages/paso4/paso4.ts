import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paso4',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './paso4.html',
  styleUrl: '../../../styles.css'
})
export class Paso4 {
  copyCode(btn: HTMLButtonElement, pre: HTMLPreElement) {
    navigator.clipboard.writeText(pre.innerText).then(() => {
      btn.textContent = '¡copiado!';
      btn.classList.add('copied');
      setTimeout(() => { btn.textContent = 'copiar'; btn.classList.remove('copied'); }, 2000);
    });
  }
}