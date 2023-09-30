import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuTitleComponent } from './componets/menu-title/menu-title.component';
import { CardComponent } from './componets/card/card.component';
import { ButtonPaginationComponent } from './componets/button-pagination/button-pagination.component';
import { HomeComponent } from './componets/page/home/home.component';
import { ContentComponent } from './componets/page/content/content/content.component';

import { HttpClientModule } from '@angular/common/http';
import { PokemonServicesService } from './services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuTitleComponent,
    CardComponent,
    ButtonPaginationComponent,
    HomeComponent,
    ContentComponent,
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule
  ],

  providers: [
    PokemonServicesService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
