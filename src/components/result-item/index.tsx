import moment from "moment";
import React from "react";
import { useRecoilValue } from "recoil";
import { packageRecordsS, queryS } from "../../state";
import styles from "./style.module.css";

function getHighlightedText(text: string, highlight: string) {
  if (!text) return null;
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span>
      {parts.map((part) =>
        part === highlight ? (
          <span className={styles.hightlight}>{part}</span>
        ) : (
          part
        )
      )}
    </span>
  );
}
export const ResultItem = () => {
  const query = useRecoilValue(queryS);
  const packageRecords = useRecoilValue(packageRecordsS);
  console.log(packageRecords);
  return (
    <div className={styles.resultContainer}>
      {packageRecords.map((item) => {
        return (
          <div className={styles.resultItem} key={item.objectID}>
            <a
              href={item.url}
              className={styles.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              {getHighlightedText(item.title, query)}
            </a>
            <div className={styles.info}>
              <span>
                Author: <i>{item.author}</i>
              </span>
              <span>Created At: {moment(item.created_at).format("L")}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
