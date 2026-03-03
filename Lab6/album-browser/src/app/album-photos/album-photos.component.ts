import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.scss']
})
export class AlbumPhotosComponent implements OnInit {
  albumId: number | null = null;
  photos: Photo[] = [];
  isLoading = false;
  error: string | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : NaN;

    if (!id || Number.isNaN(id)) {
      this.error = 'Invalid album id.';
      return;
    }

    this.albumId = id;
    this.loadPhotos(id);
  }

  loadPhotos(id: number): void {
    this.isLoading = true;
    this.error = null;

    this.albumService.getAlbumPhotos(id).subscribe({
      next: photos => {
        this.photos = photos;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Failed to load photos.';
        this.isLoading = false;
      }
    });
  }

  goBackToAlbum(): void {
    if (this.albumId != null) {
      this.router.navigate(['/albums', this.albumId]);
    } else {
      this.router.navigate(['/albums']);
    }
  }
}

