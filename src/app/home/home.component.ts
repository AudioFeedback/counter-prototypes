import { Component } from '@angular/core';
import { AppStore } from './../app.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'test-app';

  constructor(private appStore: AppStore) {} // Inject the AppStore service

  get counter() {
    return this.appStore.getCounter(); // Use the store's counter value
  }

  add() {
    this.appStore.add(); // Call the store's add method
  }

  subtract() {
    this.appStore.subtract(); // Call the store's subtract method
  }

  reset() {
    this.appStore.reset(); // Call the store's reset method
  }
}
