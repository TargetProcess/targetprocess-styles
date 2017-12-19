# Targetprocess styles

Extracted TP styles along with minimal build setup

### Usage

#### Build:

```
> npm install
> npm run build
```

#### Dev server:

```
> npm install
> npm run devServer
```

After running locally (by default on 8080 port) you can add the following mashup to 
override TP styles on your account:

```js
tau.mashups
    .addDependency('jQuery')
    .addMashup(function($, config) {
        var importLocalStyle = function(filename) {
            var linkTag = document.createElement('link');
            linkTag.href = 'http://localhost:8080/dist/' + filename;
            linkTag.rel = 'stylesheet';
            linkTag.type = 'text/css';
        
            document.head.appendChild(linkTag);
        };
        
        [
            'board.core.css',
            'entity-colors.css',
            'loginPageStyles.css',
            'page.board.views.core.css',
            'printNewList.css',
            'report.integration.css'
        ].forEach(importLocalStyle);
    });
```

Note that accounts run on HTTPS by default, so you'll need to allow the browser to load
content from HTTP resources to load styles from your dev server.