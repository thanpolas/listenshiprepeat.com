# listenshiprepeat.com

> Website sources of the Listen Ship Repeat podcast

## The Stack
 * [Node](http://nodejs.org/)
 * [Ruby](http://www.ruby-lang.org/en/downloads/) If you're on OS X or Linux you probably already have Ruby installed; test with `ruby -v` in your terminal.
 * [Gulp](http://gulpjs.com) `npm install -g gulp`
 * [Jekyll](http://jekyllrb.com/) `gem install jekyll`

This project was built using [Jekyll](http://jekyllrb.com/), you don't need to be familiar with these tools to do most of the tasks.

## Installing the project


```shell
npm install
```

## Working with the project

```shell
gulp
```

The default gulp task will:

* Browserify the required modules.
* Build `sass` and the Jekyll site.
* Launch default Jekyll dev server with BrowserSync.
* Watch HTML/SASS/JS/YAML folders and rebuild and reload the site on your browser.

More specific tasks:

* `gulp browserify`: Browserifies whatever is in `_app` and produces `assets/js/app.js`
* `gulp jekyll-build`: Builds jekyll
* `gulp sass`: Builds sass sources, adds source comments and produces `_site/css/style.css` and `css/style.css` files.

## Assets and pages locations

* Edit styles inside `_sass/` folder. `/css/style.css` is auto generated and injected by BrowserSync.
* The project's homepage is the file `index.html` in the root folder.
* All the site's data are in the `_data/` folder.

## License

[MIT](http://opensource.org/licenses/MIT)
