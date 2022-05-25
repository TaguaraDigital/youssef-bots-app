import { DocSection, DocTitle } from './doc.Styles';
const Doc = () => {
  return (
    <DocSection>
      <DocTitle>DOCUMENTACIÓN</DocTitle>

      <p>
        Esta página funciona similar a la página inicial o landing page{' '}
        <b>HOME</b>
      </p>

      <p>
        En la barra lateral están las opciones disponibles y se adaptan de
        acuerdo a la página activa usando el archivo de <b>dataRouteSidebar</b>{' '}
        que contiene la información de los títulos, rutas e iconos a usar en el
        menú lateral. Se utiliza <b>framer-motion</b>
      </p>

      <p>
        En header se tienen las opciones a donde se puede navegar y se usa el
        archivo <b>data</b> para construir el menú con link sencillo <b>Doc</b>,
        dropdown <b>Dashboard</b> y el mega menú <b>Services</b> los cuales se
        activan al pasar el cursor por encima.
      </p>

      <p>
        A la página <b>Manage Shipment</b> se puede llegar usando la opción
        Manage Shipment de la barra lateral, o usando la opción del mega menú
        services > services Group 1 > Manage Shipment o colocando la ruta
        https://youssef-bots-app.vercel.app/shipment
      </p>

      <p>
        La página <b>Manage Shipment</b> el menú lateral se construyó para
        simular al que se solicita en el formato que me fue suministrado, pero
        no están funcionando, es decir los filtros y búsqueda solo son
        referenciales Para la maquetación se utiliza grid y flexbox y datos que
        se encuentran en el archivo <b>shipmentData</b>
      </p>
      <p>
        A la página <b>Dashboard</b> se puede llegar usando la opción Dashbord
        de la barra lateral, o usando la opción del dropdown menú Dashbord >
        Dashbord o colocando la ruta
        https://youssef-bots-app.vercel.app/dashbord{' '}
      </p>
      <p>
        La página <b>Dashboard</b> trate de simular el Dashboard 1 que se
        muestra en la página modelo que se me suministro. Se hicieron algunas
        modificaciones para mostrar el consumo de api.
      </p>
      <p>
        El cuadro con las <b>Principales Criptos </b> son los precios de las
        principales criptomonedas que suministra la api <b> EXCHANGEMONITOR</b>
      </p>
      <p>
        La tabla de usuarios que se muestran es el resultado del consumo de la
        api <b> jsonplaceholder.typicode.com/users</b>
      </p>
      <p>
        El grafico de las tasas de cambio se construye con la librería de{' '}
        <b>Chart-2</b> con datos que suminitras una api creada por mí en{' '}
        <b>node.js </b> y base de datos <b>mysql</b>.
      </p>
      <p>
        En la tabla de tasas de cambio es un <b>CRUD</b> con el uso de api
        creada por mí en <b>node.js </b> y base de datos <b>mysql</b>
      </p>
    </DocSection>
  );
};

export default Doc;
