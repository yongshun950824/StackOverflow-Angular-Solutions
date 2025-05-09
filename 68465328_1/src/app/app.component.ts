import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  OnInit
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './material.scss']
})
export class AppComponent implements OnInit {
  name = 'Angular 4';

  reorderable: boolean = true;
  loadingIndicator: boolean = true;

  @ViewChild('batterTemplate') batterTemplate!: TemplateRef<any>;
  @ViewChild('toppingTemplate') toppingTemplate!: TemplateRef<any>;

  rows = [
    {
      id: '0001',
      type: 'donut',
      name: 'Cake',
      ppu: 0.55,
      batters: {
        batter: [
          { id: '1001', type: 'Blueberry,Regular,Chocolate,Devil & Food' }
        ]
      },
      topping: [
        { id: '5001', type: 'None' },
        { id: '5002', type: 'Glazed' },
        { id: '5005', type: 'Sugar' },
        { id: '5007', type: 'Powdered Sugar' },
        { id: '5006', type: 'Chocolate with Sprinkles' },
        { id: '5003', type: 'Chocolate' },
        { id: '5004', type: 'Maple' }
      ]
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Ice Cream',
      ppu: 0.55,
      batters: {
        batter: [
          { id: '1002', type: 'Blueberry,Regular,Chocolate,Devil & Food' }
        ]
      },
      topping: [
        { id: '5001', type: 'None' },
        { id: '5002', type: 'Glazed' },
        { id: '5005', type: 'Sugar' },
        { id: '5007', type: 'Powdered Sugar' },
        { id: '5006', type: 'Chocolate with Sprinkles' },
        { id: '5003', type: 'Chocolate' },
        { id: '5004', type: 'Maple' }
      ]
    },
    {
      id: '0001',
      type: 'donut',
      name: 'Chocolate',
      ppu: 0.55,
      batters: {
        batter: [
          { id: '1003', type: 'Blueberry,Regular,Chocolate,Devil & Food' }
        ]
      },
      topping: [
        { id: '5001', type: 'None' },
        { id: '5002', type: 'Glazed' },
        { id: '5005', type: 'Sugar' },
        { id: '5007', type: 'Powdered Sugar' },
        { id: '5006', type: 'Chocolate with Sprinkles' },
        { id: '5003', type: 'Chocolate' },
        { id: '5004', type: 'Maple' }
      ]
    }
  ];

  columns = [];

  ngOnInit() {
    this.columns = [
      { name: 'Name', prop: 'name' },
      { name: 'Batters', prop: 'batters.batter', cellTemplate: this.batterTemplate },
      { name: 'Toppings', prop: 'topping', cellTemplate: this.toppingTemplate }
    ];
  }
}
