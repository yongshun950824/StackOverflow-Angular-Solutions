export interface Track {
  tracks: {
    track: [
      {
        name: string;
        duration: number;
        listeners: number;
        mbid: string;
        url: string;
        streamable: {
          '#text': number;
          fulltrack: number;
        };
        artist: {
          name: string;
          mbid: string;
          url: string;
        };
        image: [
          {
            '#text': string;
            size: string;
          },
          {
            '#text': string;
            size: string;
          },
          {
            '#text': string;
            size: string;
          },
          {
            '#text': string;
            size: string;
          }
        ];
        '@attr': {
          rank: number;
        };
      }
    ];
    '@attr': {
      country: string;
      page: number;
      perPage: number;
      totalPages: number;
      total: number;
    };
  };
}
