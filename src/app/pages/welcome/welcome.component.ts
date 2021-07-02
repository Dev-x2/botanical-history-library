import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ClearAllPages } from 'src/app/services/app.actions';
import { PageData } from '../../components/page-details/page-details.component';
import { PageDataService } from '../../services/page-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit, OnDestroy {
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
    this.pageDataService.fetchPageData();
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
