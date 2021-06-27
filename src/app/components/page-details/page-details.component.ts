import {Component, Input} from '@angular/core';

export interface PageData {
  name: string;
  description: string;
  imageLink: string;
}

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styles: [
    `
      .image-multi-rows {
        max-width: 100%;
        height: 250px;
        object-fit: scale-down;
      }

      .image-one-row {
        max-width: 100%;
        height: 500px;
        object-fit: scale-down;
      }

    `
  ]

})
export class PageDetailsComponent {
  @Input() pageDetails!: PageData;
  @Input() isOneRow: boolean;
  isLoading: boolean;

  constructor() {
    this.isLoading = true;
    this.isOneRow = true;
  }

  ngOnChanges(changes: any) {

    if(changes.pageDetails) {
      this.isLoading = false;
    }
    
    
}

  stopLoading(){
    this.isLoading = !this.isLoading;
  }

}
