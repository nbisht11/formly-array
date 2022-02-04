import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { config } from './config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorsArrayComponent } from './types/authors-array/authors-array.component';
import { AuthorsComponent } from './wrappers/authors/authors.component';
import { AuthorsEditComponent } from './wrappers/authors-edit/authors-edit.component';
import { AuthorsSummaryComponent } from './wrappers/authors-summary/authors-summary.component';
import { InputComponent } from './types/input/input.component';

@NgModule({
  declarations: [
    AuthorsArrayComponent,
    AuthorsComponent,
    AuthorsEditComponent,
    AuthorsSummaryComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormlyModule.forRoot(config),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
  ]
})
export class FormlyTestingModule { }
