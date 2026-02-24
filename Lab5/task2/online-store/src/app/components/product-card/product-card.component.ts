import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
  @Output() delete = new EventEmitter<number>();

  readonly Math = Math;
  selectedImageIndex = 0;

  get selectedImage(): string {
    return this.product.images[this.selectedImageIndex] ?? this.product.image;
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  nextImage(): void {
    this.selectedImageIndex = (this.selectedImageIndex + 1) % this.product.images.length;
  }

  prevImage(): void {
    this.selectedImageIndex =
      (this.selectedImageIndex - 1 + this.product.images.length) % this.product.images.length;
  }

  getRatingStars(): number[] {
    return Array(5).fill(0);
  }

  getShareWhatsAppUrl(): string {
    const text = encodeURIComponent(`Check out this product: ${this.product.link}`);
    return `https://wa.me/?text=${text}`;
  }

  getShareTelegramUrl(): string {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    return `https://t.me/share/url?url=${url}&text=${text}`;
  }

  shareWhatsApp(): void {
    window.open(this.getShareWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  }

  shareTelegram(): void {
    window.open(this.getShareTelegramUrl(), '_blank', 'noopener,noreferrer');
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.src = 'https://placehold.co/300x300?text=No+Image';
    }
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('kk-KZ', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(price);
  }

  onLikeClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.product.likes++;
  }

  onDeleteClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.delete.emit(this.product.id);
  }
}
