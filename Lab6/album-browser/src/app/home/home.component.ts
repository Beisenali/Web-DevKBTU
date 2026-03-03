import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page page--center">
      <h1>Welcome to the Album Browser</h1>
      <p>Browse albums fetched from the JSONPlaceholder API.</p>
      <button routerLink="/albums" class="primary-button">Browse Albums</button>
    </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}

