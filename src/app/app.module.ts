import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { ElectronInfoComponent } from './electron-info/electron-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    ElectronInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
