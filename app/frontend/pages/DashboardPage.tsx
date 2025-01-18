import {
  Accordion,
  BaseAuthedPage,
  Button,
  Checkbox,
  CircularProgress,
  DatePicker,
  getKeyValue,
  Icon,
  Image,
  Input,
  Kbd,
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
import { useBaseOwnerPath, useModelShow } from '@rhino-project/core/hooks';
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
  parseAbsoluteToLocal
} from '@internationalized/date';
import { useEffect, useState } from 'react';
import { Pagination, Table } from "@heroui/react";

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

  console.log(
    'parse',
    parseTime('01:00:00'),
    parseAbsoluteToLocal('2022-01-01T01:00:00Z'),
    parseDate('2022-01-01')
  );

  useEffect(() => {
    setTimeout(() => {
      console.log('set total');
      setPage(1);
      setTotal(4);
    }, 3000);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('set src');
  //     setSrc(
  //       'http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6NCwicHVyIjoiYmxvYl9pZCJ9fQ==--57d7b3537066c27ec8dd5f838c7ede4e0e1add60/Screenshot%202025-01-06%20at%2010.52.43%E2%80%AFAM.png'
  //     );
  //   }, 3000);
  // }, []);

  return (
    <Empty
      title={`Welcome to ${baseOwner?.name}, ${user?.name || user?.email}`}
    >
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
        onClear={() => console.log('clear file')}
      />
      <Input
        label="test"
        // className="text-yellow-400"
        classNames={{ label: 'text-primary-400' }}
        isClearable
        onClear={() => console.log('clear')}
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
    </Empty>
  );
};

const DashboardPage = () => {
  return (
    <BaseAuthedPage>{APPROVAL ? <Approval /> : <GetStarted />}</BaseAuthedPage>
  );
};

export default DashboardPage;
