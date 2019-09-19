import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { AddPostReactiveFormComponent } from './admin/add-post-reactive-form/add-post-reactive-form.component';
import { BookComponent } from './book/book/book.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { SwaggerComponent } from './swagger/swagger/swagger.component';
import { PostComponent } from './module/post/post.component';
import { RegisterComponent } from './module/register/register.component';
import { LoginComponent } from './module/login/login.component';
import { ProfileComponent } from './module/profile/profile.component';
import { CreatePostComponent } from './module/create-post/create-post.component';

const routes : Routes = [

  { path: 'home', component: PostComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin/add-post', component: AddPostComponent },
  { path: 'admin/add-post-react', component: AddPostReactiveFormComponent },

  { path: 'admin/book',  component: ListBookComponent },
  { path: 'admin/book/:id', component: BookComponent },
  { path: 'swagger', component: SwaggerComponent },
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
