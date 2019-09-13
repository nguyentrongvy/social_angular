import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.class';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  public user: User = new User();

  constructor() { }

  ngOnInit() {
  }

  onSubmitForm(form) {
      if(form.valid ) {
        console.log(this.user);
      }
  }

  onResetForm(form) {
    form.reset();
  }

}
