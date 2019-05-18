import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { Component2DetailComponent } from './components/component2-detail/component2-detail.component';
import { Module1Module } from 'src/module1/module1.module';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component2DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Module1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
