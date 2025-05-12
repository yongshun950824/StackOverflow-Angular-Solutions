export interface DataModel {
  id: number;
  title: string;
  userId: number;
}

export const DataModels: DataModel[] = [
  { id: 1, title: 'Option A', userId: 23 },
  { id: 2, title: 'Option B', userId: 24 },
  { id: 3, title: 'Option C', userId: 25 },
  { id: 4, title: 'Option D', userId: 26 }
];
