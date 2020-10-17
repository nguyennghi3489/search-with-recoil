export interface PackageResponse {
  hits: PackageRecord[];
}

export interface PackageRecord {
  objectID: string;
  title: string;
  name: string;
  point: number;
  created_at: string;
  author: string;
  url: string;
}
