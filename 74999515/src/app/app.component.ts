import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  allParts: any[] = [
    {
      partId: 1,
      partName: '',
      partDesc: '',
      createdBy: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gm.com',
        password: 'P@ssw0rd!',
        companyName: 'GM',
        id: 'abc123',
      },
      updatedBy: null,
      partType: { partTypeCode: 'pt1', partTypeDesc: 'pt1desc' },
      createdDate: '2023-01-03T22:13:24.180+00:00',
      updatedDate: null,
      quantity: 1,
    },
    {
      partId: 2,
      partName: '',
      partDesc: '',
      createdBy: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gm.com',
        password: 'P@ssw0rd!',
        companyName: 'GM',
        id: 'abc123',
      },
      updatedBy: null,
      partType: { partTypeCode: 'pt1', partTypeDesc: 'pt1desc' },
      createdDate: '2023-01-03T22:13:54.966+00:00',
      updatedDate: null,
      quantity: 1,
    },
    {
      partId: 3,
      partName: '',
      partDesc: '',
      createdBy: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@gm.com',
        password: 'P@ssw0rd!',
        companyName: 'GM',
        id: 'abc123',
      },
      updatedBy: null,
      partType: { partTypeCode: 'pt1', partTypeDesc: 'pt1desc' },
      createdDate: '2023-01-03T22:14:20.081+00:00',
      updatedDate: null,
      quantity: 1,
    },
  ];
}
