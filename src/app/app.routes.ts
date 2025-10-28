import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home-page/home-page';
import { AboutPage } from './features/home/pages/about-page/about-page';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'info',
    loadChildren: () => import('./features/home/home.routes').then((r) => r.routes),
  },
  {
    path: 'error',
    loadChildren: () => import('./features/errors/error.routes').then((r) => r.routes),
  },
  {
    path: '**',
    redirectTo: '/error/404',
  },
];
