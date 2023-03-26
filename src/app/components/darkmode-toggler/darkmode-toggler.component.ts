import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// TODO: Build out the rest of the darkmode toggler
// Note: this will display the usage of @Output() and Events Triggers statechanges!
@Component({
  selector: 'app-darkmode-toggler',
  template: `
    <div>
      <button (click)="toggleDarkMode()">Toggle dark mode</button>
      <p>{{ status }}</p>
    </div>
  `,
  styles: [],
})
export class DarkmodeTogglerComponent implements OnInit {
  status: string = 'disabled';
  @Output() stateChanged = new EventEmitter<string>();

  toggleDarkMode() {
    if (this.status === 'disabled') {
      this.status = 'active';
    } else {
      this.status = 'disabled';
    }
    this.stateChanged.emit(this.status);
  }

  constructor() {}

  ngOnInit(): void {}
}
