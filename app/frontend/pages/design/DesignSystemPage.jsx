import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import { useForm } from 'react-hook-form';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import {
  Button,
  CloseButton,
  FieldBoolean,
  FieldCurrency,
  FieldDate,
  FieldDateTime,
  FieldFile,
  FieldFloat,
  FieldInteger,
  FieldPassword,
  FieldSelect,
  FieldString,
  FieldText,
  FieldTime,
  FieldYear,
  Form,
  IconButton,
  LinkButton,
  SelectItem,
  SubmitButton,
  Tab,
  Tabs
} from '@rhino-project/ui-nextui';
import { FormProvider } from '@rhino-project/core/components/forms';
import {
  FieldGroupCountry,
  FieldGroupFloatingCountry,
  FieldGroupHorizontalCountry
} from '@rhino-project/ui-nextui';
import {
  FieldGroupFile,
  FieldGroupHorizontalFile
} from '@rhino-project/ui-nextui';
import {
  FieldGroupPhone,
  FieldGroupFloatingPhone,
  FieldGroupHorizontalPhone
} from '@rhino-project/ui-nextui';

import {
  Table,
  CellBadge,
  CellBoolean,
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
} from '@rhino-project/ui-nextui';

const Buttons = () => {
  return (
    <div className="d-flex flex-wrap gap-2">
      <Button id="Button">Button</Button>
      <Button id="Button-with-loading-true" isLoading>
        Button Loading
      </Button>
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
  <SelectItem key="1">An option</SelectItem>,
  <SelectItem key="2">Another option</SelectItem>,
  <SelectItem key="3">Yet another option</SelectItem>
];

const fields = [
  {
    Component: FieldBoolean,
    name: 'FieldBoolean',
    props: { children: 'FieldBoolean' }
  },
  { Component: FieldGroupCountry, name: 'FieldGroupCountry', props: {} },
  { Component: FieldCurrency, name: 'FieldCurrency', props: {} },
  { Component: FieldDate, name: 'FieldDate', props: {} },
  { Component: FieldDateTime, name: 'FieldDateTime', props: {} },
  { Component: FieldFile, name: 'FieldFile', props: {} },
  { Component: FieldFloat, name: 'FieldFloat', props: {} },
  { Component: FieldInteger, name: 'FieldInteger', props: {} },
  { Component: FieldPassword, name: 'FieldPassword', props: {} },
  { Component: FieldGroupPhone, name: 'FieldGroupPhone', props: {} },
  {
    Component: FieldSelect,
    name: 'FieldSelect',
    props: { children: SELECT_OPTIONS }
  },
  { Component: FieldString, name: 'FieldString', props: {} },
  { Component: FieldText, name: 'FieldText', props: {} },
  { Component: FieldTime, name: 'FieldTime', props: {} },
  { Component: FieldYear, name: 'FieldYear', props: {} }
];

const Forms = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Form>
        {fields.map(({ Component, ...field }) => (
          <Component
            key={field.name}
            id={field.name}
            label=""
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
    {
      Component: FieldBoolean,
      name: 'FieldBoolean',
      props: { children: 'FieldBoolean' }
    },
    { Component: FieldCurrency, name: 'FieldCurrency', props: {} },
    { Component: FieldGroupCountry, name: 'FieldGroupCountry', props: {} },
    { Component: FieldDate, name: 'FieldDate', props: {} },
    { Component: FieldDateTime, name: 'FieldDateTime', props: {} },
    { Component: FieldGroupFile, name: 'FieldGroupFile', props: {} },
    {
      Component: FieldGroupFile,
      name: 'FieldGroupFileMultiple',
      props: { multiple: true }
    },
    { Component: FieldFloat, name: 'FieldFloat', props: {} },
    { Component: FieldInteger, name: 'FieldInteger', props: {} },
    { Component: FieldPassword, name: 'FieldPassword', props: {} },
    { Component: FieldGroupPhone, name: 'FieldGroupPhone', props: {} },
    {
      Component: FieldSelect,
      name: 'FieldSelect',
      props: { children: SELECT_OPTIONS }
    },
    { Component: FieldString, name: 'FieldString', props: {} },
    { Component: FieldText, name: 'FieldText', props: {} },
    { Component: FieldTime, name: 'FieldTime', props: {} },
    { Component: FieldYear, name: 'FieldYear', props: {} }
  ];
  return (
    <FormProvider {...methods}>
      <Form>
        {fields.map(({ Component, ...field }) => (
          <Component
            key={field.name}
            id={field.name}
            label={field.name}
            labelPlacement="outside"
            placeholder={field.name}
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
      Component: FieldBoolean,
      name: 'FieldBoolean',
      props: { children: 'FieldBoolean' }
    },
    {
      Component: FieldGroupHorizontalCountry,
      name: 'FieldGroupHorizontalCountry',
      props: {}
    },
    {
      Component: FieldCurrency,
      name: 'FieldCurrency',
      props: {}
    },
    {
      Component: FieldDate,
      name: 'FieldDate',
      props: {}
    },
    {
      Component: FieldDateTime,
      name: 'FieldDateTime',
      props: {}
    },
    {
      Component: FieldGroupHorizontalFile,
      name: 'FieldGroupHorizontalFile',
      props: {}
    },
    {
      Component: FieldFloat,
      name: 'FieldFloat',
      props: {}
    },
    {
      Component: FieldInteger,
      name: 'FieldInteger',
      props: {}
    },
    {
      Component: FieldPassword,
      name: 'FieldPassword',
      props: {}
    },
    {
      Component: FieldGroupHorizontalPhone,
      name: 'FieldGroupHorizontalPhone',
      props: {}
    },
    {
      Component: FieldSelect,
      name: 'FieldSelect',
      props: { children: SELECT_OPTIONS }
    },
    { Component: FieldString, name: 'FieldString', props: {} },
    { Component: FieldText, name: 'FieldText', props: {} },
    {
      Component: FieldTime,
      name: 'FieldTime',
      props: {}
    },
    {
      Component: FieldYear,
      name: 'FieldYear',
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
            labelPlacement="outside-left"
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
      Component: FieldBoolean,
      name: 'FieldBoolean',
      props: { children: 'FieldBoolean' }
    },
    {
      Component: FieldGroupFloatingCountry,
      name: 'FieldGroupFloatingCountry',
      props: {}
    },
    {
      Component: FieldCurrency,
      name: 'FieldCurrency',
      props: {}
    },
    {
      Component: FieldDate,
      name: 'FieldDate',
      props: {}
    },
    {
      Component: FieldDateTime,
      name: 'FieldDateTime',
      props: {}
    },
    {
      Component: FieldGroupFile,
      name: 'FieldGroupFloatingFile',
      props: {}
    },
    {
      Component: FieldFloat,
      name: 'FieldFloat',
      props: {}
    },
    {
      Component: FieldInteger,
      name: 'FieldInteger',
      props: {}
    },
    {
      Component: FieldPassword,
      name: 'FieldPassword',
      props: {}
    },
    {
      Component: FieldGroupFloatingPhone,
      name: 'FieldGroupFloatingPhone',
      props: {}
    },
    {
      Component: FieldSelect,
      name: 'FieldSelect',
      props: { children: SELECT_OPTIONS }
    },
    { Component: FieldString, name: 'FieldString', props: {} },
    { Component: FieldText, name: 'FieldText', props: {} },
    {
      Component: FieldTime,
      name: 'FieldTime',
      props: {}
    },
    {
      Component: FieldYear,
      name: 'FieldYear',
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
            labelPlacement="inside"
            path={field.name}
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
