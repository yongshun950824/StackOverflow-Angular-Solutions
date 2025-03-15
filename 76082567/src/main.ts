import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

export class AttachedFile {
  name: string;
  size: Number;
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './main.html',
})
export class App {
  name = 'Angular';

  accept = 'pdf,png';
  maxFileSizeMB = 5;
  attachedFiles: AttachedFile[] = [
    {
      name: 'Valid file.pdf',
      size: 1 * 1024 * 1024,
    },
    {
      name: 'Invalid file extension.doc',
      size: 1 * 1024 * 1024,
    },
    {
      name: 'Invalid file size.pdf',
      size: 100 * 1024 * 1024,
    },
  ];
  readonly = false;

  ngOnInit() {
    this.validationErrors = this.validateFiles(this.attachedFiles);
  }

  public validationErrors: { messages: string[] }[] = null;
  public validateFiles(attachedFiles: AttachedFile[]) {
    const extensions =
      this.accept &&
      this.accept
        .split(',')
        .map((x) => x.toLowerCase().trim())
        .filter((x) => !!x);

    const maxSize = this.maxFileSizeMB * 1024 * 1024;

    return attachedFiles.map((file) => {
      let errors: string[] = [];
      if (
        extensions &&
        !extensions.some((x) => file.name.toLowerCase().endsWith(x))
      ) {
        errors.push(`File Type is not accepted`);
      }

      if (file.size > maxSize) {
        errors.push(`Exceeds maximum file size of ${this.maxFileSizeMB}MB.`);
      }

      if (errors.length > 0) {
        return {
          messages: errors,
        };
      }

      return null;
    });
  }

  removeFile(i: number) {}
}

bootstrapApplication(App, {
  providers: [provideAnimations()],
});
