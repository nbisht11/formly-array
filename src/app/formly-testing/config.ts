import { ConfigOption } from '@ngx-formly/core';
import { AuthorsComponent } from './wrappers/authors/authors.component';
import { AuthorsEditComponent } from './wrappers/authors-edit/authors-edit.component';
import { AuthorsSummaryComponent } from './wrappers/authors-summary/authors-summary.component';
import { InputComponent } from './types/input/input.component';
import { AuthorsArrayComponent } from './types/authors-array/authors-array.component';
export const config:ConfigOption = {
    wrappers: [
        { name: 'authors', component: AuthorsComponent },
        { name: 'authorsEdit', component: AuthorsEditComponent },
        { name: 'authorsSummary', component: AuthorsSummaryComponent }
    ],
    types: [
        { name: 'input', component: InputComponent },
        { name: 'authorsArray', component: AuthorsArrayComponent}
    ]
};