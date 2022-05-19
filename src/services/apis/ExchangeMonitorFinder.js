const ExchangeMonitorFinder = {};

const URL_DIVISAS = `https://exchangemonitor.net/api/ve?user=${process.env.REACT_APP_EXCHANGEMONITOR_USER}&token=${process.env.REACT_APP_EXCHANGEMONITOR_TOKEN}&currency=USD`;
const URL_CRIPTOS = `https://exchangemonitor.net/api/criptos?user=${process.env.REACT_APP_EXCHANGEMONITOR_USER}&token=${process.env.REACT_APP_EXCHANGEMONITOR_TOKEN}&currency=USD`;

ExchangeMonitorFinder.all = async () => {
  const response = await fetch(URL_DIVISAS);
  return await response.json();
};

ExchangeMonitorFinder.criptos = async () => {
  const response = await fetch(URL_CRIPTOS);
  return await response.json();
};

export default ExchangeMonitorFinder;
