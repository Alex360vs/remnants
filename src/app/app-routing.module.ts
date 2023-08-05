import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FiltroComponent } from './filtro/filtro.component';
import { TablComponent } from './tabl/tabl.component';

const routes: Routes = [
  { path: '', component: TablComponent },
  { path: 'filtro/:id', component: FiltroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
