import { Component, VERSION } from '@angular/core';
import { PickListService } from './pick-list.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [PickListService],
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  searchString = '';
  accountId = 0;
  regions: {id: number, description: string}[] = [];
  territoryAssignmentFields = {
    region: 0,
  };

  constructor(private _pickListService: PickListService) {}

  ngOnInit() {
    this.getregion();
  }

  getregion() {
    this.searchString = '';
    this._pickListService
      .getregion(this.accountId, this.searchString)
      .subscribe(
        (res) => {
          let data: any[] = res.data.map((x: any) => {
            return {
              id: parseInt(x.description.split('-')[0].trim()),
              description: x.description
            };
          });

          this.regions = data;
          console.log(' this.regions', this.regions);
        },
        (err) => {
          console.log('Filtered Territory Assignments Region Error');
          console.log(err);
        }
      );
  }
}
