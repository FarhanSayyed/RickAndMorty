import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TableComponent } from './container/table/table.component';
import { SearchComponent } from './container/search/search.component';
import { NavComponent } from './container/nav/nav.component';
import { CharacterDetailsComponent } from './container/character-details/character-details.component';
import { FormsModule } from '@angular/forms';
import { EpisodesComponent } from './episodes/episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TableComponent,
    SearchComponent,
    NavComponent,
    CharacterDetailsComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
