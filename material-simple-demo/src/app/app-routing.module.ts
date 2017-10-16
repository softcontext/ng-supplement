import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DemoToolbarComponent } from './demo-toolbar/demo-toolbar.component';
import { ProgressSpinnerConfigurableExample } from './progress-spinner/progress-spinner-configurable-example';
import { DatepickerOverviewExample } from './date-picker/datepicker-overview-example';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'demo-toolbar', component: DemoToolbarComponent },
  { path: 'progress-spinner', component: ProgressSpinnerConfigurableExample },
  { path: 'date-picker', component: DatepickerOverviewExample },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
