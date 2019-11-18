import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './components/data-visualization/clientes/clientes.component';
import { FuelComponent } from './components/data-visualization/fuel/fuel.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { DataVisualizationComponent } from './components/data-visualization/data-visualization.component';
import { AdminComponent } from './components/data-visualization/admin/admin.component';


const routes: Routes = [
  {path: '', component: HomePageComponent },
  {path: 'clientes', component: ClientesComponent },
  {path: 'fuel', component: FuelComponent },
  {path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
