var gulp        = require('gulp');
var browserify  = require('browserify');
var browserSync = require('browser-sync');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var cp          = require('child_process');
var loadPlugins = require('gulp-load-plugins')();
var jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn( jekyll , ['build'], {stdio: 'inherit'})
      .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['browserify','jekyll-build'], function () {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['browserify','sass', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

/**
 * Browserify js scripts
 */
gulp.task('browserify', function () {
  var b = browserify({
    entries: './_app/app.js',
    debug: true
  });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(loadPlugins.sourcemaps.init({loadMaps: true}))
      .pipe(loadPlugins.uglify())
      .on('error', loadPlugins.util.log)
    .pipe(loadPlugins.sourcemaps.write('./'))
    .pipe(gulp.dest('./assets/js/'));

});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('css', function () {
  return gulp.src('_css/**/*.css')
    .pipe(concatCss('styles.css'))
    .pipe(gulp.dest('css/'));
});
gulp.task('concatJs', function() {
  return gulp.src([
    './_app/theme/jquery-1.11.2.min.js',
    './_app/theme/jquery-ui-1.10.3.custom.min.js',
    './_app/theme/jquery.elevateZoom-3.0.4.min.js',
    './_app/theme/jquery.royalslider.min.js',
    './_app/theme/mediaelement.min.js',
    './_app/theme/hoverIntent.js',
    './_app/theme/superfish.js',
    './_app/theme/jquery.hoverdir.js',
    './_app/theme/jquery.autosize.js',
    './_app/theme/elastislide/modernizr.custom.17475.js',
    './_app/theme/elastislide/jquerypp.custom.js',
    './_app/theme/elastislide/jquery.elastislide.js',
    './_app/theme/lib.js',
  ])
    .pipe(concat('theme-app.js'))
    .pipe(gulp.dest('./_app/'));

});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch('_css/**/*', ['css']);
  gulp.watch([
    '*.html',
    '_layouts/*.html',
    '_posts/*',
    '_includes/*.html',
    '_data/*.yaml',
    'js/*.js',
    '_app/*.js'
  ], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browserify', 'browser-sync', 'watch']);
