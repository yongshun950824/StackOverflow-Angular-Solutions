import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export type VerificationData = {
  code: string;
  email: string;
  thingy: string;
};

@Injectable({
  providedIn: 'root',
})
export class FakeUserVerificationService {
  sendVerificationCode(email: string): Observable<string | null> {
    return of('whatever').pipe(delay(500));
  }

  verifyEmail(veriData: VerificationData): Observable<boolean> {
    let isVerified = false;
    if (veriData.code === '888555') isVerified = true;
    console.log(`verification result: ${isVerified}`);
    return of(isVerified).pipe(delay(1000));
  }
}
