import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentesLiterariosComponent } from './agentes-literarios/agentes-literarios.component';
import { EditorialesSugeridasComponent } from './editoriales-sugeridas/editoriales-sugeridas.component';
import { HomeComponent } from './home/home.component';
import { LibrosRecomendadosComponent } from './libros-recomendados/libros-recomendados.component';
import { ServiciosEditorialesComponent } from './servicios-editoriales/servicios-editoriales.component';
import { TalleresCursosComponent } from './talleres-cursos/talleres-cursos.component';
import { TarifasEdicionComponent } from './tarifas-edicion/tarifas-edicion.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'libros', component: LibrosRecomendadosComponent},
  {path:'servicios', component: ServiciosEditorialesComponent},
  {path:'editoriales', component: EditorialesSugeridasComponent},
  {path:'tarifas', component: TarifasEdicionComponent},
  {path:'talleres', component: TalleresCursosComponent},
  {path:'agentes', component:AgentesLiterariosComponent},
  // 404 Page Not Found
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
