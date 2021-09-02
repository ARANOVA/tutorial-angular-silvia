import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LibrosRecomendadosComponent } from './libros-recomendados/libros-recomendados.component';
import { EditorialesSugeridasComponent } from './editoriales-sugeridas/editoriales-sugeridas.component';
import { ServiciosEditorialesComponent } from './servicios-editoriales/servicios-editoriales.component';
import { TarifasEdicionComponent } from './tarifas-edicion/tarifas-edicion.component';
import { HomeComponent } from './home/home.component';
import { TalleresCursosComponent } from './talleres-cursos/talleres-cursos.component';
import { AgentesLiterariosComponent } from './agentes-literarios/agentes-literarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosRecomendadosComponent,
    EditorialesSugeridasComponent,
    ServiciosEditorialesComponent,
    TarifasEdicionComponent,
    HomeComponent,
    TalleresCursosComponent,
    AgentesLiterariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
