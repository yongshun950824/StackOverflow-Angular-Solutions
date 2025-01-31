export interface RegionNames {
  br: any;
  bo: any;
}

export const environment: { production: false; region_id: keyof RegionNames } =
  {
    production: false,
    region_id: 'br',
  };

export const region_phrases: RegionNames = {
  br: {
    string1: 'A',
    string2: 'B',
    string3: 'C',
    string4: 'D',
    string5: 'E',
  },
  bo: {
    string1: 'AA',
    string2: 'BB',
    string3: 'CC',
    string4: 'DD',
    string5: 'EE',
  },
};
