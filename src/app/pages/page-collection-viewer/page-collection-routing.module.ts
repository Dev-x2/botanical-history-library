import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCollectionViewerComponent } from './page-collection-viewer.component';

const routes: Routes = [{ path: '', component: PageCollectionViewerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageCollectionRoutingModule {}
