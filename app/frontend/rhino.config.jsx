import {
  Button,
  ModelDisplayAttachmentImage,
  ModelDisplayCurrency,
  ModelDisplayEnum,
  ModelDisplayInteger,
  ModelDisplayText
} from '@rhino-project/ui-nextui';
import { p } from 'framer-motion/client';

/** @type {import('@rhino-project/core/config').RhinoConfig} */
const rhinoConfig = {
  version: 1,
  components: {
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
      //       // 'image_attachment',
      //       'single_file_attachment'
      //       // 'multiple_files_attachments'
      //     ]
      //   }
      // },
      single_file_attachment: {
        ModelDisplayAttachment: {}
      },
      image_attachment: {
        ModelDisplayAttachment: {
          component: ModelDisplayAttachmentImage,
          props: { as: Button, width: 500, height: 500 }
        }
      }
    }
  }
};

export default rhinoConfig;
