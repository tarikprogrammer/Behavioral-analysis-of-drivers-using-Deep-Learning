import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbareComponent } from './header/navbare/navbare.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { AboutComponent } from './about/about.component';
import { UploadComponent } from './upload/upload.component';
import { UploadImageComponent } from './upload/upload-image/upload-image.component';
import { UplaodVideoComponent } from './upload/uplaod-video/uplaod-video.component';
import { OpenCamComponent } from './upload/open-cam/open-cam.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceService } from './servives/service.service';
import { HttpClientModule } from '@angular/common/http';
import {RouterLink, RouterOutlet} from "@angular/router";
import { LoaderComponent } from './loader/loader.component';
import { LoaderVideoComponent } from './loader-video/loader-video.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbareComponent,
    MainHeaderComponent,
    AboutComponent,
    UploadComponent,
    UploadImageComponent,
    UplaodVideoComponent,
    OpenCamComponent,
    FooterComponent,
    LoaderComponent,
    LoaderVideoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
