import { Routes } from '@angular/router';
import { Calificaciones } from './pages/calificaciones/calificaciones';
import { Datos } from './pages/datos/datos';

export const routes: Routes = [
    {
        path:'calificaciones',
        component: Calificaciones
    },
    {
        path:'datos',
        component: Datos
    }
];
