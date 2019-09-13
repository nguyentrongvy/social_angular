import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post-reactive-form',
  templateUrl: './add-post-reactive-form.component.html',
  styleUrls: ['./add-post-reactive-form.component.scss']
})
export class AddPostReactiveFormComponent implements OnInit {

  public frmUser: FormGroup;

  constructor(
    private _formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.frmUser = this._formBuilder.group({
        username : ['', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ]],
        password : ['', [
          Validators.required
        ]],
        fullname : [''],
        email : [''],
        phone : ['']
    })
  }

  onSubmitForm() {
    console.log(this.frmUser);
  }

  onResetForm() {
    this.frmUser.reset();
  }

}
