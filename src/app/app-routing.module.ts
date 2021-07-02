import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/collection' },
  {
    path: 'collection',
    loadChildren: () =>
      import('./pages/page-collection-viewer/page-collection.module').then(
        m => m.PageCollectionModule
      )
  },
  {
    path: 'newpage',
    loadChildren: () =>
      import('./pages/new-page-editor/new-page-editor.module').then(
        m => m.NewPageEditorModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
