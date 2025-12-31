import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {
  patchState,
  signalStore,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { tapResponse } from '@ngrx/operators';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {
  debounceTime,
  exhaustMap,
  filter,
  map,
  of,
  pairwise,
  pipe,
  share,
  startWith,
  switchMap,
  take,
  tap,
  timer,
} from 'rxjs';
import { isErrorData } from './error-data';
import { FakeUserVerificationService, VerificationData } from './fake-service';

type SignUpState = {
  isCodeSent: boolean;
  inProgress: boolean;
  thingy: string | null;
  /**
   * When email verification succeeded
   *
   * @type {boolean}
   */
  emailVerified: boolean;
  /**
   * When email verification failed (wrong code provided)
   *
   * @type {boolean}
   */
  veriCodeIsWrong: boolean;
};

const initialState: SignUpState = {
  isCodeSent: false,
  inProgress: false,
  thingy: 'some thingy',
  emailVerified: false,
  veriCodeIsWrong: false,
};

export const SignUpStore = signalStore(
  withState(initialState),
  withMethods((store, userVerifySvc = inject(FakeUserVerificationService)) => {
    return {
      clearCodeVerified(): void {
        patchState(store, (state) => ({
          isCodeSent: false,
          emailVerified: false,
          veriCodeIsWrong: false,
          thingy: null,
        }));
      },

      sendVerificationCode: rxMethod<string>(
        pipe(
          debounceTime(300),
          // this prevents user from sending verification code again to the same email
          // so, let's not do this  ===>  distinctUntilChanged(),
          tap(() => patchState(store, { inProgress: true })),
          switchMap((email) => {
            return userVerifySvc.sendVerificationCode(email).pipe(
              tapResponse({
                next: (thingy) => {
                  patchState(store, {
                    thingy,
                    emailVerified: false,
                    isCodeSent: !!thingy,
                    inProgress: false,
                  });
                },
                error: (err) => {
                  let isCodeSent = false;
                  if (isErrorData(err)) {
                    isCodeSent = err.errorId === 204;
                  }
                  patchState(store, { inProgress: false, isCodeSent });
                },
              })
            );
          })
        )
      ),

      verifyCode: rxMethod<{ email: string; code: string }>(
        pipe(
          // debounceTime(300),
          tap((value) => console.dir),
          tap(() => patchState(store, { inProgress: true })),
          map(({ email, code }): VerificationData => {
            const thingy = store.thingy();
            if (!thingy) {
              throw new Error('Failed to verifyCode: thingy is empty');
            }
            return { email, code, thingy };
          }),
          exhaustMap((veriData) => {
            return userVerifySvc.verifyEmail(veriData).pipe(
              tapResponse({
                next: (isVerified) => {
                  console.dir(isVerified);
                  patchState(store, {
                    emailVerified: isVerified,
                    veriCodeIsWrong: !isVerified,
                    inProgress: false,
                  });
                },
                error: (err) => patchState(store, { inProgress: false }),
              })
            );
          })
        )
      ),
    };
  })
);
