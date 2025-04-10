import { Component, OnInit } from '@angular/core';
import { Project } from './models/project.model';
import { RouterModule } from '@angular/router';
import { ProjectService } from './services/project.service';
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent,RouterModule,CommonModule]
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => this.projects = data);
  }
}
