import { FormlyFieldConfig } from '@ngx-formly/core';
export const authors: FormlyFieldConfig[] = [
  {
    "key": 'authors',
    "type": 'authorsArray',
    "templateOptions": {
      "addText": 'Add another investments',
    },
    "fieldArray": {
      "wrappers": [ "authors" ],
      "fieldGroup": [
        {
          "wrappers": [ "authorsEdit"],
          "fieldGroup": [
            {
              "type": "input",
              "key": "email",
              "templateOptions": {
                "label": "Email",
                "description": "",
              }
            }
          ]
        },
        {
          "wrappers": [ "authorsSummary"],
          "fieldGroup": [
            {
              "type": "input",
              "key": "name",
              "templateOptions": {
                "label": "Name",
                "description": "",
              }
            }
          ]
        }
      ]
    }
  }
];