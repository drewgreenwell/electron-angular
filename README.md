# electron-angular

A starter template for an Angular 5 Electron app

## Development

To get started run `npm install` then `npm run refresh`. `refresh` is short for `npm run build && npm run electron`

## JIT Development

## Development in the browser

This angular app can be launched with `ng serve` as any other anglar app can. There is a mock object for electron in `/src/mocks/electron.mock.ts`. The mock object is used in `/src/services/electron.service.ts` when running in the browser. You may need to build this out as your application uses more advanced electron features.

## Using other libraries

This project uses the Angular CLI to perform an AOT build of the Typescript files in the app. This will pull in script you reference via your Typescript imports.

If you want to use a library that you're more comfortable with like jQuery in an Angular App. You can just install the library via npm and then import the library when required.
`npm install jquery@latest`

Then add this to your Typescript file
`import $ from 'jquery';`


## Build

Run `npm run build` to build the project.

Run `npm run electron` or `electron .` to run the app in electron

The build artifacts will be stored in the `dist/` directory. Including an updated copy of the Electron required files main.js and package.json to allow for easy packaging. This logic is performed in `copy-files-for-packaging.js`.

## Package

Run `npm run package` to package the dist folder.