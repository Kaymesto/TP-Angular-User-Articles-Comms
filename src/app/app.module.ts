import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from "@angular/common/http";
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article-list/article/article.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { CommentComponent } from './article-page/comment/comment.component';
import { SpinnerComponent } from './shared/component/spinner/spinner.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { UserAddComponent } from './user-add/user-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListModule } from './user-list/user-list.module';
import { AddArticleComponent } from './add-article/add-article.component';
import { UpdateArticleComponent } from './article-page/update-article/update-article.component';
@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleComponent,
    ArticlePageComponent,
    CommentComponent,
    SpinnerComponent,
    NavbarComponent,
    UserAddComponent,
    AddArticleComponent,
    UpdateArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
