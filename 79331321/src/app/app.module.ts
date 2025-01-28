import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form/form.component';
import { FolderHierarchyComponent } from './folder-hierarchy/folder-hierarchy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, FormComponent, FolderHierarchyComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
