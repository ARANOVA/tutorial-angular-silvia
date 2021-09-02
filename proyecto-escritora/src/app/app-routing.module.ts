import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosRecomendadosComponent } from './libros-recomendados/libros-recomendados.component';

const routes: Routes = [
  {path:'libros', component: LibrosRecomendadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
