import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-authors-summary',
  templateUrl: './authors-summary.component.html',
  styleUrls: ['./authors-summary.component.scss']
})
export class AuthorsSummaryComponent extends FieldWrapper {

  constructor() { 
    super();
  }

}
