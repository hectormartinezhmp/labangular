import { Routes } from '@angular/router';
import { Paso1 } from './pages/paso1/paso1';
import { Paso3 } from './pages/paso3/paso3';
import { Paso4 } from './pages/paso4/paso4';
import { Paso2 } from './pages/paso2/paso2';
import { Paso5 } from './pages/paso5/paso5';
import { Paso6 } from './pages/paso6/paso6';
import { Paso7 } from './pages/paso7/paso7';
import { Checklist } from './pages/checklist/checklist';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'paso1', component: Paso1},
    {path: 'paso2', component: Paso2},
    {path: 'paso3', component: Paso3},
    {path: 'paso4', component: Paso4},
    {path: 'paso5', component: Paso5},
    {path: 'paso6', component: Paso6},
    {path: 'paso7', component: Paso7},
    {path: 'checklist', component: Checklist},
];
