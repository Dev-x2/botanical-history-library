import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { DeletePage } from 'src/app/services/app.actions';

export interface PageData {
  id: number;
  name: string;
  description: string;
  imageLink: string;
}

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.less']
})
export class PageDetailsComponent {
  @Input() pageDetails!: PageData;
  @Input() isOneRow = true;
  isLoading = false;

  constructor(private store: Store) {}

  delete(): void {
    this.store.dispatch(new DeletePage(this.pageDetails.id));
  }

  reload(): void {
    if (!this.isLoading) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    }
  }
}
