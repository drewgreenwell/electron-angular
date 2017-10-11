import { Component, ViewChild, OnInit } from '@angular/core';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { ElectronService } from './services/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('titleBar') titleBar: TitleBarComponent;

  title = 'Angular App in Electron';
  window: any;

  constructor(electronService: ElectronService) {
    const electron = electronService.getElectron();
    this.window = electron.remote.getCurrentWindow();
  }

  ngOnInit() {}

  onMaximize() {
    if (!this.window.isMaximized()) {
      this.window.maximize();
    } else {
        this.window.unmaximize();
    }
  }

  onMinimize() {
    this.window.minimize();
  }

  onClose() {
    this.window.close();
  }

}
