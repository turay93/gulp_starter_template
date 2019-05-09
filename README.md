# Gulp Starter Template
Gulp starter template for building apps with pug and sass

## Features
- Pug compilation with [gulp-pug](https://www.npmjs.com/package/gulp-pug)
- Sass compilation with [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- Auto-refresh browser with [browser sync](https://www.npmjs.com/package/browser-sync)
- Minification with [gulp-csso](https://www.npmjs.com/package/gulp-csso) and [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- Autoprefix CSS with [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- Group CSS media queries with [gulp-group-css-media-queries](https://github.com/avaly/gulp-group-css-media-queries)
- Compress images with [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
- And more...

## Commands
- **dev**
    *For launching browser-sync and gulp watchers for development*
    ``` 
    npm run dev     // with npm
    yarn dev        // with yarn
    ```
- **build**
    *Building for production*
    ``` 
    npm run build   // with npm
    yarn build      // with yarn
    ```
- **clear**
    *Delete all temporary folders (build/, tmp/)*
    ``` 
    npm run clear   // with npm
    yarn clear      // with yarn
    ```

# Folder Structure
``` 
|—— app
|   |—— assets
|   |   |—— fonts
|   |   |—— images
|   |   |—— scripts
|   |   |   └── main.js
|   |   └── styles
|   |       |—— base
|   |       |   |—— fonts.scss
|   |       |   |—— general.scss
|   |       |   |—— normalize.scss
|   |       |   └── reset.scss
|   |       |—— components
|   |       |—— helpers
|   |       |   |—— configs.scss
|   |       |   |—— functions.scss
|   |       |   |—— mixins.scss
|   |       |   └── variables.scss
|   |       └── main.scss
|   |—— templates
|   |   |—— components
|   |   └── layouts
|   |       └── main.pug
|   |—— favicon.ico
|   └── index.pug
|—— data
|—— gulp
|   |—— tasks
|   |   |—— browserSync.js
|   |   |—— data.js
|   |   |—— fonts.js
|   |   |—— images.js
|   |   |—— pug.js
|   |   |—— rootFolder.js
|   |   |—— scripts.js
|   |   |—— styles.js
|   |   |—— svg.js
|   |   |—— clean.js
|   |   |—— build.js
|   |   |—— dev.js
|   |   └── watch.js
|   └── index.js
|—— package.json
|—— gulpfile.js
|—— yarn.lock
|—— .gitignore
|—— LICENSE
└── README.md
```