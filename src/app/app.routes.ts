import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
    {
        path:'Dashboard',
        loadComponent: () => import('./Dashboard/dashboard.component'),
        children:[
            {
                path: 'NeworderformComponent',
                title: 'New Order',
                loadComponent: () => import('./Dashboard/pages/Neworderform/neworderform.component')     
            },
            {
                path: 'OrdenViewComponent',
                title: 'Order wiew',
                loadComponent: () => import('./Dashboard/pages/Orderview/order-view.component')     
            },
            {
                path: '',
                redirectTo: 'OrdenViewComponent',
                pathMatch: 'full'  
            }
        ]
    },
    {
        path: '',
        redirectTo: './Dashboard',
        pathMatch: 'full'
    }
];
