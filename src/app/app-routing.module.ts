import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { AddPostReactiveFormComponent } from './admin/add-post-reactive-form/add-post-reactive-form.component';
import { BookComponent } from './book/book/book.component';

const routes : Routes = [
  { path: 'admin/add-post', component: AddPostComponent },
  { path: 'admin/add-post-react', component: AddPostReactiveFormComponent },

  { path: 'admin/book', component: BookComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
