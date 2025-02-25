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
import { LinkButton, RhinoLink } from '@rhino-project/ui-heroui';
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
import { Link as TSLink } from '@tanstack/react-router';

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

import * as React from 'react';
import { createLink, LinkComponent } from '@tanstack/react-router';
import {
  mergeProps,
  useFocusRing,
  useHover,
  useLink as RALink,
  useObjectRef
} from 'react-aria';
import type { AriaLinkOptions } from 'react-aria';

interface RACLinkProps extends Omit<AriaLinkOptions, 'href'> {
  children?: React.ReactNode;
}

const RACLinkComponent = React.forwardRef<HTMLAnchorElement, RACLinkProps>(
  (props, forwardedRef) => {
    const ref = useObjectRef(forwardedRef);

    const { isPressed, linkProps } = RALink(props, ref);
    const { isHovered, hoverProps } = useHover(props);
    const { isFocusVisible, isFocused, focusProps } = useFocusRing(props);

    return (
      <a
        {...mergeProps(linkProps, hoverProps, focusProps, props)}
        ref={ref}
        data-hovered={isHovered || undefined}
        data-pressed={isPressed || undefined}
        data-focus-visible={isFocusVisible || undefined}
        data-focused={isFocused || undefined}
      />
    );
  }
);
RACLinkComponent.displayName = 'RACLinkComponent';

const CreatedLinkComponent = createLink(RACLinkComponent);

const CustomLink: LinkComponent<typeof RACLinkComponent> = (props) => {
  return <CreatedLinkComponent {...props} />;
};

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
  // const { resource } = useModelShowTyped('blog', 1);
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
  // const { pathname } = useLocation();
  // const navigate = useNavigate();
  const [timePeriod, setTimePeriod] = useState('triassic');
  // const anotherHref = useHref('.');

  return (
    <div className="flex flex-col gap-4">
      <ModelShowSimple model="blog" modelId={1}>
        <DisplayBoolean path="is_published">Published</DisplayBoolean>
        <ModelDisplayBoolean path="is_published">Another</ModelDisplayBoolean>
        <DisplayAttachments
          label="Attachments"
          path="multiple_files_attachments"
        />
      </ModelShowSimple>
      <RhinoLink to="/$owner/blogs" params={{ owner: '1' }}>
        Custom Test To
      </RhinoLink>
      <RhinoLink href="/$owner/blogs" params={{ owner: '1' }}>
        Custom Test Href
      </RhinoLink>
      <RhinoLink to="/$owner" params={{ owner: '1' }}>
        Custom Test Href Active
      </RhinoLink>
      <Link as={TSLink} to="/$owner/blogs" params={{ owner: '1' }}>
        Blogs As
      </Link>
      <Link href="/1/blogs">Blogs Hero</Link>
      <Link href="/1" underline="active">
        Blogs Hero Active
      </Link>
      <TSLink to="/auth/signin" params={{ owner: '1' }}>
        Blogs TS
      </TSLink>
      <TSLink to="blogs">Blogs TS Relative</TSLink>
      <CustomLink to="/auth/signin" preload="intent" params={{ owner: '1' }}>
        Blogs Custom
      </CustomLink>
    </div>
  );
  // return (
  //   <>
  //     <Empty
  //       title={`Welcome to ${baseOwner?.name}, ${user?.name || user?.email}`}
  //     />
  //     {/* <CustomLink to="/$owner/blogs" params={{ owner: '1' }}>
  //       Custom Test
  //     </CustomLink> */}
  //     <TSLink to="/$owner/blogs" params={{ owner: '1' }}>
  //       Blogs
  //     </TSLink>
  //     <TSLink to="http://example.com">Blogs</TSLink>
  //     <Link from="/1" href="blogs">
  //       Blogs RA
  //     </Link>
  //     <Button
  //       variant="flat"
  //       onPress={() => {
  //         addToast({
  //           title: 'Toast Title',
  //           promise: new Promise((resolve) => setTimeout(resolve, 3000))
  //         });
  //       }}
  //     >
  //       Default
  //     </Button>
  //     {/* <ModelShowSimple model="blog" modelId={1}>
  //       <DisplayBoolean path="is_published">Published</DisplayBoolean>
  //       <ModelDisplayBoolean path="is_published">Another</ModelDisplayBoolean>
  //       <DisplayAttachments
  //         label="Attachments"
  //         path="multiple_files_attachments"
  //       />
  //     </ModelShowSimple>
  //     <ModelEditSimple model="blog" modelId={1}>
  //       <ModelFieldString path="title" description="Shown to users" />
  //     </ModelEditSimple> */}
  //     <Button
  //       showAnchorIcon
  //       as={Link}
  //       color="primary"
  //       href="https://github.com/heroui-inc/heroui"
  //       variant="solid"
  //       isExternal
  //       isDisabled
  //     >
  //       Button Link
  //     </Button>
  //     <div>
  //       {/* <Tabs
  //         selectedKey={'/1'}
  //         onSelectionChange={(key) => console.log('tab', key)}
  //       >
  //         <Tab id="/1" href="/1">
  //           Home
  //         </Tab>
  //         <Tab href="/1/shared">Shared</Tab>
  //         <Tab id="/deleted" href="/1/deleted">
  //           Deleted
  //         </Tab>
  //       </Tabs> */}
  //     </div>
  //     {/* <CircularProgress
  //       classNames={{
  //         svg: 'w-36 h-36 drop-shadow-md',
  //         indicator: 'stroke-white',
  //         track: 'stroke-white/10',
  //         value: 'text-3xl font-semibold text-white'
  //       }}
  //       showValueLabel={true}
  //       strokeWidth={4}
  //       value={70}
  //     /> */}
  //     <div className="flex flex-col">
  //       <a
  //         href="blogs/14"
  //         onClick={(e) => {
  //           e.preventDefault();
  //           // navigate('blogs/14');
  //         }}
  //       >
  //         direct nav link
  //       </a>

  //       {/* <RouterProvider navigate={navigate} useHref={useHref}>
  //         <Link href="blogs/14">Blogs</Link>
  //         <AriaLink href="blogs/14">Blogs Aria</AriaLink>
  //         <Link href="/1/blogs/14">Blogs Absolute</Link>
  //         <Link href="https://example.com">HTTP Link</Link>
  //         <Link href="__design/">Design</Link>

  //         <RRLink to="blogs/14">Blogs</RRLink>
  //       </RouterProvider> */}
  //     </div>
  //     <Autocomplete
  //       classNames={{}}
  //       label="Blogs"
  //       isLoading={isInitialLoading}
  //       items={results || []}
  //       onInputChange={setSearch}
  //       onSelectionChange={(item) => console.log('selected', item)}
  //       onClear={() => console.log('clear')}
  //     >
  //       {(item) => (
  //         <AutocompleteItem key={item.id}>{item.title}</AutocompleteItem>
  //       )}
  //     </Autocomplete>
  //     <Pagination page={page} total={total} onChange={setPage} showControls />
  //     Page: {page}
  //     {''}Total: {total}
  //     <div className="bg-red-600 size-8" />
  //     <h1 className="text-3xl font-bold underline">Hello world!</h1>
  //     <Button
  //       color="primary"
  //       variant="shadow"
  //       startContent={<Icon icon="bi:house" />}
  //     >
  //       Learn NextUI
  //     </Button>
  //     <br />
  //     <Kbd keys={['command']}>K</Kbd>
  //     <CircularProgress aria-label="Test" />
  //     <Spinner label="Loading..." variant="wave" />
  //     <Input
  //       type="file"
  //       label="test"
  //       labelPlacement="outside-left"
  //       // className="text-yellow-400"
  //       classNames={{ label: 'text-red-400' }}
  //       isClearable
  //       onChange={(e) => console.log('file oc', e.target.files)}
  //       onClear={() => console.log('clear file')}
  //     />
  //     <Input
  //       label="test"
  //       labelPlacement="inside"
  //       variant="underlined"
  //       // className="text-yellow-400"
  //       classNames={{ label: 'text-primary-400' }}
  //       isClearable
  //       onValueChange={(e) => console.log('input file ovc', e)}
  //       onClear={() => console.log('clear')}
  //     />
  //     <DatePicker
  //       className="my-3"
  //       label="Date Picker"
  //       classNames={{ base: 'text-red-400', input: 'text-blue-400' }}

  //       // showMonthAndYearPickers={true}
  //     />
  //     <Calendar
  //       showMonthAndYearPickers={true}
  //       aria-label="Date (uncontrolled)"
  //     />
  //     {/* <img
  //       alt="NextUI Image with fallback"
  //       fallbackSrc="https://via.placeholder.com/300x200"
  //       height={200}
  //       src="https://app.requestly.io/delay/1000/https://nextui.org/images/fruit-4.jpeg"
  //       width={300}
  //     /> */}
  //     <Image
  //       alt="NextUI Image with fallback"
  //       height={200}
  //       width={300}
  //       src="https://app.requestly.io/delay/5000/https://heroui.com/images/hero-card-complete.jpeg"
  //     />
  //     {/* <Image src="http://localhost:3000/rails/active_storage/disk/eyJfcmFpbHMiOnsiZGF0YSI6eyJrZXkiOiI2ejhmZXFiNGEyY3ZoNmpkZDE0Z3RhcWhpYml5IiwiZGlzcG9zaXRpb24iOiJpbmxpbmU7IGZpbGVuYW1lPVwiU2NyZWVuc2hvdCAyMDI1LTAxLTA2IGF0IDEuMDYuMTElM0ZQTS5wbmdcIjsgZmlsZW5hbWUqPVVURi04JydTY3JlZW5zaG90JTIwMjAyNS0wMS0wNiUyMGF0JTIwMS4wNi4xMSVFMiU4MCVBRlBNLnBuZyIsImNvbnRlbnRfdHlwZSI6ImltYWdlL3BuZyIsInNlcnZpY2VfbmFtZSI6ImxvY2FsIn0sImV4cCI6IjIwMjUtMDEtMDdUMjE6MDQ6MTYuMzc2WiIsInB1ciI6ImJsb2Jfa2V5In19--81f5ec5b5e98209d5660ec45dd750bb6c469af19/Screenshot%202025-01-06%20at%201.06.11%E2%80%AFPM.png" /> */}
  //     <br />
  //     {firstPath && (
  //       <LinkButton
  //         color="primary"
  //         href={firstPath}
  //         startContent={<Icon icon="house" />}
  //       >
  //         Get Started
  //       </LinkButton>
  //     )}
  //     <LinkButton color="primary" href={firstPath} isIconOnly>
  //       <Icon icon="bi:house" />
  //     </LinkButton>
  //     {/* <Table
  //       aria-label="Example table with client side sorting"
  //       classNames={{
  //         table: 'min-h-[400px]'
  //       }}
  //       sortDescriptor={{ column: 'name', direction: 'ascending' }}
  //       onSortChange={(sort) => {
  //         console.log('sort', sort);
  //       }}
  //     >
  //       <TableHeader aria-label="Table header">
  //         <TableColumn key="name" allowsSorting>
  //           Name
  //         </TableColumn>
  //         <TableColumn key="height" allowsSorting>
  //           Height
  //         </TableColumn>
  //         <TableColumn key="mass" allowsSorting>
  //           Mass
  //         </TableColumn>
  //         <TableColumn key="birth_year" allowsSorting>
  //           Birth year
  //         </TableColumn>
  //       </TableHeader>
  //       <TableBody
  //         isLoading={false}
  //         items={[]}
  //         loadingContent={<Spinner label="Loading..." />}
  //       >
  //         {(item) => (
  //           <TableRow key={item.name}>
  //             {(columnKey) => (
  //               <TableCell>{getKeyValue(item, columnKey)}</TableCell>
  //             )}
  //           </TableRow>
  //         )}
  //       </TableBody>
  //     </Table> */}
  //   </>
  // );
};

const DashboardPage = () => {
  return (
    <BaseAuthedPage>{APPROVAL ? <Approval /> : <GetStarted />}</BaseAuthedPage>
  );
};

export default DashboardPage;
