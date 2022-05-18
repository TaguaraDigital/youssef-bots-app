import { DocSection, DocTitle } from "./setting.Styles";
const Doc = () => {
  return (
    <DocSection>
      <DocTitle>DOCUMENTATION</DocTitle>
      <p>Trate de hace algo parecido al Dashboard 1</p>
      <p>
        En el Header se muestras los menu desplegables sencillo y un mega menu.
      </p>
      <p>
        Lo indicadores que se muestran de una API que devuelve diferentes
        indicadores y precios de criptomonedas.
      </p>
      <p>
        Solo se muestran algunos la tasa de cambio Bolivar - Dolar en algunos
        bancos
      </p>
      <p>
        La tabla de usuarios que se muestran son los que devuelve la Api de
        <b> jsonplaceholder.typicode.com/users</b>
      </p>
      <p>
        El grafico de las tasas de cambio se construye con la libreria de
        Chart-2 y la data son recuperado de una api que yo cree en node.js y
        base de datos mysql
      </p>
      <p>
        En la tabla de tasas de cambio es un crud de tasa de cambio sobre la api
        que cree en nodejs
      </p>
    </DocSection>
  );
};

export default Doc;
