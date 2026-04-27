import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paso5',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './paso5.html',
  styleUrl: '../../../styles.css'
})
export class Paso5 {
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