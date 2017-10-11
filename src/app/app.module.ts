import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { ElectronInfoComponent } from './electron-info/electron-info.component';

import { ElectronService } from './services/electron.service';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    ElectronInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ElectronService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
