import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-label',
  templateUrl: './quantity-label.component.html'
})
export class QuantityLabelComponent implements OnInit {

  // TODO: add output to frontend!
  /**
   * TODO:
   * Write a quantify label function. It will take
   * 2 inputs. The first input is a string that is
   * a singular form of a word. The second input is
   * a number the indicates the count. The function
   * should return a string that combines the count
   * and the word such that the word is plural or
   * singular depending on the count.
   *
   *    Examples:
   *      "cup" 1 => "1 cup"
   *      "cup" 2 => "2 cups"
   *      "box" 1 => "1 box"
   *      "box" 2 => "2 boxes"
   *
   * Testing:
   * Please explain your approach to testing this code.
   */

  ngOnInit(): void {
     /**
     * TODO:
     * Call the quantify label function here
     * and log the result to the console.
     */
     this.quantifyLabelFn('cup', 0);
  }

  quantifyLabelFn(word: string, count: number) {
    const output = `"${word}" ${count} => "${count + ' ' + word}${count > 1 ? 's' : '' }"`;
    console.log(output);
    // cases:
    // what if its not plural word?
    return output;
  }
  // Expected output "box" 2 => "2 boxes"
}
