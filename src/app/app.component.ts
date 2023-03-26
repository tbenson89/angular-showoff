import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-top-nav></app-top-nav>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-showoff';
}
