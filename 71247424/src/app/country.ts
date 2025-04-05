export const COUNTRY_CODE = [
  {
    name: 'Afghanistan',
    dialCode: '+93',
    code: 'AF',
  },
  {
    name: 'Aland Islands',
    dialCode: '+358',
    code: 'AX',
  },
];

export interface COUNTRY {
  name: string;
  dialCode: string;
  code?: string;
}
