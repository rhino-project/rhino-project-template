import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import { useForm } from 'react-hook-form';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { Form, NavItem } from 'reactstrap';
import {
  Button,
  CloseButton,
  IconButton,
  LinkButton,
  SubmitButton,
  Tab,
  Tabs
} from '@rhino-project/ui-nextui';
import { FormProvider } from '@rhino-project/core/components/forms';
import {
  FieldGroupBoolean,
  FieldGroupHorizontalBoolean,
  FieldGroupFloatingBoolean
} from '@rhino-project/ui-nextui';
import {
  FieldGroupCountry,
  FieldGroupFloatingCountry,
  FieldGroupHorizontalCountry
} from '@rhino-project/ui-nextui';
import {
  FieldGroupCurrency,
  FieldGroupFloatingCurrency,
  FieldGroupHorizontalCurrency
} from '@rhino-project/ui-nextui';
import {
  FieldGroupDate,
  FieldGroupFloatingDate,
  FieldGroupHorizontalDate
} from '@rhino-project/ui-nextui';
import {
  FieldGroupDateTime,
  FieldGroupFloatingDateTime,
  FieldGroupHorizontalDateTime
} from '@rhino-project/ui-nextui';
import {
  FieldGroupFile,
  FieldGroupHorizontalFile
} from '@rhino-project/ui-nextui';
import {
  FieldGroupFloat,
  FieldGroupFloatingFloat,
  FieldGroupHorizontalFloat
} from '@rhino-project/ui-nextui';
import {
  FieldGroupInteger,
  FieldGroupFloatingInteger,
  FieldGroupHorizontalInteger
} from '@rhino-project/ui-nextui';
import {
  FieldGroupPassword,
  FieldGroupFloatingPassword,
  FieldGroupHorizontalPassword
} from '@rhino-project/ui-nextui';
import {
  FieldGroupPhone,
  FieldGroupFloatingPhone,
  FieldGroupHorizontalPhone
} from '@rhino-project/ui-nextui';
import {
  FieldGroupSelectControlled,
  FieldGroupFloatingSelectControlled,
  FieldGroupHorizontalSelectControlled
} from '@rhino-project/ui-nextui';
import {
  FieldGroupString,
  FieldGroupFloatingString,
  FieldGroupHorizontalString
} from '@rhino-project/ui-nextui';
import {
  FieldGroupText,
  FieldGroupFloatingText,
  FieldGroupHorizontalText
} from '@rhino-project/ui-nextui';
import {
  FieldGroupTime,
  FieldGroupFloatingTime,
  FieldGroupHorizontalTime
} from '@rhino-project/ui-nextui';
import {
  FieldGroupYear,
  FieldGroupFloatingYear,
  FieldGroupHorizontalYear
} from '@rhino-project/ui-nextui';

import { Table } from '@rhino-project/ui-nextui';
import { CellBadge } from '@rhino-project/ui-nextui';
import { CellBoolean } from '@rhino-project/ui-nextui';
import { CellCountry } from '@rhino-project/ui-nextui';
import { CellCurrency } from '@rhino-project/ui-nextui';
import { CellDate } from '@rhino-project/ui-nextui';
import { CellDateTime } from '@rhino-project/ui-nextui';
import { CellDateTimeDistance } from '@rhino-project/ui-nextui';
import { CellDateTimeRelative } from '@rhino-project/ui-nextui';
import { CellFloat } from '@rhino-project/ui-nextui';
import { CellImage } from '@rhino-project/ui-nextui';
import { CellInteger } from '@rhino-project/ui-nextui';
import { CellLink } from '@rhino-project/ui-nextui';
import { CellLinkEmail } from '@rhino-project/ui-nextui';
import { CellLinkTelephone } from '@rhino-project/ui-nextui';
import { CellReference } from '@rhino-project/ui-nextui';
import { CellString } from '@rhino-project/ui-nextui';
import { CellTime } from '@rhino-project/ui-nextui';

const Buttons = () => {
  console.log('Buttons');
  return (
    <div className="d-flex flex-wrap gap-2">
      <Button id="Button">Button</Button>
      <Button id="Button-with-loading-true" loading={true} />
      <IconButton id="IconButton" icon="check">
        IconButton
      </IconButton>
      <SubmitButton id="SubmitButton">SubmitButton</SubmitButton>
      <LinkButton id="LinkButton" to=".">
        LinkButton
      </LinkButton>
      <LinkButton id="LinkIconButton" showAnchorIcon to=".">
        LinkIconButton
      </LinkButton>
      <CloseButton id="CloseButton" />
    </div>
  );
};

const SELECT_OPTIONS = [
  <option key="1">An option</option>,
  <option key="2">Another option</option>,
  <option key="3">Yet another option</option>
];

const Forms = () => {
  const methods = useForm();
  const fields = [
    { Component: FieldGroupBoolean, name: 'FieldGroupBoolean', props: {} },
    { Component: FieldGroupCountry, name: 'FieldGroupCountry', props: {} },
    { Component: FieldGroupCurrency, name: 'FieldGroupCurrency', props: {} },
    { Component: FieldGroupDate, name: 'FieldGroupDate', props: {} },
    { Component: FieldGroupDateTime, name: 'FieldGroupDateTime', props: {} },
    { Component: FieldGroupFile, name: 'FieldGroupFile', props: {} },
    { Component: FieldGroupFloat, name: 'FieldGroupFloat', props: {} },
    { Component: FieldGroupInteger, name: 'FieldGroupInteger', props: {} },
    { Component: FieldGroupPassword, name: 'FieldGroupPassword', props: {} },
    { Component: FieldGroupPhone, name: 'FieldGroupPhone', props: {} },
    {
      Component: FieldGroupSelectControlled,
      name: 'FieldGroupSelectControlled',
      props: { children: SELECT_OPTIONS }
    },
    { Component: FieldGroupString, name: 'FieldGroupString', props: {} },
    { Component: FieldGroupText, name: 'FieldGroupText', props: {} },
    { Component: FieldGroupTime, name: 'FieldGroupTime', props: {} },
    { Component: FieldGroupYear, name: 'FieldGroupYear', props: {} }
  ];
  return (
    <FormProvider {...methods}>
      <Form>
        {fields.map(({ Component, ...field }) => (
          <Component
            key={field.name}
            id={field.name}
            label={field.name}
            path={field.name}
            labelHidden
            {...field.props}
          />
        ))}
      </Form>
    </FormProvider>
  );
};

const FormsVertical = () => {
  const methods = useForm();
  const fields = [
    { Component: FieldGroupBoolean, name: 'FieldGroupBoolean', props: {} },
    { Component: FieldGroupCurrency, name: 'FieldGroupCurrency', props: {} },
    { Component: FieldGroupCountry, name: 'FieldGroupCountry', props: {} },
    { Component: FieldGroupDate, name: 'FieldGroupDate', props: {} },
    { Component: FieldGroupDateTime, name: 'FieldGroupDateTime', props: {} },
    { Component: FieldGroupFile, name: 'FieldGroupFile', props: {} },
    {
      Component: FieldGroupFile,
      name: 'FieldGroupFileMultiple',
      props: { multiple: true }
    },
    { Component: FieldGroupFloat, name: 'FieldGroupFloat', props: {} },
    { Component: FieldGroupInteger, name: 'FieldGroupInteger', props: {} },
    { Component: FieldGroupPassword, name: 'FieldGroupPassword', props: {} },
    { Component: FieldGroupPhone, name: 'FieldGroupPhone', props: {} },
    {
      Component: FieldGroupSelectControlled,
      name: 'FieldGroupSelectControlled',
      props: { children: SELECT_OPTIONS }
    },
    { Component: FieldGroupString, name: 'FieldGroupString', props: {} },
    { Component: FieldGroupText, name: 'FieldGroupText', props: {} },
    { Component: FieldGroupTime, name: 'FieldGroupTime', props: {} },
    { Component: FieldGroupYear, name: 'FieldGroupYear', props: {} }
  ];
  return (
    <FormProvider {...methods}>
      <Form>
        {fields.map(({ Component, ...field }) => (
          <Component
            key={field.name}
            id={field.name}
            label={field.name}
            path={field.name}
            {...field.props}
          />
        ))}
      </Form>
    </FormProvider>
  );
};

const FormsHorizontal = () => {
  const methods = useForm();
  const fields = [
    {
      Component: FieldGroupHorizontalBoolean,
      name: 'FieldGroupHorizontalBoolean',
      props: {}
    },
    {
      Component: FieldGroupHorizontalCountry,
      name: 'FieldGroupHorizontalCountry',
      props: {}
    },
    {
      Component: FieldGroupHorizontalCurrency,
      name: 'FieldGroupHorizontalCurrency',
      props: {}
    },
    {
      Component: FieldGroupHorizontalDate,
      name: 'FieldGroupHorizontalDate',
      props: {}
    },
    {
      Component: FieldGroupHorizontalDateTime,
      name: 'FieldGroupHorizontalDateTime',
      props: {}
    },
    {
      Component: FieldGroupHorizontalFile,
      name: 'FieldGroupHorizontalFile',
      props: {}
    },
    {
      Component: FieldGroupHorizontalFloat,
      name: 'FieldGroupHorizontalFloat',
      props: {}
    },
    {
      Component: FieldGroupHorizontalInteger,
      name: 'FieldGroupHorizontalInteger',
      props: {}
    },
    {
      Component: FieldGroupHorizontalPassword,
      name: 'FieldGroupHorizontalPassword',
      props: {}
    },
    {
      Component: FieldGroupHorizontalPhone,
      name: 'FieldGroupHorizontalPhone',
      props: {}
    },
    {
      Component: FieldGroupHorizontalSelectControlled,
      name: 'FieldGroupHorizontalSelectControlled',
      props: { children: SELECT_OPTIONS }
    },
    {
      Component: FieldGroupHorizontalString,
      name: 'FieldGroupHorizontalString',
      props: {}
    },
    {
      Component: FieldGroupHorizontalText,
      name: 'FieldGroupHorizontalText',
      props: {}
    },
    {
      Component: FieldGroupHorizontalTime,
      name: 'FieldGroupHorizontalTime',
      props: {}
    },
    {
      Component: FieldGroupHorizontalYear,
      name: 'FieldGroupHorizontalYear',
      props: {}
    }
  ];
  return (
    <FormProvider {...methods}>
      <Form>
        {fields.map(({ Component, ...field }) => (
          <Component
            key={field.name}
            id={field.name}
            label={field.name}
            path={field.name}
            {...field.props}
          />
        ))}
      </Form>
    </FormProvider>
  );
};

const FormsFloating = () => {
  const methods = useForm();
  const fields = [
    {
      Component: FieldGroupFloatingBoolean,
      name: 'FieldGroupFloatingBoolean',
      props: {}
    },
    {
      Component: FieldGroupFloatingCountry,
      name: 'FieldGroupFloatingCountry',
      props: {}
    },
    {
      Component: FieldGroupFloatingCurrency,
      name: 'FieldGroupFloatingCurrency',
      props: {}
    },
    {
      Component: FieldGroupFloatingDate,
      name: 'FieldGroupFloatingDate',
      props: {}
    },
    {
      Component: FieldGroupFloatingDateTime,
      name: 'FieldGroupFloatingDateTime',
      props: {}
    },
    {
      Component: FieldGroupFile,
      name: 'FieldGroupFloatingFile',
      props: {}
    },
    {
      Component: FieldGroupFloatingFloat,
      name: 'FieldGroupFloatingFloat',
      props: {}
    },
    {
      Component: FieldGroupFloatingInteger,
      name: 'FieldGroupFloatingInteger',
      props: {}
    },
    {
      Component: FieldGroupFloatingPassword,
      name: 'FieldGroupFloatingPassword',
      props: {}
    },
    {
      Component: FieldGroupFloatingPhone,
      name: 'FieldGroupFloatingPhone',
      props: {}
    },
    {
      Component: FieldGroupFloatingSelectControlled,
      name: 'FieldGroupFloatingSelectControlled',
      props: { children: SELECT_OPTIONS }
    },
    {
      Component: FieldGroupFloatingString,
      name: 'FieldGroupFloatingString',
      props: {}
    },
    {
      Component: FieldGroupFloatingText,
      name: 'FieldGroupFloatingText',
      props: {}
    },
    {
      Component: FieldGroupFloatingTime,
      name: 'FieldGroupFloatingTime',
      props: {}
    },
    {
      Component: FieldGroupFloatingYear,
      name: 'FieldGroupFloatingYear',
      props: {}
    }
  ];
  return (
    <FormProvider {...methods}>
      <Form>
        {fields.map(({ Component, ...field }) => (
          <Component
            key={field.name}
            id={field.name}
            label={field.name}
            path={field.name}
            placeholder="dummy"
            {...field.props}
          />
        ))}
      </Form>
    </FormProvider>
  );
};

const columnHelper = createColumnHelper();
const Tables = () => {
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
};

const Typography = () => {
  return (
    <>
      <h1>h1 - Heading</h1>
      <h2>h2 - Heading</h2>
      <h3>h3 - Heading</h3>
      <h4>h4 - Heading</h4>
      <h5>h5 - Heading</h5>
      <h6>h6 - Heading</h6>
      <h1 className="display-1">Display 1</h1>
      <h1 className="display-2">Display 2</h1>
      <h1 className="display-3">Display 3</h1>
      <h1 className="display-4">Display 4</h1>
      <h1 className="display-5">Display 5</h1>
      <h1 className="display-6">Display 6</h1>
      <p className="lead">
        This is a lead paragraph. It stands out from regular paragraphs.
      </p>
      <p>
        p - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
        neque eros. Aliquam porta nunc id dignissim luctus. Pellentesque varius
        felis quis tincidunt ornare. In non urna dolor. Vestibulum ullamcorper
        eros sit amet lorem hendrerit congue. Vestibulum malesuada efficitur
        nunc nec porttitor. Suspendisse consequat risus quis laoreet aliquam.
        Pellentesque sit amet nunc accumsan sem pharetra sollicitudin in eget
        neque.
      </p>
      <p>
        Morbi semper, ligula eget imperdiet consectetur, diam est venenatis
        elit, aliquet efficitur sem lectus id sem. Ut augue nulla, condimentum
        et nulla nec, malesuada sollicitudin purus. Sed ac enim interdum,
        efficitur tortor vitae, mattis arcu. Donec nec mattis risus, ut sodales
        sem. Nam tincidunt fermentum eleifend. Maecenas iaculis magna ut nibh
        rhoncus volutpat vitae a nunc. Fusce venenatis elit nec urna dictum
        laoreet. Curabitur eu ultrices lectus. Morbi mollis eros leo, a
        fermentum sem porttitor dictum. Quisque cursus justo quis ornare
        posuere. Praesent hendrerit placerat justo, quis cursus nibh tempus vel.
        Nullam condimentum nec ipsum non posuere. Sed consequat diam dui,
        vulputate aliquam magna consectetur sit amet. Sed id sollicitudin
        lectus. Duis non eleifend eros.
      </p>
    </>
  );
};

const Dashboard = () => {
  return <div>Dashboard</div>;
};

const DesignSystemPage = () => {
  const { pathname } = useLocation();
  console.log('DesignSystemPage', pathname);
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-body-tertiary my-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Components
          </a>
          <Tabs selectedKey={pathname} aria-label="Tabs">
            <Tab id="dashboard" as={NavLink} to="./" title="Dashboard" />
            <Tab id="buttons" as={NavLink} to="./buttons" title="Buttons" />
            <Tab id="forms" as={NavLink} to="./forms" title="Forms" />
            <Tab
              id="formsVertical"
              as={NavLink}
              to="formsVertical"
              title="Forms Vertical"
            />
            <Tab
              id="formsHorizontal"
              as={NavLink}
              to="formsHorizontal"
              title="Forms Horizontal"
            />
            <Tab
              id="formsFloating"
              as={NavLink}
              to="formsFloating"
              title="Forms Floating"
            />
            <Tab id="tables" as={NavLink} to="tables" title="Tables" />
            <Tab
              id="typography"
              as={NavLink}
              to="typography"
              title="Typography"
            />
          </Tabs>
        </div>
      </nav>
      <div className="py-3">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="forms" element={<Forms />} />
          <Route path="formsVertical" element={<FormsVertical />} />
          <Route path="formsHorizontal" element={<FormsHorizontal />} />
          <Route path="formsFloating" element={<FormsFloating />} />
          <Route path="tables" element={<Tables />} />
          <Route path="typography" element={<Typography />} />
        </Routes>
      </div>
    </>
  );
};

const data1 = [
  {
    CellBadge: '1',
    CellBoolean: true,
    CellCountry: 'BR',
    CellCurrency: 1.99,
    CellDate: new Date().toISOString(),
    CellDateTime: new Date().toISOString(),
    CellDateTimeDistance: new Date().toISOString(),
    CellDateTimeRelative: new Date().toISOString()
  },
  {
    CellBadge: '1',
    CellBoolean: true,
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

export default DesignSystemPage;
