import { Component, OnInit} from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'app-authors-array',
  templateUrl: './authors-array.component.html',
  styleUrls: ['./authors-array.component.scss']
})
export class AuthorsArrayComponent extends FieldArrayType implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit(): void {
      console.log("Array properties ->", this);
  }
  
}
