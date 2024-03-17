import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Page2Component],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatTableModule,
    RouterModule.forChild([
      {
        path: '',
        component: Page2Component
      }
    ])
  ],
  exports: [Page2Component]
})
export class Page2Module { }
