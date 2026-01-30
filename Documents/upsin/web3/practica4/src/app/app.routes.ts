import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Fromulario1Page } from './pages/fromulario1-page/fromulario1-page';
import { Fromulario2Page } from './pages/fromulario2-page/fromulario2-page';
import { Fromulario3Page } from './pages/fromulario3-page/fromulario3-page';

export const routes: Routes = 
[
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
    }
];
