import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ElectronService } from './services/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  @ViewChild('titleBar') titleBar: TitleBarComponent;
  @ViewChild('statusBar') statusBar: StatusBarComponent;

  title = 'Angular App in Electron';
  showTitleBar = false;
  showStatusBar = true;

  window: any;

  constructor(electronService: ElectronService) {
    this.window = electronService.remote.getCurrentWindow();
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
