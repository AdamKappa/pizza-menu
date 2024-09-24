import { AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Item, Price, Size, itemSizes, itemPrices } from '../pizza.data';
@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrl: './pizza-item.component.css',
})
export class PizzaItemComponent implements AfterContentInit {
  @Input() pizza!: Item;
  sizes: Size[] = [];
  prices: Price[] = [];

  ngAfterContentInit() {
    this.sizes = itemSizes;
    this.prices = this.prices = itemPrices.filter(
      (price) => price.itemId === this.pizza.itemId
    );
  }

  updatePrice(index: number, newPrice: number) {
    // Update the specific(index) prices item on array with the new price
    this.prices[index].price = newPrice;
    //or just set input (number) disable and value = 0?
  }
}
