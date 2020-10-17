import React, { ChangeEvent, Suspense } from "react";
import { debounce } from "lodash/fp";
import { useSetRecoilState } from "recoil";
import styles from "./style.module.css";
import { queryS } from "../../state";
import { ResultItem } from "../result-item";

export const Search = () => {
  const setQuery = useSetRecoilState(queryS);

  const callToApi = debounce(300, (value: string) => {
    setQuery(value);
  });

  return (
    <div className={styles.container}>
      <label htmlFor="search">Typing For Search </label>
      <input
        className={styles.searchInput}
        id="search"
        type="text"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          callToApi(event.target.value);
        }}
      />
      <Suspense fallback={<div>Loading</div>}>
        <ResultItem />
      </Suspense>
    </div>
  );
};
