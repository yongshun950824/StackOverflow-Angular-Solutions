import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [ProjectService],
})
export class ProjectDetailsComponent implements OnInit {
  // currentProject: any = {};
  // viewMode = false;
  // message: string;

  @Input() viewMode = false;

  @Input() currentProject: Project = {
    title: '',
    description: '',
    accessCode: '',
    sprints: []
  };

  message = '';

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router //private _titleService: Title
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getProject(this.route.snapshot.params['id']);
    }
  }

  getProject(id: string): void {
    this.projectService.get(id).subscribe({
      next: (data) => {
        this.currentProject = data;
        console.log(data);
        //this._titleService.setTitle(data.title+' · Scrumy');
      },
      error: (e) => console.error(e),
    });
  }
}
