export interface Advertisement {
  name: string;
  description: string;
  images: Image[];
}

export interface Image {
  id: string;
  base64Image: string;
}
