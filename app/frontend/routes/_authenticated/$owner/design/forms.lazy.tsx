import { createLazyFileRoute } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import {
  FieldBoolean,
  FieldCountry,
  FieldCurrency,
  FieldDate,
  FieldDateTime,
  FieldFile,
  FieldFloat,
  FieldInteger,
  FieldPhone,
  FieldPassword,
  FieldSelect,
  FieldString,
  FieldText,
  FieldTime,
  FieldYear,
  Form,
  SelectItem,
  Select
} from '@rhino-project/ui-heroui';
import { FormProvider } from '@rhino-project/core/components/forms';
import { useState } from 'react';

export const Route = createLazyFileRoute('/_authenticated/$owner/design/forms')(
  {
    component: Forms
  }
);

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
  { Component: FieldCountry, name: 'FieldCountry', props: {} },
  { Component: FieldCurrency, name: 'FieldCurrency', props: {} },
  { Component: FieldDate, name: 'FieldDate', props: {} },
  { Component: FieldDateTime, name: 'FieldDateTime', props: {} },
  { Component: FieldFile, name: 'FieldFile', props: {} },
  { Component: FieldFloat, name: 'FieldFloat', props: {} },
  { Component: FieldInteger, name: 'FieldInteger', props: {} },
  { Component: FieldPassword, name: 'FieldPassword', props: {} },
  { Component: FieldPhone, name: 'FieldPhone', props: {} },
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

function Forms() {
  const methods = useForm();
  const [labelPlacement, setLabelPlacement] = useState<
    'outside' | 'outside-left' | 'inside'
  >('outside');

  return (
    <>
      <Select
        className="w-96 mb-3"
        label="Label Placement"
        description="Show different form label placements"
        size="sm"
        selectedKeys={[labelPlacement]}
        onChange={({ target: { value } }) => setLabelPlacement(value)}
      >
        <SelectItem key="outside">Outside</SelectItem>
        <SelectItem key="outside-left">Outside Left</SelectItem>
        <SelectItem key="inside">Inside</SelectItem>
      </Select>
      <FormProvider {...methods}>
        <Form>
          {fields.map(({ Component, ...field }) => (
            <Component
              key={field.name}
              id={field.name}
              label={labelPlacement ? field.name : undefined}
              labelPlacement={labelPlacement}
              placeholder={
                labelPlacement === 'outside' ? field.name : undefined
              }
              aria-label={field.name}
              path={field.name}
              {...field.props}
            />
          ))}
        </Form>
      </FormProvider>
    </>
  );
}
