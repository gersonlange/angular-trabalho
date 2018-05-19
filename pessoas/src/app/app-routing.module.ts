import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './pessoas/crud/crud.component';
import { ListaComponent } from './pessoas/lista/lista.component';
import { EditaComponent } from './pessoas/edita/edita.component';

const routes: Routes = [
  {
    path: 'pessoas',
    component: CrudComponent,
    children: [
      { path: '', component: ListaComponent },
      { path: 'edita/:id', component: EditaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
