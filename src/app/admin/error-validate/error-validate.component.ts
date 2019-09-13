import { Component, OnInit, Input } from '@angular/core';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';

@Component({
  selector: 'app-error-validate',
  templateUrl: './error-validate.component.html',
  styleUrls: ['./error-validate.component.scss']
})
export class ErrorValidateComponent implements OnInit {

  @Input('control') control;
  @Input('username') username;

  constructor() { }

  get message() {
    console.log(this.control);
    for(let err in this.control.errors) {
      if(this.control.dirty) {
        return this.getErrorMessage(err, this.control.errors[err]);
      }
    }
    // return null;
  }

  getErrorMessage(err, value) {
    console.log('value', value);
    let messages = {
      'required' : 'Required',
      'minlength' : `Minlength : ${value.requiredLength} character`,
      'maxlength' : `Maxlength : ${value.requiredLength} character`,
    }
    // console.log('message', messages[err])
    return messages[err];
  }  

  ngOnInit() {
  }

}
