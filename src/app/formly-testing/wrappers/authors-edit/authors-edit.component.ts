import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-authors-edit',
  templateUrl: './authors-edit.component.html',
  styleUrls: ['./authors-edit.component.scss']
})
export class AuthorsEditComponent extends FieldWrapper {

  constructor() { 
    super();
  }

}
