import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroFormTemplateComponent } from './hero-form-template/hero-form-template.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';
import { AlterEgoDirective } from './shared/alter-ego.directive';
import { ForbiddenNameDirective } from './shared/forbidden-name.directive';
import { IdentityRevealedDirective } from './shared/identity-revealed.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormTemplateComponent,
    HeroFormReactiveComponent,
    AlterEgoDirective,
    ForbiddenNameDirective,
    IdentityRevealedDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
