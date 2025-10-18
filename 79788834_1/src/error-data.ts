export class IlgErrorData extends Error {
  constructor(
    readonly errorMsg: string,
    readonly shouldRedirectToRoot?: boolean,
    readonly errorId?: number
  ) {
    super(errorMsg);
    this.name = 'IlgErrorData';
  }
}

export function isErrorData(errorObj: unknown): errorObj is IlgErrorData {
  return (errorObj as IlgErrorData).errorMsg !== undefined;
}
