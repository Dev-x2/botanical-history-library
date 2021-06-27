import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { PageData } from '../components/page-details/page-details.component';

import { concatMap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  constructor() { }

  counter = true;

  public getPageData(): Observable<PageData>{
    const data: PageData = {
      name: 'test',
      description: 'example check 1',
      imageLink: '../../../assets/vintage-vector-botanical-illustration-set-260nw-1531681373.jpg'
    }

    const dataNew: PageData = {
      name: 'This is example',
      description: 'example check 2',
      imageLink: '../../../assets/botanical-book-by-jacquin-1781-o1-historic-illustrations.jpg'
    }

    this.counter = !this.counter;

    if(this.counter){
      return of(dataNew).pipe( delay( 1000 ));
    }


     return of(data).pipe( delay( 1000 ));
  
  }
}
