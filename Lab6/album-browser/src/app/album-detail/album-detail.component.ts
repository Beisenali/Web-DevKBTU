import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editedTitle = '';
  isLoading = false;
  isSaving = false;
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

    this.fetchAlbum(id);
  }

  fetchAlbum(id: number): void {
    this.isLoading = true;
    this.error = null;

    this.albumService.getAlbum(id).subscribe({
      next: album => {
        this.album = album;
        this.editedTitle = album.title;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Failed to load album.';
        this.isLoading = false;
      }
    });
  }

  save(): void {
    if (!this.album) {
      return;
    }

    this.isSaving = true;
    this.error = null;

    const updated: Album = { ...this.album, title: this.editedTitle };

    this.albumService.updateAlbum(updated).subscribe({
      next: album => {
        this.album = album;
        this.editedTitle = album.title;
        this.isSaving = false;
      },
      error: () => {
        this.error = 'Failed to save album.';
        this.isSaving = false;
      }
    });
  }

  goBackToAlbums(): void {
    this.router.navigate(['/albums']);
  }
}

