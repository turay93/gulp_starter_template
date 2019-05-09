# Gulp Starter Template
[Gulp](https://gulpjs.com) starter template for building apps with [PUG](https://pugjs.org) and [SASS](https://sass-lang.com/)

## Features
- Pug compilation with [gulp-pug](https://www.npmjs.com/package/gulp-pug)
- Sass compilation with [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- Auto-refresh browser with [browser sync](https://www.npmjs.com/package/browser-sync)
- Minification with [gulp-csso](https://www.npmjs.com/package/gulp-csso) and [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
- Autoprefix CSS with [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- Group CSS media queries with [gulp-group-css-media-queries](https://github.com/avaly/gulp-group-css-media-queries)
- Compress images with [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
- And more...

## How to use
1. Open terminal
1. Clone this repository
```
git clone https://github.com/turay93/gulp_starter_template.git
```
3. Update your package.json
#####*package.json*
```
"name": "Your app name",
"description": "Your app description",
"version": "Your app version",
"author": "Your name and lastname",
"homepage": "Your app domain",
"license": "Your app license",
"repository": {
    "type": "git",
    "url": "git+your repository url"
},
"bugs": {
    "url": "Your app bugs report url"
},
```
4. Install dependencies
```
cd gulp_starter_template
npm install 
```
5. Start development
```
npm run dev
```

## Commands
- **dev**
    *Launch browser-sync and gulp watchers for development*
``` 
npm run dev
```
- **build**
    *Building for production*
``` 
npm run build
```
- **clear**
    *Delete all temporary folders (build/, tmp/)*
``` 
npm run clear
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