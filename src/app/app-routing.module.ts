import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchOwnerRepositoryFormComponent} from './search-owner-repository-form/search-owner-repository-form.component';
import {SearchRepositoryFormComponent} from './search-repository-form/search-repository-form.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/repository'},
  {path: 'repository', component: SearchRepositoryFormComponent},
  {path: 'owner-repository', component: SearchOwnerRepositoryFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
