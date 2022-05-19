import { useEffect, useState } from "react";
import ExchangeMonitorFinder from "../../services/apis/ExchangeMonitorFinder";
import styles from "./kpi.module.scss";
const showData = ["BTC", "ETH", "USDT", "BNB", "ADA", "XRP", "DOGE", "USDC"];

const MainCriptos = () => {
  const [criptos, setCriptos] = useState({});

  useEffect(() => {
    const fetchCriptos = async () => {
      try {
        const response = await ExchangeMonitorFinder.criptos();
        setCriptos(response);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCriptos();
  }, []);

  let MainKPI;

  if (Object.keys(criptos).length > 0) {
    MainKPI = criptos.data.filter((cripto) => showData.includes(cripto.code));
  }

  return (
    <article className={styles.container}>
      <h1 className={styles.title}>Principales Criptos</h1>
      <div className={styles.grid}>
        {MainKPI &&
          MainKPI.map((kpi) => (
            <div className={styles.card} key={kpi.id}>
              <img className={styles.cardImg} src={kpi.icon} alt="" />
              <div className={styles.cardInfo}>
                <p className={styles.cardName}>{kpi.name}</p>
                <p className={styles.cardRel}>USD/{kpi.code}</p>
                <p className={styles.cardPrice}>{kpi.data.rate}</p>
              </div>
              <div className={styles.change}>
                <p className={styles.cardRel}>Last 24H</p>
                <p
                  className={`${
                    kpi.data.change > 0
                      ? styles.green
                      : kpi.data.change < 0
                      ? styles.red
                      : ""
                  }`}
                >
                  {kpi.data.change}
                </p>
                <p
                  className={`${
                    kpi.data.change > 0
                      ? styles.green
                      : kpi.data.change < 0
                      ? styles.red
                      : ""
                  } ${styles.cardPct}`}
                >
                  {kpi.data.percent}%
                </p>
              </div>
            </div>
          ))}
      </div>
      <small>
        ultima actualización {criptos["date-format"]} - {criptos.calls}
      </small>
    </article>
  );
};

export default MainCriptos;
