# electron-angular

A starter template for an Angular 5 Electron app

## Development

To get started run `npm install` then `npm run refresh`. `refresh` is short for `npm run build && npm run electron`

## JIT Development

## Development in the browser

This angular app can be launched with `ng serve` as any other anglar app can. There is a mock object for electron in `/src/mocks/electron.mock.ts`. The mock object is used in `/src/services/electron.service.ts` when running in the browser. You may need to build this out as your application uses more advanced electron features.

## Build

Run `npm run build` to build the project.

Run `npm run electron` or `electron .` to run the app in electron

The build artifacts will be stored in the `dist/` directory. Including an updated copy of the Electron required files main.js and package.json to allow for easy packaging. This logic is performed in `copy-files-for-packaging.js`.

## Package

Run `npm run package` to package the dist folder.