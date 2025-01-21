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
  ModelIndexCardGrid
} from '@rhino-project/ui-nextui';
import { useState } from 'react';

const FileInput = ({
  // If value/onChange aren't provided, we'll use internal state
  value: controlledValue,
  onChange: controlledOnChange,
  title = 'File Upload',
  multiple = true,
  accept = '.pdf',
  maxSize = 5 * 1024 * 1024, // 5MB
  maxFiles = 5,
  className = ''
}) => {
  // Internal state for uncontrolled mode
  const [internalValue, setInternalValue] = useState(null);
  const [error, setError] = useState('');
  const [inputKey, setInputKey] = useState(0);

  // Determine if we're in controlled mode
  const isControlled =
    controlledValue !== undefined && controlledOnChange !== undefined;

  // Use controlled or internal value/setter based on mode
  const value = isControlled ? controlledValue : internalValue;
  const setValue = isControlled ? controlledOnChange : setInternalValue;

  const validateFile = (file) => {
    if (!file.type.includes('pdf')) {
      return 'Please select PDF files only';
    }

    if (file.size > maxSize) {
      return `Files must be smaller than ${maxSize / 1024 / 1024}MB`;
    }

    return null;
  };

  const handleFileChange = (event) => {
    const fileList = event.target.files;
    if (!fileList) {
      setValue(multiple ? [] : null);
      return;
    }

    const selectedFiles = Array.from(fileList);

    if (selectedFiles.length === 0) {
      setValue(multiple ? [] : null);
      return;
    }

    if (multiple && selectedFiles.length > maxFiles) {
      setError(`You can only upload up to ${maxFiles} files`);
      setValue(Array.isArray(value) ? value : []);
      setInputKey((prev) => prev + 1);
      return;
    }

    const errors = selectedFiles.map(validateFile).filter(Boolean);
    if (errors.length > 0) {
      setError(errors[0] || 'Invalid file');
      setValue(multiple ? (Array.isArray(value) ? value : []) : null);
      setInputKey((prev) => prev + 1);
      return;
    }

    setError('');
    setValue(multiple ? selectedFiles : selectedFiles[0]);
  };

  const handleRemoveFile = (fileToRemove) => {
    if (multiple && Array.isArray(value)) {
      const newFiles = value.filter((file) => file !== fileToRemove);
      setValue(newFiles);
    } else {
      setValue(null);
    }
    setError('');
    setInputKey((prev) => prev + 1);
  };

  const handleRemoveAllFiles = () => {
    setValue(multiple ? [] : null);
    setError('');
    setInputKey((prev) => prev + 1);
  };

  const renderFileList = () => {
    const files =
      multiple && Array.isArray(value) ? value : value ? [value] : [];

    if (files.length === 0) return null;

    return (
      <div className="space-y-2">
        {multiple && files.length > 1 && (
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleRemoveAllFiles}
              className="text-sm text-red-600 hover:text-red-800"
            >
              Remove All
            </button>
          </div>
        )}
        {files.map((file, index) => (
          <div
            key={`${file.name}-${index}`}
            className="p-4 bg-gray-50 rounded-lg flex items-center justify-between"
          >
            <div className="truncate flex-1">
              <p className="text-sm font-medium text-gray-900">{file.name}</p>
              <p className="text-sm text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleRemoveFile(file)}
              className="ml-4 text-gray-500 hover:text-red-600"
            >
              <Icon className="w-5 h-5" icon="x" />
            </button>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className={`w-full max-w-md bg-default-100 hover:bg-default-200 rounded-lg border border-gray-200 shadow-sm ${className}`}
    >
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>

      <div className="p-4 space-y-4">
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Icon className="w-8 h-8 mb-2 text-gray-500" icon="upload" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">
                PDF {multiple ? `(max ${maxFiles} files, ` : '('}max{' '}
                {maxSize / 1024 / 1024}MB each)
              </p>
            </div>
            <input
              key={inputKey}
              type="file"
              className="hidden"
              accept={accept}
              multiple={multiple}
              onChange={handleFileChange}
            />
          </label>
        </div>

        {error && <div className="text-sm text-red-500 mt-2">{error}</div>}

        {renderFileList()}
      </div>
    </div>
  );
};

/** @type {import('@rhino-project/core/config').RhinoConfig} */
const rhinoConfig = {
  version: 1,
  components: {
    every_field: {
      // ModelCreate: { props: { paths: ['another_user'] } }
      ModelFilters: {
        props: {
          paths: [
            'string',
            'integer_no_nil',
            'float_no_nil',
            'date_time_required',
            'date_required',
            'time_required',
            'enum_required',
            'user',
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
      ModelFilters: {
        props: {
          paths: ['is_published']
        }
      },
      ModelIndexTable: ModelIndexCardGrid,

      single_file_attachment: {
        ModelFieldGroup: FileInput
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
