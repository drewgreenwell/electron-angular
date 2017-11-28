import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import 'rxjs/add/operator/takeWhile';
import { ElectronService } from '../services/electron.service';

@Component({
    selector: 'app-system-info',
    templateUrl: './system-info.component.html',
    styleUrls: ['./system-info.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SystemInfoComponent implements OnInit, OnDestroy {
    alive = true;
    interval = 1000;
    memory: any = {};
    memoryUsage = 0;
    pmemory: any = {};
    percentCPUUsage: number;

    constructor(private electronService: ElectronService) { }

    ngOnInit() {
        TimerObservable.create(0, this.interval)
        .takeWhile(() => this.alive)
        .subscribe(() => {
          const mem = this.electronService.electron.remote.process.getSystemMemoryInfo();
          this.updateSystemMemory(mem);
          const pmem = this.electronService.electron.remote.process.getProcessMemoryInfo();
          this.updateProcessMemory(pmem);
          const cpu = this.electronService.electron.remote.process.getCPUUsage();
          this.percentCPUUsage = cpu.percentCPUUsage.toFixed(2);
        });
     }

     updateSystemMemory(mem: any) {
        const used = mem.total - mem.free;
        this.memoryUsage = Math.floor((used / mem.total) * 100);
        mem.total = Math.floor(mem.total / 1024);
        mem.free = Math.floor(mem.free / 1024);
        mem.used = Math.floor(used / 1024);
        this.memory = mem;
     }

     updateProcessMemory(mem: any) {
        mem.workingSetSize = Math.floor(mem.workingSetSize / 1024);
        mem.peakWorkingSetSize = Math.floor(mem.peakWorkingSetSize / 1024);
        mem.privateBytes = Math.floor(mem.privateBytes / 1024);
        mem.sharedBytes = Math.floor(mem.sharedBytes / 1024);
        this.pmemory = mem;
     }

     ngOnDestroy() {
        this.alive = false;
    }
}
