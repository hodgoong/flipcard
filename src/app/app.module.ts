
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatDialogModule,
  MatSidenavModule
} from '@angular/material';

import { FlipcardsService } from './flipcards.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShuffleComponent } from './shuffle/shuffle.component';
import { InsertComponent } from './insert/insert.component';
import { ManageComponent } from './manage/manage.component';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatSidenavModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    ShuffleComponent,
    InsertComponent,
    ManageComponent,
    SignupDialogComponent
  ],
  entryComponents: [SignupDialogComponent],
  providers: [
    FlipcardsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }