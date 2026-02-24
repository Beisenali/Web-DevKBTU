import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Product } from './models/product.model';
import { Category } from './models/category.model';
import { PRODUCTS } from './data/products.data';
import { CATEGORIES } from './data/categories.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Online Store';

  categories: Category[] = CATEGORIES;
  products: Product[] = PRODUCTS.map((p) => ({ ...p }));
  selectedCategoryId: number | null = null;

  get selectedProducts(): Product[] {
    if (this.selectedCategoryId === null) {
      return [];
    }
    return this.products.filter((p) => p.categoryId === this.selectedCategoryId);
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
  }

  onDeleteProduct(productId: number): void {
    this.products = this.products.filter((p) => p.id !== productId);
  }
}
