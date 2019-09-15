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
    ListBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
