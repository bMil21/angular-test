import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatListModule, MatInputModule],
  declarations: [],
  exports: [MatButtonModule, MatListModule, MatInputModule]
})
export class AppMaterialModule {}
