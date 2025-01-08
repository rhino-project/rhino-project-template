const api = {
  "openapi": "3.0.3",
  "components": {
    "schemas": {
      "active_storage_attachment": {
        "x-rhino-model": {
          "model": "active_storage_attachment",
          "modelPlural": "active_storage/attachments",
          "name": "activeStorage::Attachment",
          "pluralName": "activeStorage::Attachments",
          "readableName": "Attachment",
          "pluralReadableName": "Attachments",
          "ownedBy": null,
          "singular": false,
          "path": "/api/attachments",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "integer",
            "format": "identifier"
          },
          "name": {
            "x-rhino-attribute": {
              "name": "name",
              "readableName": "Name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string"
          },
          "record_type": {
            "x-rhino-attribute": {
              "name": "record_type",
              "readableName": "Record Type",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "url": {
            "x-rhino-attribute": {
              "name": "url",
              "readableName": "Url",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true
          },
          "url_attachment": {
            "x-rhino-attribute": {
              "name": "url_attachment",
              "readableName": "Url Attachment",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true
          },
          "variants": {
            "x-rhino-attribute": {
              "name": "variants",
              "readableName": "Variants",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "default": {
            },
            "type": "json"
          },
          "signed_id": {
            "x-rhino-attribute": {
              "name": "signed_id",
              "readableName": "Signed",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": true,
            "type": "unknown"
          }
        },
        "required": [
          "name",
          "record_type"
        ]
      },
      "user": {
        "x-rhino-model": {
          "model": "user",
          "modelPlural": "users",
          "name": "user",
          "pluralName": "users",
          "readableName": "User",
          "pluralReadableName": "Users",
          "ownedBy": null,
          "singular": false,
          "path": "/api/users",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "integer",
            "format": "identifier"
          },
          "name": {
            "x-rhino-attribute": {
              "name": "name",
              "readableName": "Name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "nickname": {
            "x-rhino-attribute": {
              "name": "nickname",
              "readableName": "Nickname",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "email": {
            "x-rhino-attribute": {
              "name": "email",
              "readableName": "Email",
              "readable": true,
              "creatable": true,
              "updatable": false
            },
            "nullable": false,
            "type": "string",
            "pattern": "^[^@\\s]+@[^@\\s]+$"
          },
          "image": {
            "x-rhino-attribute": {
              "name": "image",
              "readableName": "Image",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": true,
            "type": "string"
          }
        },
        "required": [
          "email"
        ]
      },
      "account": {
        "x-rhino-model": {
          "model": "account",
          "modelPlural": "accounts",
          "name": "account",
          "pluralName": "accounts",
          "readableName": "Account",
          "pluralReadableName": "Accounts",
          "ownedBy": "global",
          "singular": true,
          "path": "/api/account",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "integer",
            "format": "identifier"
          },
          "name": {
            "x-rhino-attribute": {
              "name": "name",
              "readableName": "Name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "nickname": {
            "x-rhino-attribute": {
              "name": "nickname",
              "readableName": "Nickname",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "email": {
            "x-rhino-attribute": {
              "name": "email",
              "readableName": "Email",
              "readable": true,
              "creatable": true,
              "updatable": false
            },
            "nullable": false,
            "type": "string",
            "pattern": "^[^@\\s]+@[^@\\s]+$"
          },
          "image": {
            "x-rhino-attribute": {
              "name": "image",
              "readableName": "Image",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": true,
            "type": "string"
          }
        },
        "required": [
          "email"
        ]
      },
      "blog": {
        "x-rhino-model": {
          "model": "blog",
          "modelPlural": "blogs",
          "name": "blog",
          "pluralName": "blogs",
          "readableName": "Blog",
          "pluralReadableName": "Blogs",
          "ownedBy": "user",
          "singular": false,
          "path": "/api/blogs",
          "searchable": true
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "integer",
            "format": "identifier"
          },
          "title": {
            "x-rhino-attribute": {
              "name": "title",
              "readableName": "Title",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string"
          },
          "content": {
            "x-rhino-attribute": {
              "name": "content",
              "readableName": "Content",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "text"
          },
          "dnum": {
            "x-rhino-attribute": {
              "name": "dnum",
              "readableName": "Dnum",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "number",
            "format": "double"
          },
          "published_on": {
            "x-rhino-attribute": {
              "name": "published_on",
              "readableName": "Published On",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string",
            "format": "date"
          },
          "published_at": {
            "x-rhino-attribute": {
              "name": "published_at",
              "readableName": "Published At",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string",
            "format": "datetime"
          },
          "published_time": {
            "x-rhino-attribute": {
              "name": "published_time",
              "readableName": "Published Time",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string",
            "format": "time"
          },
          "is_published": {
            "x-rhino-attribute": {
              "name": "is_published",
              "readableName": "Is Published",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "boolean"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "updated_at": {
            "x-rhino-attribute": {
              "name": "updated_at",
              "readableName": "Updated At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "user": {
            "x-rhino-attribute": {
              "name": "user",
              "readableName": "User",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ]
          },
          "image_attachment": {
            "x-rhino-attribute": {
              "name": "image_attachment",
              "readableName": "Image Attachment",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/active_storage_attachment"
              }
            ]
          },
          "single_file_attachment": {
            "x-rhino-attribute": {
              "name": "single_file_attachment",
              "readableName": "Single File Attachment",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/active_storage_attachment"
              }
            ]
          },
          "multiple_files_attachments": {
            "x-rhino-attribute": {
              "name": "multiple_files_attachments",
              "readableName": "Multiple Files Attachments",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "array",
            "items": {
              "type": "reference",
              "anyOf": [
                {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              ],
              "x-rhino-attribute-array": {
              }
            }
          }
        },
        "required": [
          "title",
          "user"
        ]
      },
      "every_field": {
        "x-rhino-model": {
          "model": "every_field",
          "modelPlural": "every_fields",
          "name": "everyField",
          "pluralName": "everyFields",
          "readableName": "Every field",
          "pluralReadableName": "Every fields",
          "ownedBy": "user",
          "singular": false,
          "path": "/api/every_fields",
          "searchable": false
        },
        "type": "object",
        "properties": {
          "id": {
            "x-rhino-attribute": {
              "name": "id",
              "readableName": "Id",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "integer",
            "format": "identifier"
          },
          "string": {
            "x-rhino-attribute": {
              "name": "string",
              "readableName": "String",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "string_length_min": {
            "x-rhino-attribute": {
              "name": "string_length_min",
              "readableName": "String Length Min",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string",
            "minLength": 2
          },
          "string_length_max": {
            "x-rhino-attribute": {
              "name": "string_length_max",
              "readableName": "String Length Max",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string",
            "maxLength": 5
          },
          "string_length_range": {
            "x-rhino-attribute": {
              "name": "string_length_range",
              "readableName": "String Length Range",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string",
            "minLength": 2,
            "maxLength": 5
          },
          "string_length_exact": {
            "x-rhino-attribute": {
              "name": "string_length_exact",
              "readableName": "String Length Exact",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string",
            "minLength": 2,
            "maxLength": 2
          },
          "string_inclusion": {
            "x-rhino-attribute": {
              "name": "string_inclusion",
              "readableName": "String Inclusion",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string",
            "enum": [
              "test",
              "example"
            ]
          },
          "string_pattern": {
            "x-rhino-attribute": {
              "name": "string_pattern",
              "readableName": "String Pattern",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string",
            "pattern": "^[Tt][a-zA-Z]+$"
          },
          "float_gt": {
            "x-rhino-attribute": {
              "name": "float_gt",
              "readableName": "Float Gt",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "number",
            "format": "double",
            "minimum": 2,
            "exclusiveMinimum": true
          },
          "float_gte": {
            "x-rhino-attribute": {
              "name": "float_gte",
              "readableName": "Float Gte",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "number",
            "format": "double",
            "minimum": 2
          },
          "float_lt": {
            "x-rhino-attribute": {
              "name": "float_lt",
              "readableName": "Float Lt",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "number",
            "format": "double",
            "maximum": 2,
            "exclusiveMaximum": true
          },
          "float_lte": {
            "x-rhino-attribute": {
              "name": "float_lte",
              "readableName": "Float Lte",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "number",
            "format": "double",
            "maximum": 2
          },
          "float_in": {
            "x-rhino-attribute": {
              "name": "float_in",
              "readableName": "Float In",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "number",
            "format": "double",
            "minimum": 2,
            "maximum": 5
          },
          "float_no_nil": {
            "x-rhino-attribute": {
              "name": "float_no_nil",
              "readableName": "Float No Nil",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "number",
            "format": "double"
          },
          "integer_gt": {
            "x-rhino-attribute": {
              "name": "integer_gt",
              "readableName": "Integer Gt",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "integer",
            "minimum": 2,
            "exclusiveMinimum": true
          },
          "integer_gte": {
            "x-rhino-attribute": {
              "name": "integer_gte",
              "readableName": "Integer Gte",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "integer",
            "minimum": 2
          },
          "integer_lt": {
            "x-rhino-attribute": {
              "name": "integer_lt",
              "readableName": "Integer Lt",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "integer",
            "maximum": 2,
            "exclusiveMaximum": true
          },
          "integer_lte": {
            "x-rhino-attribute": {
              "name": "integer_lte",
              "readableName": "Integer Lte",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "integer",
            "maximum": 2
          },
          "integer_in": {
            "x-rhino-attribute": {
              "name": "integer_in",
              "readableName": "Integer In",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "integer",
            "minimum": 2,
            "maximum": 5
          },
          "integer_no_nil": {
            "x-rhino-attribute": {
              "name": "integer_no_nil",
              "readableName": "Integer No Nil",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "integer"
          },
          "date": {
            "x-rhino-attribute": {
              "name": "date",
              "readableName": "Date",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string",
            "format": "date"
          },
          "date_required": {
            "x-rhino-attribute": {
              "name": "date_required",
              "readableName": "Date Required",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string",
            "format": "date"
          },
          "date_time": {
            "x-rhino-attribute": {
              "name": "date_time",
              "readableName": "Date Time",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string",
            "format": "datetime"
          },
          "date_time_required": {
            "x-rhino-attribute": {
              "name": "date_time_required",
              "readableName": "Date Time Required",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "time": {
            "x-rhino-attribute": {
              "name": "time",
              "readableName": "Time",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string",
            "format": "time"
          },
          "time_required": {
            "x-rhino-attribute": {
              "name": "time_required",
              "readableName": "Time Required",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string",
            "format": "time"
          },
          "year": {
            "x-rhino-attribute": {
              "name": "year",
              "readableName": "Year",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "integer",
            "minimum": 2020,
            "exclusiveMinimum": true,
            "maximum": 2025,
            "exclusiveMaximum": true,
            "format": "year"
          },
          "year_required": {
            "x-rhino-attribute": {
              "name": "year_required",
              "readableName": "Year Required",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "integer",
            "minimum": 2020,
            "exclusiveMinimum": true,
            "maximum": 2025,
            "exclusiveMaximum": true,
            "format": "year"
          },
          "created_at": {
            "x-rhino-attribute": {
              "name": "created_at",
              "readableName": "Created At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "updated_at": {
            "x-rhino-attribute": {
              "name": "updated_at",
              "readableName": "Updated At",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": false,
            "type": "string",
            "format": "datetime"
          },
          "currency": {
            "x-rhino-attribute": {
              "name": "currency",
              "readableName": "Currency",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "decimal",
            "format": "currency"
          },
          "currency_required": {
            "x-rhino-attribute": {
              "name": "currency_required",
              "readableName": "Currency Required",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "decimal",
            "format": "currency"
          },
          "array_int": {
            "x-rhino-attribute": {
              "name": "array_int",
              "readableName": "Array Int",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "array",
            "items": {
              "type": "integer"
            }
          },
          "enum": {
            "x-rhino-attribute": {
              "name": "enum",
              "readableName": "Enum",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string",
            "enum": [
              "test",
              "example"
            ]
          },
          "enum_required": {
            "x-rhino-attribute": {
              "name": "enum_required",
              "readableName": "Enum Required",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "string",
            "enum": [
              "test_required",
              "example_required"
            ]
          },
          "string_overrideable": {
            "x-rhino-attribute": {
              "name": "string_overrideable",
              "readableName": "Overriden name",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string"
          },
          "phone": {
            "x-rhino-attribute": {
              "name": "phone",
              "readableName": "Phone",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": true,
            "type": "string",
            "format": "phone"
          },
          "float_virtual": {
            "x-rhino-attribute": {
              "name": "float_virtual",
              "readableName": "Float Virtual",
              "readable": true,
              "creatable": false,
              "updatable": false
            },
            "readOnly": true,
            "nullable": true,
            "type": "number",
            "format": "double"
          },
          "string_readonly": {
            "x-rhino-attribute": {
              "name": "string_readonly",
              "readableName": "String Readonly",
              "readable": true,
              "creatable": true,
              "updatable": false
            },
            "nullable": true,
            "type": "string"
          },
          "user": {
            "x-rhino-attribute": {
              "name": "user",
              "readableName": "User",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ]
          },
          "another_user": {
            "x-rhino-attribute": {
              "name": "another_user",
              "readableName": "Another User",
              "readable": true,
              "creatable": true,
              "updatable": true
            },
            "nullable": false,
            "type": "reference",
            "anyOf": [
              {
                "$ref": "#/components/schemas/user"
              }
            ]
          },
          "string_write_only": {
            "x-rhino-attribute": {
              "name": "string_write_only",
              "readableName": "String Write Only",
              "readable": false,
              "creatable": true,
              "updatable": true
            },
            "writeOnly": true,
            "nullable": true,
            "type": "string"
          }
        },
        "required": [
          "float_no_nil",
          "integer_no_nil",
          "date_required",
          "date_time_required",
          "time_required",
          "year_required",
          "currency_required",
          "enum_required",
          "user",
          "another_user"
        ]
      }
    }
  },
  "paths": {
    "/api/attachments": {
      "get": {
        "operationId": "active_storage_attachment-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      },
      "post": {
        "operationId": "active_storage_attachment-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      }
    },
    "/api/attachments/:id": {
      "get": {
        "operationId": "active_storage_attachment-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      },
      "patch": {
        "operationId": "active_storage_attachment-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      },
      "put": {
        "operationId": "active_storage_attachment-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      },
      "delete": {
        "operationId": "active_storage_attachment-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/active_storage_attachment"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "active_storage_attachment"
        ]
      }
    },
    "/api/users": {
      "get": {
        "operationId": "user-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      },
      "post": {
        "operationId": "user-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      }
    },
    "/api/users/:id": {
      "get": {
        "operationId": "user-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      },
      "patch": {
        "operationId": "user-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      },
      "put": {
        "operationId": "user-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      },
      "delete": {
        "operationId": "user-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/user"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "user"
        ]
      }
    },
    "/api/account": {
      "get": {
        "operationId": "account-show",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/account"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "account"
        ]
      },
      "patch": {
        "operationId": "account-update",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/account"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "account"
        ]
      },
      "put": {
        "operationId": "account-update",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/account"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "account"
        ]
      }
    },
    "/api/blogs": {
      "get": {
        "operationId": "blog-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/blog"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "blog"
        ]
      },
      "post": {
        "operationId": "blog-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/blog"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "blog"
        ]
      }
    },
    "/api/blogs/:id": {
      "get": {
        "operationId": "blog-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/blog"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "blog"
        ]
      },
      "patch": {
        "operationId": "blog-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/blog"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "blog"
        ]
      },
      "put": {
        "operationId": "blog-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/blog"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "blog"
        ]
      },
      "delete": {
        "operationId": "blog-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/blog"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "blog"
        ]
      }
    },
    "/api/every_fields": {
      "get": {
        "operationId": "every_field-index",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/every_field"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "every_field"
        ]
      },
      "post": {
        "operationId": "every_field-create",
        "parameters": [

        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/every_field"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "every_field"
        ]
      }
    },
    "/api/every_fields/:id": {
      "get": {
        "operationId": "every_field-show",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/every_field"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "every_field"
        ]
      },
      "patch": {
        "operationId": "every_field-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/every_field"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "every_field"
        ]
      },
      "put": {
        "operationId": "every_field-update",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/every_field"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "every_field"
        ]
      },
      "delete": {
        "operationId": "every_field-destroy",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/every_field"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
              }
            }
          },
          "403": {
            "description": "Forbidden",
            "content": {
              "application/json": {
              }
            }
          },
          "422": {
            "description": "Unprocessable Content",
            "content": {
              "application/json": {
              }
            }
          }
        },
        "tags": [
          "every_field"
        ]
      }
    }
  },
  "info": {
    "title": "RhinoTemplate API",
    "version": "0.0.0",
    "x-rhino": {
      "modules": {
        "rhino": {
          "version": "0.30.0.alpha.7",
          "authOwner": "user",
          "baseOwner": "user",
          "oauth": [

          ],
          "allow_signup": true
        }
      }
    }
  }
};

export default api;
