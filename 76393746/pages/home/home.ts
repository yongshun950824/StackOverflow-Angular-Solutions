import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TestPage } from '../test/test';

export interface Category {
  [category: string]: {
    [key: string]: { id: string; name: string };
  };
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public products: any[] = [
    {
      theater: {
        '30': {
          id: '44',
          name: 'product 30',
        },
      },
      party: {
        '31': {
          id: '45',
          name: 'product 45',
        },
        '32': {
          id: '46',
          name: 'product 46',
        },
      },
    },
  ];

  formattedProducts: any[] = this.products
    .map((x) =>
      Object.entries(x).map((cat) => ({
        category: cat[0],
        data: Object.entries(cat[1]).map((y) => ({
          categoryId: y[0],
          product: y[1],
        })),
      }))
    )
    .reduce((acc: any[], cur) => acc.concat(cur), []);

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {
    console.log(this.formattedProducts);
  }
}

interface userData {
  name: string;
  email: string;
  testType: string;
}
