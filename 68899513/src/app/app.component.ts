import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VehicleModelService } from './services/vehiclemodel.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vehicles!: any[];
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private vehiclemodelService: VehicleModelService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      make_id: []
    });

    this.loadAllVehicles();
  }

  loadAllVehicles() {
    this.vehiclemodelService.getParameters().subscribe(
      data => {
        this.vehicles = data.results.vehiclemakes;
      },
      error => {
        //this.store.dispatch(loadErrorMessagesSuccess(error));
      }
    );
  }
}
