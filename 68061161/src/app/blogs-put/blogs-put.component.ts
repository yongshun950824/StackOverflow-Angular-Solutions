import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Blog, MyapiService } from '../services/myapi.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-blogs-put',
  templateUrl: './blogs-put.component.html',
  styleUrls: ['./blogs-put.component.css']
})
export class BlogsPutComponent implements OnInit {
  updateForm!: FormGroup;

  myArr = [
    { id: 11, title: 'MyTitle1', body: 'MyBody1' },
    { id: 12, title: 'MyTitle2', body: 'MyBody2' },
    { id: 13, title: 'MyTitle3', body: 'MyBody3' },
    { id: 14, title: 'MyTitle4', body: 'MyBody4' },
    { id: 15, title: 'MyTitle5', body: 'MyBody5' }
  ];

  // table
  blogs: Blog[] = [];
  displayedColumns: string[] = ['id', 'title'];
  //dataSource = this.myArr;
  dataSource: MatTableDataSource<Blog>;

  constructor(private apiS: MyapiService, private fb: FormBuilder) {
    this.dataSource = new MatTableDataSource<Blog>();
  }

  ngOnInit(): void {
    this.getBlogs();

    this.updateForm = this.fb.group({
      Utitle: new FormControl('', Validators.required),
      Ubody: new FormControl('', Validators.required)
    });
  }

  pushBlog() {
    console.log(JSON.stringify(this.blogs));
  }

  getBlogs() {
    this.apiS.getBlog().subscribe(data => {
      this.blogs = data;
      this.dataSource = new MatTableDataSource(this.blogs);
    });
  }

  onSubmit() {
    console.log(this.updateForm.value);
  }

  injectData() {
    let newData = {
      Utitle: 'Lorem Ipsum',
      Ubody:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga repellendus accusantium, quod cupiditate deleniti soluta cum voluptate quibusdam ut laborum ipsum praesentium earum reprehenderit delectus natus adipisci suscipit eum excepturi!'
    };

    this.updateForm.setValue(newData);
  }
}
