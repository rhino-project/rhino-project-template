import {
  Accordion,
  addToast,
  Autocomplete,
  AutocompleteItem,
  BaseAuthedPage,
  Button,
  Calendar,
  CircularProgress,
  DatePicker,
  DisplayAttachments,
  DisplayBoolean,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  getKeyValue,
  Icon,
  Image,
  Input,
  Kbd,
  Link,
  ModelDisplayBoolean,
  ModelEditSimple,
  ModelFieldString,
  ModelShowSimple,
  Spinner,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@rhino-project/ui-heroui';
import { Empty } from '@rhino-project/ui-heroui';
import { LinkButton } from '@rhino-project/ui-heroui';
import { useBaseOwnedResources } from '@rhino-project/core';
import {
  useBaseOwnerPath,
  useModelIndex,
  useModelShow
} from '@rhino-project/core/hooks';
import { useUser } from '@rhino-project/core/hooks';
import { useBaseOwner } from '@rhino-project/core/hooks';
import { getModelIndexPath } from '@rhino-project/core/utils';
import { components } from '../models/models.d';
import { useRhinoContext, Resources } from '@rhino-project/core';
import { twMerge } from 'tailwind-merge';
import {
  parseDate,
  parseDateTime,
  parseTime,
  parseAbsolute,
  parseAbsoluteToLocal,
  parseZonedDateTime,
  CalendarDateTime,
  ZonedDateTime
} from '@internationalized/date';
import { useEffect, useState } from 'react';
import { Tab, Tabs, Pagination, Table, useLink } from '@heroui/react';
import {
  Route,
  Routes,
  Link as RRLink,
  useHref,
  useLocation,
  useNavigate
} from 'react-router-dom';
import { useAriaLink } from '@heroui/use-aria-link';
import { useRouter, useLinkProps, RouterProvider } from '@react-aria/utils';
import {
  Link as AriaLink,
  Tabs as AriaTabs,
  TabList,
  Tab as AriaTab,
  TabPanel
} from 'react-aria-components';
// import 'react-international-phone/style.css';

const APPROVAL = false;

// FIXME Add back session tracking for approval
const Approval = () => {
  return (
    <Empty title="Admin Approval Required">
      {/* <LinkButton color="primary" href="mailto:admin@example.com">
        Request Approval
      </LinkButton> */}
    </Empty>
  );
};

function useModelShowTyped<T extends keyof Resources>(
  model: T | { model: T },
  id: number
): { resource: components['schemas'][T] } {
  return useModelShow(typeof model === 'string' ? model : model.model, id) as {
    resource: components['schemas'][T];
  };
}

const GetStarted = () => {
  const baseOwnedResources = useBaseOwnedResources();
  // const baseOwnedModels = useBaseOwnedModels();
  const firstModel = baseOwnedResources?.[0];

  const baseOwnerPath = useBaseOwnerPath();
  const user = useUser() as Resources['user'];
  const firstPath = firstModel
    ? baseOwnerPath.build(getModelIndexPath(firstModel))
    : null;
  const { resources } = useRhinoContext();
  const [src, setSrc] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  // const user = useUser();
  const baseOwner = useBaseOwner();
  const { resource } = useModelShowTyped('blog', 1);
  // const blog = useResource('blog');
  // const { resource: user } = useModelShowTyped('user', 1);
  // const { resource } = useResourceShow('blog', 1);
  // const {} = useResourceIndexController({ model: 'blog' });

  // console.log(
  //   'parse',
  //   // parseTime('01:00:00'),
  //   // parseZonedDateTime(new Date().toString()),
  //   parseAbsoluteToLocal('2022-01-01T01:00:00Z'),
  //   parseAbsoluteToLocal('2022-01-01T01:00:00Z').toAbsoluteString()
  //   // parseZonedDateTime('2022-01-01T01:00:00Z')
  //   // parseZonedDateTime('2022-01-01T01:00:00Z')
  //   // parseDateTime('2022-01-01T01:00:00Z')
  //   // parseDate('2022-01-01')
  // );

  useEffect(() => {
    setTimeout(() => {
      // console.log('set total');
      setPage(2);
      setTotal(4);
    }, 3000);
  }, []);

  // const check = useHref('https://example.com');
  // const check2 = useHref('./blogs');
  // console.log('check', check);

  const rr = useRouter();
  const internalalink = useLinkProps({ href: 'blogs' });
  const alink = useAriaLink({ href: 'blogs' });
  const link = useLink({ href: 'blogs' });
  // console.log('link', rr, internalalink, alink, link, link.getLinkProps());

  useEffect(() => {
    setTimeout(() => {
      console.log('set src');
      setSrc('https://placehold.co/600x400/EEE/31343C');
    }, 3000);
  }, []);

  const [search, setSearch] = useState('');
  const { results, isInitialLoading } = useModelIndex('blog', { search });
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [timePeriod, setTimePeriod] = useState('triassic');
  const anotherHref = useHref('.');

  console.log('GetStarted', pathname, anotherHref);
  return (
    <>
      <Empty
        title={`Welcome to ${baseOwner?.name}, ${user?.name || user?.email}`}
      />
      <Button
        variant="flat"
        onPress={() => {
          addToast({
            title: 'Toast Title',
            promise: new Promise((resolve) => setTimeout(resolve, 3000))
          });
        }}
      >
        Default
      </Button>
      <ModelShowSimple model="blog" modelId={1}>
        <DisplayBoolean path="is_published">Published</DisplayBoolean>
        <ModelDisplayBoolean path="is_published">Another</ModelDisplayBoolean>
        <DisplayAttachments
          label="Attachments"
          path="multiple_files_attachments"
        />
      </ModelShowSimple>
      <ModelEditSimple model="blog" modelId={1}>
        <ModelFieldString path="title" description="Shown to users" />
      </ModelEditSimple>
      <Button
        showAnchorIcon
        as={Link}
        color="primary"
        href="https://github.com/heroui-inc/heroui"
        variant="solid"
        isExternal
        isDisabled
      >
        Button Link
      </Button>
      <div>
        <Tabs
          selectedKey={'/1'}
          onSelectionChange={(key) => console.log('tab', key)}
        >
          <Tab id="/1" href="/1">
            Home
          </Tab>
          <Tab href="/1/shared">Shared</Tab>
          <Tab id="/deleted" href="/1/deleted">
            Deleted
          </Tab>
        </Tabs>
        <AriaTabs selectedKey={timePeriod} onSelectionChange={setTimePeriod}>
          <TabList aria-label="Mesozoic time periods">
            <AriaTab id="triassic">Triassic</AriaTab>
            <AriaTab id="jurassic">Jurassic</AriaTab>
            <AriaTab id="cretaceous">Cretaceous</AriaTab>
          </TabList>
          <TabPanel id="triassic">
            The Triassic ranges roughly from 252 million to 201 million years
            ago, preceding the Jurassic Period.
          </TabPanel>
          <TabPanel id="jurassic">
            The Jurassic ranges from 200 million years to 145 million years ago.
          </TabPanel>
          <TabPanel id="cretaceous">
            The Cretaceous is the longest period of the Mesozoic, spanning from
            145 million to 66 million years ago.
          </TabPanel>
        </AriaTabs>
        <AriaTabs selectedKey={pathname}>
          <TabList aria-label="Tabs">
            <AriaTab id="/1" href="/1">
              Home
            </AriaTab>
            <AriaTab id="/shared" href="/1/shared">
              Shared
            </AriaTab>
            <AriaTab id="/deleted" href="/1/deleted">
              Deleted
            </AriaTab>
          </TabList>
          <TabPanel id={pathname}>
            <Routes>
              <Route path="/1" element={'home'} />
              <Route path="/1/shared" element={'shared'} />
              <Route path="/1/deleted" element={'deleted'} />
            </Routes>
          </TabPanel>
        </AriaTabs>
      </div>
      <CircularProgress
        classNames={{
          svg: 'w-36 h-36 drop-shadow-md',
          indicator: 'stroke-white',
          track: 'stroke-white/10',
          value: 'text-3xl font-semibold text-white'
        }}
        showValueLabel={true}
        strokeWidth={4}
        value={70}
      />
      <div className="flex flex-col">
        <a
          href="blogs/14"
          onClick={(e) => {
            e.preventDefault();
            navigate('blogs/14');
          }}
        >
          direct nav link
        </a>

        <RouterProvider navigate={navigate} useHref={useHref}>
          <Link href="blogs/14">Blogs</Link>
          <AriaLink href="blogs/14">Blogs Aria</AriaLink>
          {/* <Link href="/1/blogs/14">Blogs Absolute</Link> */}
          <Link href="https://example.com">HTTP Link</Link>
          {/* <Link href="__design/">Design</Link>

        <RRLink to="blogs/14">Blogs</RRLink> */}
        </RouterProvider>
      </div>
      <Autocomplete
        classNames={{}}
        label="Blogs"
        isLoading={isInitialLoading}
        items={results || []}
        onInputChange={setSearch}
        onSelectionChange={(item) => console.log('selected', item)}
        onClear={() => console.log('clear')}
      >
        {(item) => (
          <AutocompleteItem key={item.id}>{item.title}</AutocompleteItem>
        )}
      </Autocomplete>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Open Menu</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Link Actions">
          <DropdownItem key="home" href="/1/__design">
            Home
          </DropdownItem>
          <DropdownItem key="about" href="/1/account/settings/profile">
            About
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Pagination page={page} total={total} onChange={setPage} showControls />
      Page: {page}
      {''}Total: {total}
      <div className="bg-red-600 size-8" />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button
        color="primary"
        variant="shadow"
        startContent={<Icon icon="bi:house" />}
      >
        Learn NextUI
      </Button>
      <br />
      <Kbd keys={['command']}>K</Kbd>
      <CircularProgress aria-label="Test" />
      <Spinner label="Loading..." variant="wave" />
      <Input
        type="file"
        label="test"
        labelPlacement="outside-left"
        // className="text-yellow-400"
        classNames={{ label: 'text-red-400' }}
        isClearable
        onChange={(e) => console.log('file oc', e.target.files)}
        onClear={() => console.log('clear file')}
      />
      <Input
        label="test"
        labelPlacement="inside"
        variant="underlined"
        // className="text-yellow-400"
        classNames={{ label: 'text-primary-400' }}
        isClearable
        onValueChange={(e) => console.log('input file ovc', e)}
        onClear={() => console.log('clear')}
      />
      <DatePicker
        className="my-3"
        label="Date Picker"
        classNames={{ base: 'text-red-400', input: 'text-blue-400' }}

        // showMonthAndYearPickers={true}
      />
      <Calendar
        showMonthAndYearPickers={true}
        aria-label="Date (uncontrolled)"
      />
      {/* <img
        alt="NextUI Image with fallback"
        fallbackSrc="https://via.placeholder.com/300x200"
        height={200}
        src="https://app.requestly.io/delay/1000/https://nextui.org/images/fruit-4.jpeg"
        width={300}
      /> */}
      <Image alt="NextUI Image with fallback" height={200} src={src} />
      {/* <Image src="http://localhost:3000/rails/active_storage/disk/eyJfcmFpbHMiOnsiZGF0YSI6eyJrZXkiOiI2ejhmZXFiNGEyY3ZoNmpkZDE0Z3RhcWhpYml5IiwiZGlzcG9zaXRpb24iOiJpbmxpbmU7IGZpbGVuYW1lPVwiU2NyZWVuc2hvdCAyMDI1LTAxLTA2IGF0IDEuMDYuMTElM0ZQTS5wbmdcIjsgZmlsZW5hbWUqPVVURi04JydTY3JlZW5zaG90JTIwMjAyNS0wMS0wNiUyMGF0JTIwMS4wNi4xMSVFMiU4MCVBRlBNLnBuZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3BuZyIsInNlcnZpY2VfbmFtZSI6ImxvY2FsIn0sImV4cCI6IjIwMjUtMDEtMDdUMjE6MDQ6MTYuMzc2WiIsInB1ciI6ImJsb2Jfa2V5In19--81f5ec5b5e98209d5660ec45dd750bb6c469af19/Screenshot%202025-01-06%20at%201.06.11%E2%80%AFPM.png" /> */}
      <br />
      {firstPath && (
        <LinkButton
          color="primary"
          href={firstPath}
          startContent={<Icon icon="house" />}
        >
          Get Started
        </LinkButton>
      )}
      <LinkButton color="primary" href={firstPath} isIconOnly>
        <Icon icon="bi:house" />
      </LinkButton>
      <Table
        aria-label="Example table with client side sorting"
        classNames={{
          table: 'min-h-[400px]'
        }}
        sortDescriptor={{ column: 'name', direction: 'ascending' }}
        onSortChange={(sort) => {
          console.log('sort', sort);
        }}
      >
        <TableHeader>
          <TableColumn key="name" allowsSorting>
            Name
          </TableColumn>
          <TableColumn key="height" allowsSorting>
            Height
          </TableColumn>
          <TableColumn key="mass" allowsSorting>
            Mass
          </TableColumn>
          <TableColumn key="birth_year" allowsSorting>
            Birth year
          </TableColumn>
        </TableHeader>
        <TableBody
          isLoading={false}
          items={[]}
          loadingContent={<Spinner label="Loading..." />}
        >
          {(item) => (
            <TableRow key={item.name}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

const DashboardPage = () => {
  return (
    <BaseAuthedPage>{APPROVAL ? <Approval /> : <GetStarted />}</BaseAuthedPage>
  );
};

export default DashboardPage;
