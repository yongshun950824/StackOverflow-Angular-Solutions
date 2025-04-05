import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  hotelRooms = [
    {
      price: {
        total: 250,
        currency: 'USD',
      },
      category: 'Economy',
      subcategory: 'single',
    },
    {
      price: {
        total: 350,
        currency: 'USD',
      },
      category: 'Economy',
      subcategory: 'double',
    },
    {
      price: {
        total: 450,
        currency: 'USD',
      },
      category: 'Economy',
      subcategory: 'family',
    },
    {
      price: {
        total: 400,
        currency: 'USD',
      },
      category: 'Premium',
      subcategory: 'single',
    },
    {
      price: {
        total: 500,
        currency: 'USD',
      },
      category: 'Premium',
      subcategory: 'double',
    },
    {
      price: {
        total: 600,
        currency: 'USD',
      },
      category: 'Deluxe',
      subcategory: 'single',
    },
    {
      price: {
        total: 700,
        currency: 'USD',
      },
      category: 'Deluxe',
      subcategory: 'double',
    },
  ];

  ngOnInit() {
    let groupByCategories = [];

    groupByCategories = this.hotelRooms.reduce(function (previous, current) {
      previous[current.category] = previous[current.category] || [];

      let lowest = previous[current.category].find(
        (x) => x.price.total < current.price.total
      );

      if (!lowest) {
        previous[current.category] = [];
        previous[current.category].push(current);
      }

      return previous;
    }, Object.create(null));

    this.hotelRooms = [].concat(
      ...Object.keys(groupByCategories).map((key) => {
        return groupByCategories[key];
      })
    );
  }
}
