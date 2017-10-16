import { Component, ViewChild, OnInit } from '@angular/core';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ElectronService } from './services/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('titleBar') titleBar: TitleBarComponent;
  @ViewChild('statusBar') statusBar: StatusBarComponent;

  title = 'Angular App in Electron';
  showTitleBar = true;
  showStatusBar = true;

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
