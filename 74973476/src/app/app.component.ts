import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  item = {
    Barcode: 'B-090807',
    BrandId: 'BRD00002',
    CategoryId: 'SUBCAT0100',
    CompanyId: 'COM00002',
    CostPrice: 900,
    Discount: 0,
    ExpDate: '2050-05-14',
    Id: 8,
    MRP: 1200,
    MinShelfLife: 9999,
    PVAT: 0,
    ProductGrossWeight: 0,
    ProductId: 'PRD1671704018388',
    ProductMargin: 0,
    ProductName: 'Hilsha Fish',
    ProductNetWeight: 0,
    ProductQty: 50,
    ProductUnit: 'kg',
    SellingPrice: 1200,
    StockReceivedId: 'SR-1672203680930',
    SupplierId: 'SUP00002',
    TAX: 0,
    TradePrice: 900,
    VAT: 0,
  };

  submitted = false;
  forViewDetails = true;
  i = 0;

  mrpChanged(i, item, $event) {

  }

  nextInput(mrp, $event) {

  }
}
