import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatListModule],
  declarations: [],
  exports: [MatButtonModule, MatListModule]
})
export class AppMaterialModule {}
