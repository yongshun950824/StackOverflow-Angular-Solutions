import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Project } from '../classes/project';
import { DataService } from '../services/data.service';
//import { Project } from '@root/shared/classes/project';
//import { DataService } from '@root/shared/services/data.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  projects: any;

  project = new Project();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getProjectsData();
  }

  //get project data into the table
  getProjectsData() {
    this.dataService.getProjectData().subscribe((res) => {
      this.projects = res;
    });
  }
}
