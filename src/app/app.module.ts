import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieService } from './movie.service';

@NgModule({
  imports:      [ BrowserModule, RouterModule, FormsModule,ReactiveFormsModule, HttpClientModule
  ],
  declarations: [ AppComponent, LoginComponent, MoviesListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MovieService]
})
export class AppModule { }
