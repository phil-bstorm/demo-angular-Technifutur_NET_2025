import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./pages/about-page/about-page').then((c) => c.AboutPage),
  },
];
