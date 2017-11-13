var fs = require('fs-extra');

fs.readFile('./main.js', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log ( 'copying main.js to ./dist' );
    var result = data.toString();    
    result = result.replace('dist/index.html', 'index.html');    
    fs.writeFile('./dist/main.js', result, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});

fs.readFile('./package.json', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log ( 'parsing package.json' );
    var result = JSON.parse(data.toString());    
    var obj = { 
        "name": result.name,
        "version": result.version,
        "license": result.license,
        "main": result.main
    }
    console.log ( 'writing package.json to ./dist' );
    fs.writeFile('./dist/package.json', JSON.stringify(obj), 'utf8', function (err) {
        if (err) return console.log(err);
    });
});

