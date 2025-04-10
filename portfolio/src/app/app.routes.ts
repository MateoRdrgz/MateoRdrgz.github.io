import { Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Route par défaut
  { path: 'project/:id', component: ProjectComponent } // Route pour les projets
];
