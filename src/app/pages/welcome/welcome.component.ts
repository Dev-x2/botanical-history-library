import {Component, Input, OnInit} from '@angular/core';
import {PageData} from '../../components/page-details/page-details.component';
import {PageDataService} from '../../services/page-data.service'


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})

export class WelcomeComponent implements OnInit {

  pages: PageData[];
  nzSpanValue: number;
  isLoading: boolean;

  constructor(private pageDataService: PageDataService) {
    this.pages = [];
    this.nzSpanValue = this.setNzSpanValue(this.pages.length);
    this.isLoading = false;
  }


  ngOnInit(): void {
    // this.getPageDetails();
  }

  clearAllPages(): void {
    this.pages = [];
  }

  getPageDetails(): void {

    this.isLoading = true;


    const pageData$ = this.pageDataService.getPageData(); //Need to unsubscribe
    pageData$.subscribe(pageData => {
      this.pages.push(pageData);
      this.isLoading = false;
      this.nzSpanValue = this.setNzSpanValue(this.pages.length);
    });
  }

  private setNzSpanValue(numberOfPages: number): number {
    const oneColumn = 12;
    const twoColumns = 12;
    const threeColumns = 8;
    const fourColumns = 6;


    switch (numberOfPages) {
      case 3:
        return threeColumns;
        case 2:
          return twoColumns;
          case 1:
            return oneColumn;
      default:
        return fourColumns;
    }
  }
}

