declare const window: any;

export class ElectronMock {

    process =  {
        versions: {
            chrome: this.getChromeVersion(),
            electron: -1,
            node: -1
        },
        getSystemMemoryInfo: () => {},
        getProcessMemoryInfo: () => {},
        getCPUUsage: () => {}
    };

    getCurrentWindow() { return window; }

    getChromeVersion (): Number {
        const raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        return raw ? parseInt(raw[2], 10) : -1;
    }
}
