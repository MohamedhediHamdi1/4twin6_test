import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HomeComponent } from './home/home.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ArchivesComponent } from './archives/archives.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { FormsModule } from '@angular/forms';
import { ListPhotosComponent } from './list-photos/list-photos.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponent,
    ListAlbumsComponent,
    ArchivesComponent,
    AddAlbumComponent,
    ListPhotosComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
