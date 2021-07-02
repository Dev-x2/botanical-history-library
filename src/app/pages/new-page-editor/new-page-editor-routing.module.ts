import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPageEditorComponent } from './new-page-editor.component';

const routes: Routes = [{ path: '', component: NewPageEditorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPageEditorRoutingModule {}
