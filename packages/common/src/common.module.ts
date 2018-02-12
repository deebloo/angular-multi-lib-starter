import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCoreModule } from '@my-lib/core';

@NgModule({
  imports: [CommonModule, MyCoreModule]
})
export class MyCommonModule {}
