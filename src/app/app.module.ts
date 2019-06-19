import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
// import { HttpClient } from '@angular/http';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
// import {Jsonp } from '@angular/http';
import {Observable} from 'rxjs';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'stats', component: StatsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
