import { Component } from '@angular/core';
import { Photo } from '../models/photo';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.scss']
})
export class ListPhotosComponent {

  photos: Photo[] = [];
  albumId!: number;

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit(): void {
    // Get the album ID from the route parameters
    this.albumId = Number(this.route.snapshot.paramMap.get('albumId'));

    // Fetch photos for the given album ID
    this.albumService.getPhotosByAlbumId(this.albumId).subscribe((data: Photo[]) => {
      this.photos = data;
    });
  }

}
