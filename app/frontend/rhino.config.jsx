import {
  Button,
  DisplayImage,
  DisplayImageBase,
  ModelDisplayAttachmentImage,
  ModelDisplayAttachmentImageBase,
  ModelDisplayCurrency,
  ModelDisplayEnum,
  ModelDisplayInteger,
  ModelDisplayText,
  ModelIndexCardGrid
} from '@rhino-project/ui-nextui';

/** @type {import('@rhino-project/core/config').RhinoConfig} */
const rhinoConfig = {
  version: 1,
  components: {
    every_field: {
      // ModelCreate: { props: { paths: ['another_user'] } }
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
      // ModelShow: {
      //   props: {
      //     paths: [
      //       'user',
      //       'title',
      //       'image_attachment'
      //       // 'single_file_attachment'
      //       // 'multiple_files_attachments'
      //     ]
      //   }
      // },
      ModelIndexTable: ModelIndexCardGrid,
      ModelFilters: {
        props: {
          paths: ['title', 'user']
        }
      },
      single_file_attachment: {
        ModelDisplayAttachment: {}
      },
      image_attachment: {
        ModelDisplayAttachment: {
          component: ModelDisplayAttachmentImage,
          props: {
            // src: 'http://localhost:3000/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MywicHVyIjoiYmxvYl9pZCJ9fQ==--3b64ca0390807a145b147e962e822fcafafb5940/Screenshot%202025-01-06%20at%2010.25.00%E2%80%AFPM.png',
            width: 500,
            height: 500
          }
        }
      }
    }
  }
};

export default rhinoConfig;
