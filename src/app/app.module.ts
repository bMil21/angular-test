import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MedsComponent } from './pages/meds/meds.component';
import { AddMedComponent } from './pages/add-med/add-med.component';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AppComponent, MedsComponent, AddMedComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
