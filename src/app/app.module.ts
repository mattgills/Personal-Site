// Platform Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule } from 'ngx-markdown';

// Modules
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Services
import { ProjectsService } from './projects/projects.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    NavComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MarkdownModule.forRoot({ loader: HttpClient })
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
