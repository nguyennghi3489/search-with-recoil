import { atom, selector } from "recoil";
import { searchApi } from "../apis/search";
import { PackageRecord } from "../models/package-record";

export const queryS = atom<string>({
  key: "package-record-query",
  default: "",
});
export const packageRecordsS = selector<PackageRecord[]>({
  key: "package-record",
  get: async ({ get }) => {
    const query = get(queryS);
    if (!query) return [];
    const result = await searchApi(query);

    return result;
  },
});
