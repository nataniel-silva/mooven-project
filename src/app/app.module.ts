import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {HttpClientModule} from '@angular/common/http';
import {SearchRepositoryFormComponent} from './search-repository-form/search-repository-form.component';
import {SearchOwnerRepositoryFormComponent} from './search-owner-repository-form/search-owner-repository-form.component';
import {FavoriteRepositoryFormComponent} from './favorite-repository-form/favorite-repository-form.component';
import {FavoriteService} from './service/favorite.service';
import {RepositoryService} from './service/repository.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    SearchRepositoryFormComponent,
    SearchOwnerRepositoryFormComponent,
    FavoriteRepositoryFormComponent
  ],
  exports: [
    SearchRepositoryFormComponent,
    SearchOwnerRepositoryFormComponent,
    FavoriteRepositoryFormComponent
  ],
  providers: [
    RepositoryService,
    FavoriteService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
