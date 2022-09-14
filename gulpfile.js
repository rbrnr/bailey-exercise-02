const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const bundleJS = () => gulp
  .src('./src/scripts/scripts.ts')
  .pipe(webpackStream(require('./webpack.config.js'), webpack))
  .pipe(gulp.dest('./assets/js'));

const compileSass = () => gulp
  .src('./src/styles/styles.scss')
  .pipe(sass({ includePaths: ['node_modules'] }).on('error', sass.logError))
  .pipe(gulp.dest('./assets/css'));

const watchScripts = () => gulp.watch(`./src/scripts/**/*.ts`, gulp.series(bundleJS));
const watchStyles = () => gulp.watch('./src/styles/**/*.scss', gulp.series(compileSass));

const gulpCompile = gulp.parallel(bundleJS, compileSass);
const gulpWatch = gulp.parallel(watchScripts, watchStyles);
const gulpDev = gulp.series(gulpCompile, gulpWatch);

gulp.task('default', gulpCompile);
gulp.task('watch', gulpDev);