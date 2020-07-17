import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SortingService } from "./sorting.service";

import { CategoriesComponent } from './categories/categories.component';
import { GreatHallComponent } from './great-hall/great-hall.component';
import { CommonroomComponent } from './commonroom/commonroom.component';
import { SpellsComponent } from './spells/spells.component';
import { SpellsPipe } from './spells/spells.pipe';
import { CategoriesService } from './categories/categories.service';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    GreatHallComponent,
    CommonroomComponent,
    SpellsComponent,
    SpellsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SortingService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
