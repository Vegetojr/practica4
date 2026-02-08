import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Fromulario1Page } from './pages/fromulario1-page/fromulario1-page';
import { Fromulario2Page } from './pages/fromulario2-page/fromulario2-page';
import { Fromulario3Page } from './pages/fromulario3-page/fromulario3-page';
import { Pagina404 } from './pages/pagina404/pagina404';

export const routes: Routes = 
[
    {
        path:'',
        component:Fromulario1Page
    },
    {
        path: 'formulario1',
        component: Fromulario1Page
    },
    {
        path: 'formulario2',
        component: Fromulario2Page
    },
    {
        path: 'formulario3',
        component: Fromulario3Page
    },
    {
        path:'pagina404',
        component:Pagina404
    },
    {
        path:'**', /*cualquier cosa que meta lo manda aca  */
        redirectTo:'pagina404'
    }
    
    
];
