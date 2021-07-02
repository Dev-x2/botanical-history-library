import { TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AppState, AppStateModel } from './app.state';
import { AddPage } from './app.actions';
import { PageData } from '../components/page-details/page-details.component';

describe('App store', () => {
  let store: Store;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [NgxsModule.forRoot([AppState])]
      }).compileComponents();
      store = TestBed.inject(Store);
    })
  );

  it('should create an action and add an item', () => {
    const data: PageData = {
      name: 'test',
      description: 'example check 1',
      imageLink:
        '../../../assets/vintage-vector-botanical-illustration-set-260nw-1531681373.jpg'
    };

    const expected: AppStateModel = {
      pages: [data]
    };
    store.dispatch(new AddPage(data));
    const actual = store.selectSnapshot(AppState.getState);
    expect(actual).toEqual(expected);
  });
});
