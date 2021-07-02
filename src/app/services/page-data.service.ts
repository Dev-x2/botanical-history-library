import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PageData } from '../components/page-details/page-details.component';
import { delay } from 'rxjs/operators';
import { AddPage } from './app.actions';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {
  constructor(private store: Store) {}

  counter = true;

  public fetchPageData(): void {
    const pageExample1: PageData = {
      name: 'test',
      description: 'example check 1',
      imageLink:
        '../../../assets/vintage-vector-botanical-illustration-set-260nw-1531681373.jpg'
    };

    const pageExample2: PageData = {
      name: 'This is example',
      description: 'example check 2',
      imageLink:
        '../../../assets/botanical-book-by-jacquin-1781-o1-historic-illustrations.jpg'
    };

    this.counter = !this.counter;

    if (this.counter) {
      of(pageExample1)
        .pipe(delay(1000))
        .subscribe((data: PageData) => {
          this.store.dispatch(new AddPage(data));
        });
    } else {
      this.store.dispatch(new AddPage(pageExample2));
    }
  }
}
