import styles from "./userLists.module.scss";

const ExchangeRateTableHeader = () => {
  return (
    <thead className={styles.tableHead}>
      <tr className={styles.tableRow}>
        <th className={styles.tableCell}> Id </th>
        <th className={styles.tableCell}> Name </th>
        <th className={styles.tableCell}> Email </th>
        <th className={styles.tableCell}> Phone </th>
      </tr>
    </thead>
  );
};

export default ExchangeRateTableHeader;
