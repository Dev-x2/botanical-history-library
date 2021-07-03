import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { PageData } from '../components/page-details/page-details.component';
import { delay, take } from 'rxjs/operators';
import { AddPage, SetPageCounter } from './app.actions';
import { Store } from '@ngxs/store';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {
  counter = 0;

  constructor(private store: Store) {
    this.store
      .select(state => state.app.pageCounter)
      .pipe(take(1))
      .subscribe(data => {
        this.counter = data;
      });
  }

  private pagesArchive: PageData[] = [
    {
      id: Date.now(),
      name: 'Pietro Andrea Mattioli - 1561 - Page 11',
      description:
        'I discorsi di P. A. Mattioli. Excellence in art and science in the 16th century. Ediz. multilingue, Example 1.',
      imageLink: '../../../assets/image1.jpg'
    },

    {
      id: Date.now(),
      name: 'Pietro Andrea Mattioli - 1561 - Page 272',
      description:
        'A careful student of botany, he described 100 new plants and coordinated the medical botany of his time.',
      imageLink: '../../../assets/image2.jpg'
    },
    {
      id: Date.now(),
      name: 'Luca Ghini (1490–1556)',
      description:
        'Botany, also called plant science(s), plant biology or phytology, is the science of plant life and a branch biology.',
      imageLink: '../../../assets/image10.jpg'
    },

    {
      id: Date.now(),
      name: 'Second Edition - 1561 - Page 248',
      description:
        'In addition to identifying the plants originally described by Dioscorides, Mattioli added descriptions of some plants.',
      imageLink: '../../../assets/image8.jpg'
    },

    {
      id: Date.now(),
      name: 'Title section....',
      description: 'Description section...',
      imageLink: '../../../assets/image12.jpg'
    },

    {
      id: Date.now(),
      name: 'Title section....',
      description: 'Description section...',
      imageLink: '../../../assets/image6.jpg'
    },

    {
      id: Date.now(),
      name: 'Title section....',
      description: 'Description section...',
      imageLink: '../../../assets/image7.jpg'
    },

    {
      id: Date.now(),
      name: 'Title section....',
      description: 'Description section...',
      imageLink: '../../../assets/image4.jpg'
    },

    {
      id: Date.now(),
      name: 'Title section....',
      description: 'Description section...',
      imageLink: '../../../assets/image9.jpg'
    },

    {
      id: Date.now(),
      name: 'Title section....',
      description: 'Description section...',
      imageLink: '../../../assets/image3.jpg'
    },

    {
      id: Date.now(),
      name: 'Title section....',
      description: 'Description section...',
      imageLink: '../../../assets/image11.jpg'
    },

    {
      id: Date.now(),
      name: 'Title section....',
      description: 'Description section...',
      imageLink: '../../../assets/image5.jpg'
    },

    {
      id: Date.now(),
      name: 'Title section....',
      description: 'Description section...',
      imageLink: '../../../assets/image13.jpg'
    },

    {
      id: Date.now(),
      name: 'Title section....',
      description: 'Description section...',
      imageLink: '../../../assets/image14.jpg'
    }
  ];

  public fetchPageData(): void {
    of(this.pagesArchive[this.counter])
      .pipe(delay(1200))
      .subscribe((data: PageData) => {
        this.store.dispatch(new AddPage([data]));
      });

    this.counter++;

    if (this.counter === this.pagesArchive.length) {
      this.counter = 0;
    }
    this.store.dispatch(new SetPageCounter(this.counter));
  }

  public fetchAllPages(): void {
    of(this.pagesArchive[this.counter])
      .pipe(delay(1200))
      .subscribe((data: PageData) => {
        this.store.dispatch(new AddPage(this.pagesArchive));
      });
  }
}
