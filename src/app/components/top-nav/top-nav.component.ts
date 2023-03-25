import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  isMenuOpen = false;
  isProfileOpen = false;

  constructor(private router: RouterModule) {}

  ngOnInit(): void {
    
  }

  // Note: Not using these!
  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }

  // toggle() {
  //   this.isProfileOpen = !this.isProfileOpen;
  // }
}
