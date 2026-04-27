import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      Web creada por y para aprender Angular · <strong>LABANGULAR 2026</strong>
    </footer>
  `,
  styles: [`
    footer {
      text-align: center;
      padding: 4rem 2rem;
      border-top: 1px solid var(--border);
      color: var(--muted);
      font-size: 0.8rem;
      font-family: 'JetBrains Mono', monospace;
      position: relative;
      z-index: 1;
    }
    footer strong { color: var(--accent); }
  `]
})
export class Footer {}