const gulp = require('gulp');
const sass = require('gulp-sass'); 
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babelify = require("babelify");

sass.compiler = require('node-sass');

function defaultTask(cb) {
    cb();
}

gulp.task('sass', () => {
    return gulp.src('./assets/sass/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({}))
      .pipe(gulp.dest('./assets/css'));
});

gulp.task('css', () => {
    return gulp.src('./assets/css/style.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./out'));
});

gulp.task('scripts', () => {
    browserify({
        'entries': ['./assets/js/index.js'],
        'debug': true,
        'transform': [
            babelify.configure({
                'presets': ['es2015']
            })
        ]})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('dist/'))
})

gulp.task('npmUpdate', function () {
    var update = require('gulp-update')();
   
    gulp.watch('./package.json').on('change', function (file) {
      update.write(file);
    });
   
  })

gulp.task('watch', () => {
    gulp.watch(`./assets/sass/**/*.scss`, gulp.series('sass'));
    gulp.watch(`./assets/css/**/*.css`, gulp.series('css'));
})


exports.default = defaultTask
