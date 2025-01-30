import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //redirectTo: '/',
    pathMatch: 'full',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: 'entity',
    outlet: 'dialog',
    loadChildren: () =>
      import('./dialog/dialog.module').then((m) => m.DialogModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      relativeLinkResolution: 'legacy', // does not seem to matter
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
