export interface Tile {
  name: string;
  image: string;
  children: { name: string; image: string; url: string }[];
}