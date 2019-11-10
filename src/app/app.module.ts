import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatButtonModule,
  MatNativeDateModule,
  MatInputModule,
  MatSelectModule
} from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataVisualizationComponent } from './components/data-visualization/data-visualization.component';
import { ReactiveFormsModule } from '@angular/forms';

// Import angular-fusioncharts
import { FusionChartsModule } from "angular-fusioncharts";
// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as Charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import { Column2dComponent } from './components/data-visualization/column2d/column2d.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardNavComponent } from './components/data-visualization/dashboard-nav/dashboard-nav.component';
import { ClientesComponent } from './components/data-visualization/clientes/clientes.component';
import { FuelComponent } from './components/data-visualization/fuel/fuel.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Line2dComponent } from './components/data-visualization/line2d/line2d.component';
import { MultLine2dComponent } from './components/data-visualization/mult-line2d/mult-line2d.component';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [
    AppComponent,
    DataVisualizationComponent,
    Column2dComponent,
    DashboardNavComponent,
    ClientesComponent,
    FuelComponent,
    HomePageComponent,
    Line2dComponent,
    MultLine2dComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FusionChartsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
