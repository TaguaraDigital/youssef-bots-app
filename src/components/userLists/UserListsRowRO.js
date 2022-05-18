import styles from "./userLists.module.scss";

const ExchangeRateRowRO = ({ user }) => {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.tableCell} data-col-title="Id">
        {user.id}
      </td>
      <td className={styles.tableCell} data-col-title="Name">
        {user.name}
      </td>

      <td className={styles.tableCell} data-col-title="Email">
        {user.email}
      </td>
      <td className={styles.tableCell} data-col-title="Phone">
        {user.phone}
      </td>
    </tr>
  );
};

export default ExchangeRateRowRO;
