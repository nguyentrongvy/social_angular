import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
