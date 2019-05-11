import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from 'src/module1/component3/component3.component';

const routes: Routes = [ {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AppComponent },
  {path : 'cmp2', component: Component2Component},
  {path : 'cmp3', component: Component3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
