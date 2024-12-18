import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListAlbumsComponent } from './list-albums/list-albums.component';
import { ArchivesComponent } from './archives/archives.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { ListPhotosComponent } from './list-photos/list-photos.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"albums",component:ListAlbumsComponent},
  {path:"photos/:albumId",component:ListPhotosComponent},
  {path:"archives",component:ArchivesComponent},
  {path:"add_album",component:AddAlbumComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
