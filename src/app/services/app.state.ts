import { State, Action, Selector, StateContext } from '@ngxs/store';
import { PageData } from '../components/page-details/page-details.component';
import { AddPage, ClearAllPages, DeletePage } from './app.actions';
import { patch, removeItem } from '@ngxs/store/operators';

export interface AppStateModel {
  pages: PageData[];
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    pages: []
  }
})
export class AppState {
  @Selector()
  public static getState(state: AppStateModel): AppStateModel {
    return state;
  }

  @Action(AddPage)
  public add(ctx: StateContext<AppStateModel>, { payload }: AddPage): void {
    const stateModel = ctx.getState();
    stateModel.pages = [...stateModel.pages, payload];
    ctx.setState(stateModel);
  }

  @Action(DeletePage)
  public delete(
    ctx: StateContext<AppStateModel>,
    { pageId }: DeletePage
  ): void {
    ctx.setState(
      patch({
        pages: removeItem<PageData>(page => page?.id === pageId)
      })
    );
  }

  @Action(ClearAllPages)
  public deleteAll(ctx: StateContext<AppStateModel>): void {
    const stateModel = ctx.getState();
    stateModel.pages = [];
    ctx.setState(stateModel);
  }
}
