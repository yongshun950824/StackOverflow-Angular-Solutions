import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  list: PartsChildInfo[] = [
    { name: 'GA8-0608', materialName: 'SS', thickNess: 1 },
    { name: '05F1-051', materialName: 'SUS', thickNess: 2 },
    { name: '2B73-002', materialName: 'AL', thickNess: 3 },
    { name: '01-20155', materialName: 'SS', thickNess: 1 },
    { name: '02MEG099', materialName: 'SUS', thickNess: 2 },
  ];

  testChildList: PartGroupInfo[] = [];

  ngOnInit() {
    this.solution2();
  }

  solution2() {
    this.list.forEach((item) => {
      var i = this.testChildList.findIndex(
        (x) =>
          x.materialName == item.materialName && x.thickNess == item.thickNess
      );

      if (i == -1)
        this.testChildList.push({
          materialName: item.materialName,
          thickNess: item.thickNess,
        });
    });

    console.log(this.testChildList);
  }
}

export class PartsChildInfo {
  name: string;
  materialName: string;
  thickNess: number;
}

export class PartGroupInfo {
  materialName: string;
  thickNess: number;
}
