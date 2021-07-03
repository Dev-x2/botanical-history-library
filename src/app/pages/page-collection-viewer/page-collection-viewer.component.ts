import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ClearAllPages } from 'src/app/services/app.actions';
import { PageData } from '../../components/page-details/page-details.component';
import { PageDataService } from '../../services/page-data.service';

@Component({
  templateUrl: './page-collection-viewer.component.html',
  styleUrls: ['./page-collection-viewer.component.less']
})
export class PageCollectionViewerComponent implements OnInit, OnDestroy {
  pages: PageData[] = [];
  nzSpanValue = 0;
  isLoading = true;
  destroy$ = new Subject<void>();

  constructor(private pageDataService: PageDataService, private store: Store) {}

  ngOnInit(): void {
    this.store
      .select(state => state.app.pages)
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.pages = data;
        this.nzSpanValue = this.setNzSpanValue(this.pages.length);
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  clearAllPages(): void {
    this.store.dispatch(new ClearAllPages());
  }

  getPageDetails(): void {
    this.isLoading = true; // Todo need to handle if fetch is failed the loading will reamin true
    this.pageDataService.fetchPageData();
  }

  getFullCollection(): void {
    this.isLoading = true;
    this.pageDataService.fetchAllPages();
  }

  private setNzSpanValue(numberOfPages: number): number {
    const oneColumn = 24;
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
