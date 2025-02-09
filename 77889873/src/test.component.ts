import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestContainerDirective } from './test-container.directive';
import { OtherContainerDirective } from './other-test-container.directive';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, TestContainerDirective, OtherContainerDirective],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppTestComponent implements AfterViewInit {
  @ViewChild(TestContainerDirective)
  public _testContainerRef!: TestContainerDirective;

  @ViewChild(OtherContainerDirective)
  public _otherContainerRef!: OtherContainerDirective;

  @ViewChildren(TestContainerDirective)
  _testContainerChildren!: QueryList<TestContainerDirective>;

  constructor() {}

  public ngAfterViewInit(): void {
    console.log('_testContainerRef', this._testContainerRef);
    console.log('_otherContainerRef', this._otherContainerRef);

    console.log('_testContainerChildren', this._testContainerChildren);

    setTimeout(() => {
      console.log('_testContainerRef', this._testContainerRef);
      console.log('_otherContainerRef', this._otherContainerRef);
    }, 0);
  }
}
