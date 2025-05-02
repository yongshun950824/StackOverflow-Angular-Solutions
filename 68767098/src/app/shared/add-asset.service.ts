import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddAssetService {
  GetAssets(): Observable<any[]> {
    let assets: any[] = [
      {
        assetId: 1,
        assetName: 'Item A',
        cpuName: 'CPU A',
        hddName: 'HDD A'
      },
      {
        assetId: 2,
        assetName: 'Item B',
        cpuName: 'CPU B',
        hddName: 'HDD B'
      },
      {
        assetId: 3,
        assetName: 'Item C',
        cpuName: 'CPU C',
        hddName: 'HDD C'
      }
    ];

    return of(assets);
  }
}
