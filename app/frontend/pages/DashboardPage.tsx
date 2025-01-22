import {
  Accordion,
  Autocomplete,
  AutocompleteItem,
  BaseAuthedPage,
  Button,
  Calendar,
  Checkbox,
  CircularProgress,
  DatePicker,
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
  Pager,
  Spinner,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@rhino-project/ui-nextui';
import { Empty } from '@rhino-project/ui-nextui';
import { LinkButton } from '@rhino-project/ui-nextui';
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
import { Pagination, Table, useLink } from '@heroui/react';
import { Link as RRLink, useHref } from 'react-router-dom';
import { set } from 'react-hook-form';
import { useAriaLink } from '@heroui/use-aria-link';
import { useRouter, useLinkProps } from '@react-aria/utils';

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
      console.log('set total');
      setPage(1);
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
  console.log('link', rr, internalalink, alink, link, link.getLinkProps());

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('set src');
  //     setSrc(
  //       'http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NCwicHVyIjoiYmxvYl9pZCJ9fQ==--57d7b3537066c27ec8dd5f838c7ede4e0e1add60/Screenshot%202025-01-06%20at%2010.52.43%E2%80%AFAM.png'
  //     );
  //   }, 3000);
  // }, []);

  const [search, setSearch] = useState('');
  const { results, isInitialLoading } = useModelIndex('blog', { search });

  // console.log('results', results);
  return (
    <>
      <Empty
        title={`Welcome to ${baseOwner?.name}, ${user?.name || user?.email}`}
      />
      <div className="flex flex-col">
        <Link id="linktest" href="blogs/14">
          Blogs
        </Link>
        <Link href="__design/">Design</Link>

        <RRLink to="blogs/14">Blogs</RRLink>
      </div>
      <div>
        <div className=" space-y-4">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 rounded-lg cursor-pointer bg-default-100 hover:bg-default-200">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Icon
                  className="w-8 h-8 mb-2 text-foreground-400"
                  icon="upload"
                />
                <p className="mb-2 text-sm text-foreground-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-foreground-400">PDF (max. 5MB)</p>
              </div>
              <input
                type="file"
                className="hidden"
                accept=".pdf"
                // onChange={handleFileChange}
              />
            </label>
          </div>

          {/* {error && <div className="text-sm text-red-500">{error}</div>} */}

          {/* {file && (
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="truncate">
                  <p className="text-sm font-medium text-gray-900">
                    {file.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  onClick={handleRemoveFile}
                  className="text-sm text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
          )} */}
        </div>
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
        startContent={<Icon icon="house" />}
      >
        Learn NextUI
      </Button>
      <br />
      <Kbd keys={['command']}>K</Kbd>
      <CircularProgress aria-label="Test" />
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
        label="test"
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
      <Image
        alt="NextUI Image with fallback"
        height={200}
        src="http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NCwicHVyIjoiYmxvYl9pZCJ9fQ==--57d7b3537066c27ec8dd5f838c7ede4e0e1add60/Screenshot%202025-01-06%20at%2010.52.43%E2%80%AFAM.png"
      />
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
        <Icon icon="house" />
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
