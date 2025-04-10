import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root' // Fournit le service à la racine de l'application
})
export class ProjectService {
  private baseUrl = 'assets/projects.json'; // Chemin correct pour accéder au fichier JSON
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl);
  }

  getProjectById(id: number): Observable<Project | undefined> {
    return this.http.get<Project[]>(this.baseUrl).pipe(
      map((projects: any[]) => projects.find(project => project.id === id))
    );
  }
}