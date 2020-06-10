import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects = [
    {
      name: 'Building Management Application',
      mdPath: './building_management/building_management_app.md'
    }
  ];

  constructor() { }

  getProjects() {
    return this.projects.slice();
  }
}
