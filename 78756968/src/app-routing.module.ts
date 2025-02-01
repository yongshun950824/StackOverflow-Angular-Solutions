import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: 'w',
    loadComponent: () =>
      import('./components/workspace/workspace.component').then(
        (c) => c.WorkspaceComponent
      ),
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./components/example-list/example-list.component').then(
            (c) => c.ExampleListComponent
          ),
        outlet: 'workspace',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
