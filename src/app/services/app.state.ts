import { State, Action, Selector, StateContext } from '@ngxs/store';
import { PageData } from '../components/page-details/page-details.component';
import { AddPage, ClearAllPages } from './app.actions';

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
    // Todo: Check if should be replaced with patchState
    stateModel.pages = [...stateModel.pages, payload];
    ctx.setState(stateModel);
  }

  @Action(ClearAllPages)
  public clearAll(ctx: StateContext<AppStateModel>): void {
    const stateModel = ctx.getState();
    stateModel.pages = [];
    ctx.setState(stateModel);
  }
}
