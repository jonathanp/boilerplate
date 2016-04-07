# Front End Prototype Boilerplate

WIP


## Folder structure
```
.
├── assets                      # Static assets built by webpack
├── lib                         # Files needed to setup the dev/prototype environment
├── src                         # This is where you'll be working during the development of the prototype
│   ├── client.js               # The "index" file that imports the client side JavaScript
│   ├── components              # Folder containing all components
│   │   ├── button              # An example of a component
│   │   │   ├── client.js       # Client side JavaScript for the component (optional)
│   │   │   ├── readme.md       # Documentation of the component, should include usage examples
│   │   │   ├── style.scss      # Sass styles for the component
│   │   │   └── template.jsx    # Template that contains the HTML needed for the component (in JSX format)
│   ├── layout.jsx              # The base layout
│   ├── pages                   # Folder containing all page templates
│   │   ├── foo.jsx             # An example of a page template
│   │   ├── bar.jsx             # Another example of a page template
│   │   └── index.jsx           # "Table of Contents" page that lists all the page templates
│   └── style.scss              # The "index" file that imports the styles
├── styleguide.config.js        # Configuration file for the styleguide
├── webpack.config.dev.js       # Configuration file for Webpack in the development environment
└── webpack.config.js           # Configuration file for Webpack in the "production" environment
```


## Install

```
$ npm install
```


## Usage

### Develop

```
$ npm run dev
```

### Build static assets for production use

```
$ npm run build:prod
```

### Start styleguide for development

```
$ npm run styleguide:dev
```

### Build styleguide for deployment

```
$ npm run styleguide:build
```

### Lint the source JS and stylesheets

```
$ npm run lint
```
