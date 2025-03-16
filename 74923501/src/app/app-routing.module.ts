import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { QuestionComponent } from './question/question.component';

const ROUTES: Routes = [
  {
    path: 'questions',
    component: QuestionComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: HelloComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
