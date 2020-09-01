import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeCardComponent } from './pages/recipe-card/recipe-card.component';
import { HeaderComponent } from './pages/header/header.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardComponent,
    HeaderComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
