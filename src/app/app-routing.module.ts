import { NgModule } from '@angular/core';
import { MedsComponent } from './pages/meds/meds.component';
import { RouterModule, Routes } from '@angular/router';
import { AddMedComponent } from './pages/add-med/add-med.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'meds' },
  { path: 'meds', component: MedsComponent },
  { path: 'add-med', component: AddMedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
