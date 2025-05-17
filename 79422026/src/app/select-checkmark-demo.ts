import { Component, OnInit, ViewChild } from '@angular/core';
import { ImportsModule } from './imports';
import { Select } from 'primeng/select';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'select-checkmark-demo',
  templateUrl: './select-checkmark-demo.html',
  standalone: true,
  imports: [ImportsModule],
})
export class SelectCheckmarkDemo implements OnInit {
  cities: City[] | undefined;

  selectedCity: City | undefined;

  @ViewChild(Select) mySelect: Select;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
  }

  ngAfterViewInit() {
    this.mySelect.onOptionSelect = (
      event,
      option,
      isHide = true,
      preventChange = false
    ) => {
      if (!this.mySelect.isSelected(option)) {
        const value = this.mySelect.getOptionValue(option);
        this.mySelect.updateModel(value, event);
        this.mySelect.focusedOptionIndex.set(
          this.mySelect.findSelectedOptionIndex()
        );
        preventChange === false &&
          this.mySelect.onChange.emit({ originalEvent: event, value: value });
      } else {
        this.mySelect.clear();
      }

      if (isHide) {
        this.mySelect.hide(true);
      }
    };
  }
}
