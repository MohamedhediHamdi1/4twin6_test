import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

 
  getAlbums(): Observable<Album[]> {
    console.log(this.http.get<Album[]>(`${this.apiUrl}/albums`))
    return this.http.get<Album[]>(`${this.apiUrl}/albums`);
  }

  getArchivedAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums?archived=1`);
  }

   addAlbum(album: Album): Observable<Album> {
    return this.http.post<Album>(`${this.apiUrl}/albums`, album);
  }

  deleteAlbum(albumId: number): Observable<void> {
    this.deletePhotosByAlbumId(albumId).subscribe();
    return this.http.delete<void>(`${this.apiUrl}/albums/${albumId}`);
  }

  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/photos?idAlbum=${albumId}`);
  }

  
  private deletePhotosByAlbumId(albumId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/photos?idAlbum=${albumId}`);
  }

 
}