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
import { WeavyBlockComponent } from './weavy-block/weavy-block.component';
import { SplitBlockComponent } from './split-block/split-block.component';
import { SimpleBlockComponent } from './simple-block/simple-block.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ChurchWeddingComponent,
    HomeComponent,
    WeavyBlockComponent,
    SplitBlockComponent,
    SimpleBlockComponent
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
