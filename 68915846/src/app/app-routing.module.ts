import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminEventDetailsComponent } from './admin-event-details/admin-event-details.component';
import { AdminEventsComponent } from './admin-events/admin-events.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
// import { LoginComponent } from './pages/login/login.component';
// import {DefaultLayoutComponent} from "./layouts/default-layout/default-layout.component";
// import {ProfileComponent} from "./pages/profile/profile.component";
// import {ScheduleComponent} from "./pages/schedule/schedule.component";
// import {EventsComponent} from "./pages/events/events.component";
// import {CanActivateViaAuthGuard} from './guards/CanActivateViaAuthGuard';
// import {CellsComponent} from './pages/cells/cells.component';
// import {RegisterConfirmComponent} from "./pages/register-confirm/register-confirm.component";
// import {CkEditorPageComponent} from "./pages/ck-editor-page/ck-editor-page.component";
// import {MobileComponent} from "./pages/mobile/mobile.component";
// import {LogoutComponent} from "./pages/logout/logout.component";
// import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
// import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
// import { AdminEventsComponent } from './pages/admin-events/admin-events.component';
// import { AdminEventDetailsComponent } from './pages/admin-events/admin-event-details/admin-event-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin-dashboard',
        component: AdminDashboardComponent
      },
      {
        path: 'admin-events',
        component: AdminEventsComponent
      },
      {
        path: 'admin-events/details/:id',
        component: AdminEventDetailsComponent
      }
      // {
      //   path: '*',
      //   redirectTo: ''
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
