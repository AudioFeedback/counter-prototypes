import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppStore {
    private counter: number = 0;

    add() {
        this.counter++;
    }

    subtract() {
        this.counter--;
    }

    reset() {
        this.counter = 0;
    }

    getCounter() {
        return this.counter;
    }
}
