import { Component, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { authors } from './formly-testing/authorsData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked {
  title = 'formlyArray';

  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = authors;

  constructor(private cdref: ChangeDetectorRef) {

  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  submit() {
    console.log("Model ->", this.model);
  }

  addDataToModel() {
    this.model = {
      "authors": [
          {
              "email": "firstEmail@test.com",
              "name": "First Name"
          },
          {
              "email": "SecondEmail@test.com",
              "name": "Second Name"
          }
      ]
    };
    console.log(this.model);
    console.log("Data has been added");
  }

}
