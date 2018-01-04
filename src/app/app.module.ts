/// <reference path='../../declarations.d.ts'/>

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './Navigation';
import AboutComponent from './about';
import HomeComponent from './home';

import { BlogModule } from './blog/blog.module';

import { BlogListComponent } from './blog/BlogList';
import { BlogPostComponent } from './blog/post/BlogPost';

const routing = RouterModule.forRoot([
  {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'blog',
    component: BlogListComponent
  }, {
    path: 'blog/:slug',
    component: BlogPostComponent
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
]);

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BlogModule,
    routing,
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    AboutComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}
