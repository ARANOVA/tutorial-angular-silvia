import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibrosRecomendadosComponent } from './libros-recomendados/libros-recomendados.component';
import { ServiciosEditorialesComponent } from './servicios-editoriales/servicios-editoriales.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'libros', component: LibrosRecomendadosComponent},
  // 404 Page Not Found
  { path: '**', redirectTo: 'home' },
  { path: 'servicios', component: ServiciosEditorialesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
