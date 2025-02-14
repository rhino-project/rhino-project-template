import {
  Button,
  DisplayImage,
  DisplayImageBase,
  Icon,
  ModelDisplayAttachmentImage,
  ModelDisplayAttachmentImageBase,
  ModelDisplayCurrency,
  ModelDisplayEnum,
  ModelDisplayInteger,
  ModelDisplayText,
  ModelFieldIntegerSelect,
  ModelFilterReferenceTypeahead,
  ModelIndexActionsModalCreate,
  ModelIndexCardGrid,
  ModelShowActionsModalEdit
} from '@rhino-project/ui-heroui';
import { useState } from 'react';

/** @type {import('@rhino-project/core/config').RhinoConfig} */
const rhinoConfig = {
  version: 1,
  components: {
    // ModelDisplayString: () => 'hi',
    ModelBreadcrumb: { props: { variant: 'solid' } },
    every_field: {
      // ModelCreate: { props: { paths: ['another_user'] } }
      // ModelIndexActions: ModelIndexActionsModalCreate,
      // ModelShowActions: ModelShowActionsModalEdit,

      integer_in: {
        ModelFieldGroup: ModelFieldIntegerSelect
      },

      ModelFilters: {
        props: {
          paths: [
            'string',
            'integer_no_nil::gt',
            'float_no_nil',
            'date_time_required::gte',
            'date_required',
            'time_required',
            'enum_required',
            'user',
            <ModelFilterReferenceTypeahead path="user" />,
            'year_required'
          ]
        }
      }
    },
    // DisplayInput: {
    //   props: {
    //     classNames: {
    //       label:
    //         'group-data-[filled-within=true]:text-yellow-400 text-primary-400'
    //     },
    //     variant: 'underlined'
    //   }
    // },
    // ModelDisplayDate: { props: { format: 'yyyy-MM-dd' } },
    // ModelDisplayAttachment: null,
    blog: {
      // ModelDisplayString: () => 'hi2',
      title: {
        ModelDisplayString: {
          props: {
            isReadOnly: false,
            label: <div className="text-red-700">Hello</div>
          }
        }
      },
      // ModelEdit: {
      //   props: {
      //     paths: [
      //       'title',
      //       // 'image_attachment'
      //       // 'single_file_attachment'
      //       'multiple_files_attachments'
      //     ]
      //   }
      // },

      // ModelIndexActions: ModelIndexActionsModalCreate,
      // ModelShowActions: ModelShowActionsModalEdit,

      ModelFilters: {
        props: {
          paths: ['is_published']
        }
      },
      // ModelIndexTable: ModelIndexCardGrid,

      // single_file_attachment: {},
      image_attachment: {
        ModelDisplayAttachment: {
          component: ModelDisplayAttachmentImage,
          props: {
            // src: 'http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MywicHVyIjoiYmxvYl9pZCJ9fQ==--3b64ca0390807a145b147e962e822fcafafb5940/Screenshot%202025-01-06%20at%2010.25.00%E2%80%AFPM.png',
            // width: 500,
            // height: 500
          }
        }
      }
    }
  }
};

export default rhinoConfig;
