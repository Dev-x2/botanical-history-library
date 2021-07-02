import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPageEditorComponent } from './new-page-editor.component';
import { NewPageEditorRoutingModule } from './new-page-editor-routing.module';

@NgModule({
  declarations: [NewPageEditorComponent],
  imports: [CommonModule, NewPageEditorRoutingModule]
})
export class NewPageEditorModule {}
