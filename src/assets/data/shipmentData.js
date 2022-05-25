import {
  FaChartBar,
  FaRegImage,
  FaRegMoneyBillAlt,
  FaShip,
  FaTachometerAlt,
  FaTrailer,
} from 'react-icons/fa';

export const shipmentsData = [
  {
    shipment_number: '123456',
    origin: 'No. 18 XINGYU ROAD KONGGANG NEW AREA LONGWAN DISTRICT',
    provider: 'CH ROBHINSON',
    destination: 'No. 19 CARACAS ROAD KONGGANG NEW AREA LONGWAN DISTRICT',
    terms: 'Prepaid',
    cost: 1500,
    total_weight: 3405,
    qty: 15,
    bill: 456789,
    status: 'New',
    expented_ship_date: '',
  },
  {
    shipment_number: '123489',
    origin: 'No. 18 XINGYU ROAD KONGGANG NEW AREA LONGWAN DISTRICT',
    provider: 'CH ROBHINSON',
    destination: 'No. 20 VALENCIA ROAD KONGGANG NEW AREA LONGWAN DISTRICT',
    terms: 'Prepaid',
    cost: 1500,
    total_weight: 3405,
    qty: 15,
    bill: 456790,
    status: 'New',
    expented_ship_date: '',
  },
  {
    shipment_number: '123589',
    origin: 'No. 18 XINGYU ROAD KONGGANG NEW AREA LONGWAN DISTRICT',
    provider: 'CH ROBHINSON',
    destination:
      'No. 21 PUERTO LA CRUZ ROAD KONGGANG NEW AREA LONGWAN DISTRICT',
    terms: 'Prepaid',
    bill: 456890,
    status: 'New',
    expented_ship_date: '',
  },
  {
    shipment_number: '123689',
    origin: 'No. 18 XINGYU ROAD KONGGANG NEW AREA LONGWAN DISTRICT',
    provider: 'CH ROBHINSON',
    destination: 'No. 22 MARGARITA ROAD KONGGANG NEW AREA LONGWAN DISTRICT',
    terms: 'Prepaid',
    bill: 456990,
    status: 'New',
    expented_ship_date: '',
  },
];

export const headerData = [
  {
    id: '01',
    amount: 15002,
    title: 'Total Shipment',
    icon: <FaShip />,
  },
  {
    id: '02',
    amount: 65033,
    title: 'Total Cost',
    icon: <FaTachometerAlt />,
  },
  {
    id: '03',
    amount: 65033,
    title: 'Consolidation',
    icon: <FaTrailer />,
  },
  {
    id: '04',
    amount: 65033,
    title: 'Total Cost',
    icon: <FaRegMoneyBillAlt />,
  },
  {
    id: '05',
    amount: 65033,
    title: 'Total Cost',
    icon: <FaRegImage />,
  },
  {
    id: '06',
    amount: 65033,
    title: 'Total Cost',
    icon: <FaChartBar />,
  },
];
