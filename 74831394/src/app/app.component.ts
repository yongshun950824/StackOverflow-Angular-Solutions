import { Component, VERSION } from '@angular/core';
import { Tile } from './tile';
import { TileService } from './tile.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private tileService: TileService) {}

  tileData!: Tile[];

  ngOnInit() {
    this.getTileData();
  }

  getTileData() {
    this.tileService.showTile().subscribe((data: any) => {
      this.tileData = data;

      for (let title of this.tileData) {
        for (let child of title.children) {
          console.log('title.children.name :>> ', child.name);
        }
      }
    });
  }
}
