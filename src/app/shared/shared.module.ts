import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { DataViewComponent } from './components/data-view/data-view.component';

@NgModule({
  declarations: [DataViewComponent],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    DataViewComponent
  ]
})
export class SharedModule { }
