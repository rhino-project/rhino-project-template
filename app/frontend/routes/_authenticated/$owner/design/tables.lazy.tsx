import { createLazyFileRoute } from '@tanstack/react-router';
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';

import {
  Table,
  CellBadge,
  CellBoolean,
  CellBooleanIcon,
  CellCountry,
  CellCurrency,
  CellDate,
  CellDateTime,
  CellDateTimeDistance,
  CellDateTimeRelative,
  CellFloat,
  CellImage,
  CellInteger,
  CellLink,
  CellLinkEmail,
  CellLinkTelephone,
  CellReference,
  CellString,
  CellTime
} from '@rhino-project/ui-heroui';

export const Route = createLazyFileRoute(
  '/_authenticated/$owner/design/tables'
)({
  component: Tables
});

const columnHelper = createColumnHelper();

const data1 = [
  {
    CellBadge: '1',
    CellBoolean: true,
    CellBooleanIcon: true,
    CellCountry: 'BR',
    CellCurrency: 1.99,
    CellDate: new Date().toISOString(),
    CellDateTime: new Date().toISOString(),
    CellDateTimeDistance: new Date().toISOString(),
    CellDateTimeRelative: new Date().toISOString()
  },
  {
    CellBadge: '1',
    CellBoolean: false,
    CellBooleanIcon: false,
    CellCountry: 'CA',
    CellCurrency: 1.99,
    CellDate: new Date().toISOString(),
    CellDateTime: new Date().toISOString(),
    CellDateTimeDistance: new Date().toISOString(),
    CellDateTimeRelative: new Date().toISOString()
  },
  {
    CellBadge: '2',
    CellBoolean: true,
    CellBooleanIcon: true,
    CellCountry: 'US',
    CellCurrency: 1.99,
    CellDate: new Date().toISOString(),
    CellDateTime: new Date().toISOString(),
    CellDateTimeDistance: new Date().toISOString(),
    CellDateTimeRelative: new Date().toISOString()
  },
  {
    CellBadge: '3',
    CellBoolean: true,
    CellBooleanIcon: true,
    CellCountry: 'MX',
    CellCurrency: 1.99,
    CellDate: new Date().toISOString(),
    CellDateTime: new Date().toISOString(),
    CellDateTimeDistance: new Date().toISOString(),
    CellDateTimeRelative: new Date().toISOString()
  }
];

const data2 = [
  {
    CellFloat: 3.1415981,
    CellImage: 'https://www.rhino-project.org/img/rhino-red.svg',
    CellInteger: 889,
    CellLink: 'https:/rhino-project.org',
    CellLinkEmail: 'dont.send@rhino-project.org',
    CellLinkTelephone: '+1555555555',
    CellReference: {
      display_name: 'A model'
    },
    CellString: 'String 1',
    CellTime: new Date().toISOString()
  },
  {
    CellFloat: 8.0577,
    CellImage:
      'https://upload.wikimedia.org/wikipedia/commons/8/82/Antonio_Vaz_island_-_Recife%2C_Pernambuco%2C_Brazil_%28cropped%29.jpg',
    CellInteger: 1537,
    CellLink: 'https://rhino-project.org',
    CellLinkEmail: 'dont.send@rhino-project.org',
    CellLinkTelephone: '+14444444',
    CellReference: {
      display_name: 'Another model'
    },
    CellString: 'String 12',
    CellTime: new Date(1537, 3, 12).toISOString()
  }
];

const columns1 = [
  { Cell: CellBadge, name: 'CellBadge' },
  { Cell: CellBooleanIcon, name: 'CellBooleanIcon' },
  { Cell: CellBoolean, name: 'CellBoolean' },
  { Cell: CellCountry, name: 'CellCountry' },
  { Cell: CellCurrency, name: 'CellCurrency' },
  { Cell: CellDate, name: 'CellDate' },
  { Cell: CellDateTime, name: 'CellDateTime' },
  { Cell: CellDateTimeDistance, name: 'CellDateTimeDistance' },
  { Cell: CellDateTimeRelative, name: 'CellDateTimeRelative' }
].map((cell) =>
  columnHelper.display({
    id: cell.name,
    header: cell.name,
    cell: (info) => <cell.Cell getValue={() => info.row.original[cell.name]} />,
    enableSorting: true
  })
);

const columns2 = [
  { Cell: CellFloat, name: 'CellFloat' },
  { Cell: CellImage, name: 'CellImage' },
  { Cell: CellInteger, name: 'CellInteger' },
  { Cell: CellLink, name: 'CellLink' },
  { Cell: CellLinkEmail, name: 'CellLinkEmail' },
  { Cell: CellLinkTelephone, name: 'CellLinkTelephone' },
  { Cell: CellReference, name: 'CellReference' },
  { Cell: CellString, name: 'CellString' },
  { Cell: CellTime, name: 'CellTime' }
].map((cell) =>
  columnHelper.display({
    id: cell.name,
    header: cell.name,
    cell: (info) => <cell.Cell getValue={() => info.row.original[cell.name]} />,
    enableSorting: true
  })
);

function Tables() {
  const table1 = useReactTable({
    data: data1,
    columns: columns1,
    getCoreRowModel: getCoreRowModel(),
    enableMultiSort: true,
    enableSortingRemoval: false,
    manualSorting: true,
    state: {
      sorting: false
    },
    onSortingChange: () => {}
  });
  const table2 = useReactTable({
    data: data2,
    columns: columns2,
    getCoreRowModel: getCoreRowModel(),
    enableMultiSort: true,
    enableSortingRemoval: false,
    manualSorting: true,
    state: {
      sorting: false
    },
    onSortingChange: () => {}
  });
  return (
    <>
      <Table table={table1} />
      <Table table={table2} />
    </>
  );
}
