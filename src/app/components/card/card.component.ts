import { Component, Input, OnInit } from '@angular/core';

// Note: What is this one really for? flip cards? it's where were we going with this?
// I assume we wanted the 4 words that flip up and down to actually be cards. that flip up or down.
// BUT what for ? to create a game? I think we don't need this?
// TODO: DO WE NEED THIS?
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input() count: number = 0;
  cards: string[] = [];
  flippedCardIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Init cards array with "down" for each card
    for (let i = 0; i < this.count; i++) {
      this.cards.push('down');
    }
  }

  flipCard(cardIndex: number) {
    // If: there is already a flipped card, toggle "down"
    if (this.flippedCardIndex !== undefined) {
      this.cards[this.flippedCardIndex] = 'down';
    }

    // Flip the clicked card over to "up"
    this.cards[cardIndex] = 'up';
    this.flippedCardIndex = cardIndex;
  }
}
