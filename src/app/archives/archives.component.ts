import { Component } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.scss']
})
export class ArchivesComponent {
  constructor(private albumService:AlbumService){}
albums:Album[]=[]
  ngOnInit(){
    this.albumService.getArchivedAlbums().subscribe({
      next:(data)=>(this.albums=data)
    })
  }

}
