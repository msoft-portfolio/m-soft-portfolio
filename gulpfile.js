var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var imagemin = require('gulp-imagemin');
var uglifyjs = require('uglify-js');
var composer = require('gulp-uglify/composer');
var pump = require('pump');
var minify = composer(uglifyjs, console);
const htmlmin = require('gulp-htmlmin');

//gulp pt sass
gulp.task('sass', function() {
  return gulp
    .src('./sass/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
//gulp pt sass cu navbar
gulp.task('sass', function() {
  return gulp
    .src('./navbar responsive css/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
//gulp pt uglifycss
gulp.task('css', function() {
  gulp
    .src('./css/*.css')
    .pipe(
      uglifycss({
        uglyComments: true
      })
    )
    .pipe(gulp.dest('./dist/'));
});

//gulp pt imagemin
//gulp.task('imagemin', () =>
//  gulp
//   .src('./img/*')
//    .pipe(imagemin())
//    .pipe(gulp.dest('dist/images'))
//);

//gulp pt js file
gulp.task('compress', function(cb) {
  // the same options as described above
  var options = {};

  pump([gulp.src('typing-effect.js'), minify(options), gulp.dest('dist')], cb);
});

//gulp pt html
//gulp.task('minify', () => {
// return gulp
// .src('index.html')
// .pipe(htmlmin({ collapseWhitespace: true }))
// .pipe(gulp.dest('dist'));
//});

//ca sa imi ruleze gulp sass si css fara sa ii mai dau eu in command gulp sass si gulp css
//gulp.task('run', ['sass', 'css']);

//gulp.task('watch', function() {
// gulp.watch('./sass/*.scss', ['sass']);
// gulp.watch('./css/*.css', ['css']);
//});

//gulp.task('default', ['run', 'watch']);
