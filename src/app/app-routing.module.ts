import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompensationDetailComponent } from './modules/compensation/compensation-detail/compensation-detail.component';

const routes: Routes = [
  {
    path: 'compensation',
    component: CompensationDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
