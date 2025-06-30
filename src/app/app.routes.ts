import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'NewForm/:loginName',
        loadComponent: () =>
          import('./pages/student-form.component').then(m => m.StudentFormComponent),
      },
      {
        path: '',
        redirectTo: 'NewForm/defaultUser', // fallback route
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'NewForm/defaultUser'
      }
];
