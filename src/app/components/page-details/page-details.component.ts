import { Component, Input } from '@angular/core';

export interface PageData {
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
  @Input() isOneRow: boolean;
  isLoading: boolean;

  constructor() {
    this.isLoading = true;
    this.isOneRow = true;
  }

  stopLoading(): void {
    this.isLoading = !this.isLoading;
  }
}
