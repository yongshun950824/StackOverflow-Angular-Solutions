import { Component } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';

/**
 * @title Basic snack-bar
 */
@Component({
  selector: 'snack-bar-overview-example',
  templateUrl: 'snack-bar-overview-example.html',
  styleUrls: ['snack-bar-overview-example.css']
})
export class SnackBarOverviewExample {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  showMessage(
    message: string,
    position = { horizontal: 'right', vertical: 'bottom' }
  ): void {
    const _htmlMessage = 'some message';
    this._snackBar.openFromComponent(SnackbarComponent, {
      data: {
        html: _htmlMessage
      },
      duration: 2000,
      horizontalPosition: position.horizontal as MatSnackBarHorizontalPosition,
      verticalPosition: position.vertical as MatSnackBarVerticalPosition
    });
  }
}

/**  Copyright 2021 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
