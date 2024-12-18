import { Component } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.scss']
})
export class ListAlbumsComponent {
  constructor(private albumService:AlbumService){}
albums:Album[]=[]
  ngOnInit(){
    this.albumService.getAlbums().subscribe({
      next:(data)=>(this.albums=data)
    })
  }

  removeAlbum(id:number){
    this.albumService.deleteAlbum(id).subscribe();
  }

}
