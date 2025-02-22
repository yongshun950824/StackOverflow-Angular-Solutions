import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export enum FileTypesEnum {
  CSV,
  JSON,
  XML,
}

export const FileType2LabelMapping: Record<FileTypesEnum, string> = {
  [FileTypesEnum.CSV]: "Here's Csv",
  [FileTypesEnum.JSON]: "Here's Json",
  [FileTypesEnum.XML]: "Here's Xml",
};

export interface FileInterface {
  id: number;
  name: string;
  type: FileTypesEnum;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  FileTypesEnum = FileTypesEnum;
  FileType2LabelMapping = FileType2LabelMapping;
  fileTypes = Object.values(FileTypesEnum)
    .filter((x) => isNaN(Number(x)))
    .map((x: any) => ({
      value: FileTypesEnum[x],
      name: FileType2LabelMapping[
        FileTypesEnum[x as keyof typeof FileTypesEnum]
      ],
    }));

  itemToEdit: FileInterface | null = null;

  data: Array<FileInterface> = [
    { id: 1, name: 'firstJson', type: FileTypesEnum.JSON },
    { id: 2, name: 'firstCsv', type: FileTypesEnum.CSV },
    { id: 3, name: 'firstXml', type: FileTypesEnum.XML },
    { id: 4, name: 'secondJson', type: FileTypesEnum.JSON },
    { id: 5, name: 'secondXml', type: FileTypesEnum.XML },
  ];

  dataSource: MatTableDataSource<FileInterface> =
    new MatTableDataSource<FileInterface>();
  displayedColumns: string[] = ['actionEditCancel', 'id', 'name', 'type'];

  constructor() {}

  ngOnInit() {
    this.dataSource.data = this.data;
    console.log('data source:', this.dataSource.data);
    console.log('FileType2LabelMapping:', FileType2LabelMapping);
  }

  onEditClick(element: FileInterface): void {
    this.itemToEdit = element;
  }
  onCancelEditClick(): void {
    this.itemToEdit = null;
  }

  getTypeLabel(type: FileTypesEnum): string {
    return FileType2LabelMapping[type];
  }

  // numberToEnum(value: number): keyof typeof FileTypesEnum  {
  //   return FileTypesEnum[value]
  // }
}
