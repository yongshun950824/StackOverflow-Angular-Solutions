import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabView } from 'primeng/tabview';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit {
  selectedTabIndex: number = 0;

  @ViewChild('tabView') tabView!: TabView;

  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedTabIndex = this.getTabIndex(params['tab']);

      this.cdr.detectChanges();
    });
  }

  getTabIndex(tabName: string): number {
    // Default tab: 0 when tabName is null or undefined
    if (!tabName) return 0;

    let selectedIndex = this.tabView.tabs.findIndex(
      x => x.header.toLowerCase() === tabName.toLowerCase()
    );

    if (selectedIndex > -1) return selectedIndex;

    // Default tab: 0 when tabName is not exist
    return 0;
  }

  onChange(event) {
    this.selectedTabIndex = event.index;
  }
}
