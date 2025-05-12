import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from './item.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  wareHouseGroup: FormGroup;
  warehouse: any = { id: 1, sideId: 100 };
  itemDetails!: any;
  item: any = { uid: 1 };

  name = 'Angular ' + VERSION.major;

  constructor(
    private formBuilder: FormBuilder,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.wareHouseGroup = this.formBuilder.group({
      id: this.formBuilder.control(this.warehouse.id),

      sideId: this.formBuilder.control(this.warehouse.sideId.toString(), [
        Validators.required,
        Validators.min(1)
      ]),
      itemDetail: this.formBuilder.group({
        Item1Qty: this.formBuilder.control(''),
        item2Qty: this.formBuilder.control(''),
        item3Qty: this.formBuilder.control('')
      })
    });

    this.itemService.getItemDetails(this.item.uid).subscribe(result => {
      this.itemDetails = result != null ? result : null;

      if (!result) return;

      this.wareHouseGroup.controls['itemDetail'].patchValue({
        Item1Qty: this.itemDetails.item1Qty,
        item2Qty: this.itemDetails.item2Qty,
        item3Qty: this.itemDetails.item3Qty
      });

      console.log(this.itemDetails);
    });
  }
}
