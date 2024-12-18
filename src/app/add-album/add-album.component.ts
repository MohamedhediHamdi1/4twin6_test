import { Component } from '@angular/core';
import { Album } from '../models/album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss']
})
export class AddAlbumComponent {

  newAlbum: Partial<Album> = {
    title: '',
    coverPicture: '',
    archived: 0, 
    creationDate: new Date() 
  };

  constructor(private albumService: AlbumService) {}

  addAlbum(): void {
    const albumToSave: Album = {
      ...this.newAlbum,
      id: Date.now() 
    } as Album;

    this.albumService.addAlbum(albumToSave).subscribe(() => {
      alert('Album added successfully!');
    });
  }

}
