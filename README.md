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
* Compile `css` and the Jekyll site.
* Launch default Jekyll dev server with BrowserSync.
* Watch HTML/CSS/JS/YAML folders and rebuild and reload the site on your browser.

More specific tasks:

* `gulp browserify`: Browserifies whatever is in `_app` and produces `assets/js/app.js`
* `gulp jekyll-build`: Builds jekyll
* `gulp css`: Concatenates all files from `_css` to `css/style.css`.

## Assets and pages locations

* Edit styles inside `_css/` folder. `/css/style.css` is auto generated and injected by BrowserSync.
* The project's homepage is the file `index.html` in the root folder.

## License

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
