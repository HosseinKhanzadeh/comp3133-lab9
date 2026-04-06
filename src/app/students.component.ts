import { Component } from '@angular/core';

@Component({
  selector: 'students',
  standalone: false,
  template: `
    <h2>{{ getTitle() }}</h2>
    <p>Current Date: <span class="date-value">{{ getCurrentDate() }}</span></p>
  `,
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  title: string = 'Welcome to the Students Component';

  getTitle(): string {
    return this.title;
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString();
  }
}
