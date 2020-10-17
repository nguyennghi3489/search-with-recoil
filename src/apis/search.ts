import { PackageRecord, PackageResponse } from "../models/package-record";

export const searchApi = (query: string): Promise<PackageRecord[]> =>
  fetch("https://hn.algolia.com/api/v1/search?query=" + query)
    .then((data: Response) => data.json())
    .then((data: PackageResponse) => data.hits);
