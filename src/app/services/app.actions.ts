import { PageData } from '../components/page-details/page-details.component';

export class AddPage {
  public static readonly type = '[App] Add page';
  constructor(public payload: PageData) {}
}

export class ClearAllPages {
  public static readonly type = '[App] Clear all pages';
  constructor() {}
}