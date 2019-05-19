import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GuardSampleService } from './services/guard-sample.service';
import { ResolverSample } from './services/resolver-sample';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [ {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'products', component: ProductListComponent },
  {path: 'products/:id', component: ProductDetailComponent },
  {path: '', component: SidebarComponent, outlet: 'sidebar'},
  {path : '**', component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
