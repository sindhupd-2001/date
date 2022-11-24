import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'date';
  Date1: Date = new Date();
    LocalDate : string = new Date().toLocaleString();
  constructor() { }

  ngOnInit(): void {
  }
}
