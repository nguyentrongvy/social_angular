import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContenLeftComponent } from './myhome/conten-left/conten-left.component';
import { ContenRightComponent } from './myhome/conten-right/conten-right.component';
import { ContenCenterComponent } from './myhome/conten-center/conten-center.component';
import { AppRoutingModule } from './app-routing.module';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { AddPostReactiveFormComponent } from './admin/add-post-reactive-form/add-post-reactive-form.component';
import { ErrorValidateComponent } from './admin/error-validate/error-validate.component';
import { HighlightDirective } from './highlight.directive';
import { BookComponent } from './book/book/book.component';
import { ListBookComponent } from './book/list-book/list-book.component';
import { SwaggerComponent } from './swagger/swagger/swagger.component';
import { HeaderComponent } from './header/header/header.component';
import { SlideComponent } from './slide/slide/slide.component';
import { ListPostComponent } from './module/list-post/list-post.component';
import { PostComponent } from './module/post/post.component';
import { RegisterComponent } from './module/register/register.component';
import { LoginComponent } from './module/login/login.component';
import { ProfileComponent } from './module/profile/profile.component';
import { CreatePostComponent } from './module/create-post/create-post.component';
import { TodosModule } from './todos/todos.module';

@NgModule({
  declarations: [
    AppComponent,
    ContenLeftComponent,
    ContenRightComponent,
    ContenCenterComponent,
    AddPostComponent,
    AddPostReactiveFormComponent,
    ErrorValidateComponent,
    HighlightDirective,
    BookComponent,
    ListBookComponent,
    SwaggerComponent,
    HeaderComponent,
    SlideComponent,
    ListPostComponent,
    PostComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
