import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="page">
      <h1>About Album Browser</h1>
      <p>
        This application demonstrates Angular routing, HTTP communication, and services
        by browsing albums from the JSONPlaceholder API.
      </p>
      <p>
        Student: Your Name<br />
        Course: Web Development - Lab 6
      </p>
    </section>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {}

