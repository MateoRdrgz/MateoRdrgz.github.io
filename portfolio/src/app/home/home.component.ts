import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [HeaderComponent,RouterModule,CommonModule]
})
export class HomeComponent implements OnInit {
  projects: any[] = [];
  technologyIcons: { [key: string]: string } = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Charger les projets
    this.http.get<any[]>('assets/projects.json').subscribe(data => {
      this.projects = data;
    });

    // Charger les icônes des technologies
    this.http.get<{ [key: string]: string }>('assets/technologies.json').subscribe(data => {
      this.technologyIcons = data;
    });
  }

  getIcon(tech: string): string {
    return this.technologyIcons[tech] || 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/default.svg'; // Icône par défaut si non trouvée
  }
}