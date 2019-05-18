import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Component2Component } from './components/component2/component2.component';
import { Component3Component } from 'src/module1/component3/component3.component';
import { Component2DetailComponent } from './components/component2-detail/component2-detail.component';
import { GuardSampleService } from './services/guard-sample.service';
import { ResolverSample } from './services/resolver-sample';

const routes: Routes = [ {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: AppComponent },
  {path : 'cmp2', component: Component2Component, canActivate: [GuardSampleService]},
  {path : 'cmp2/:id', component: Component2DetailComponent},
  {path : 'cmp3', component: Component3Component, resolve : ResolverSample},
  {path : '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
