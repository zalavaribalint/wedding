import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import { ChurchWeddingComponent } from './church-wedding/church-wedding.component';
import { HomeComponent } from './home/home.component';
import { SplitBlockComponent } from './split-block/split-block.component';
import { SimpleBlockComponent } from './simple-block/simple-block.component';
import { CivilWeddingComponent } from './civil-wedding/civil-wedding.component';
import { AccommodationComponent } from './accommodation/accommodation.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ChurchWeddingComponent,
    HomeComponent,
    SplitBlockComponent,
    SimpleBlockComponent,
    CivilWeddingComponent,
    AccommodationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
