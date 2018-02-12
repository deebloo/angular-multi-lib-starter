import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyCoreModule } from '@my-lib/core';
import { MyCommonModule } from '@my-lib/common';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, MyCoreModule, MyCommonModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
