import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { of, BehaviorSubject } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { AudioService } from './audio-service';

/**
 * @title Basic select
 */
@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    AsyncPipe,
    JsonPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectOverviewExample {
  public readonly audioService = inject(AudioService);

  readonly selectedDevice$;
  readonly deviceList$;

  constructor() {
    this.selectedDevice$ = this.audioService.getDevice$(
      this.audioService.getCurrentDeviceId$()
    );
    this.selectedDevice$.subscribe((val: any) => console.log('val', val))
    this.deviceList$ = this.audioService.getDevices$();
  }

  onSelectionChange(device: MediaDeviceInfo): void {
    this.audioService.setDeviceId(device.deviceId);
  }

  compare(device1: any, device2: any) {
    return device1?.deviceId === device2?.deviceId;
  }
}

/**  Copyright 2025 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
