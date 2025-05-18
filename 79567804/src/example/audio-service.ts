import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, defer, of } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  shareReplay,
  switchMap,
} from 'rxjs/operators';

export const DEFAULT_AUDIO_OUTPUT_DEVICE: MediaDeviceInfo = {
  deviceId: 'default',
  groupId: '',
  kind: 'audiooutput',
  label: 'default-audio-label',
  toJSON: () => '',
};

export const DEVICE_1: MediaDeviceInfo = {
  deviceId: '1',
  groupId: '',
  kind: 'audiooutput',
  label: 'device-1',
  toJSON: () => '',
};

export const DEVICE_2: MediaDeviceInfo = {
  deviceId: '2',
  groupId: '',
  kind: 'audiooutput',
  label: 'device-2',
  toJSON: () => '',
};

@Injectable({ providedIn: 'root' })
export class AudioService {
  private readonly devices$: Observable<MediaDeviceInfo[]>;
  private readonly savedDeviceId$ = new BehaviorSubject<string>('');

  constructor() {
    const deviceChange$ = new BehaviorSubject<void>(undefined);
    if (navigator.mediaDevices) {
      navigator.mediaDevices.ondevicechange = () => {
        deviceChange$.next();
      };
    }

    const mediaDevices$ = deviceChange$.pipe(
      switchMap(() => {
        this.fakeEnumerateDevices().then((result) =>
          console.log('result', result)
        );
        return this.fakeEnumerateDevices();
        //if (!navigator.mediaDevices || !this.fakeEnumerateDevices) {
        //  return [];
        //}

        return navigator.mediaDevices.enumerateDevices();
      }),
      shareReplay(1)
    );

    this.devices$ = mediaDevices$.pipe(
      map((devices) => {
        //console.log('mediaDevices', devices)
        return devices.filter((device) => {
          return device.kind === 'audiooutput' && device.label !== '';
        });
      }),
      map((devices) => {
        if (devices.length === 0) {
          devices = [DEFAULT_AUDIO_OUTPUT_DEVICE];
        }
        return devices;
      })
    );
  }

  getCurrentDeviceId$(): Observable<string> {
    return combineLatest([this.devices$, this.savedDeviceId$]).pipe(
      map(async ([devices]) => {
        const savedDeviceId = localStorage.getItem('audio_output_id');
        //console.log('savedDeviceId', savedDeviceId)
        const currentAvailableDeviceIds = devices.map((d) => d.deviceId);
        //console.log('currentAvailableDeviceIds', currentAvailableDeviceIds)
        if (currentAvailableDeviceIds.includes(savedDeviceId || '')) {
          //console.log('savedDeviceId', savedDeviceId)
          return savedDeviceId!;
        }

        return currentAvailableDeviceIds[0];
      }),
      switchMap((deviceIdPromise) => defer(() => deviceIdPromise)),
      distinctUntilChanged()
    );
  }

  getDevice$(id$: Observable<string>): Observable<MediaDeviceInfo | null> {
    return combineLatest([id$, this.fakeEnumerateDevices()]).pipe(
      map(([id, devices]) => {
        //console.log('id', id);
        //console.log('devices', devices);
        //console.log(devices.find((device) => device.deviceId === id) || null);
        return devices.find((device) => device.deviceId === id) || null;
      })
    );
  }

  setDeviceId(deviceId: string): void {
    localStorage.setItem('audio_output_id', deviceId);

    this.savedDeviceId$.next(deviceId);
  }

  getDevices$(): Observable<MediaDeviceInfo[]> {
    return this.devices$;
  }

  // meant to fake navigator.mediaDevices.enumerateDevices()
  async fakeEnumerateDevices(): Promise<MediaDeviceInfo[]> {
    return Promise.resolve(
      navigator.mediaDevices.enumerateDevices().then((devices) => {
        return devices.map((device, i) => {
          console.log(`device_${i}`, device);
          return {
            ...device,
            kind: device.kind,
            groupId: device.groupId,
            deviceId: `${i}`,
            label: `${device.kind}_${i}`,
          };
        });
      })
    );

    return new Promise((resolve) => {
      resolve([DEVICE_1, DEVICE_2]);
    });
  }
}
