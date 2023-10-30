const gulp = require('gulp')
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'))
const  imagemin = require('gulp-imagemin')
const  uglify = require('gulp-uglify')


function compSass() {
    return gulp.src('./src/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/'))
}

function compImg() {
    return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img'))
}

function compjs() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    
    .pipe(gulp.dest('./build/scripts/'))
}



exports.default = function() {
    gulp.watch('./src/main.scss',{ ignoreInitial: false }, gulp.series(compSass))
    gulp.watch('./src/img/*',{ ignoreInitial: false }, gulp.series(compImg))
    gulp.watch('./src/scripts/*.js',{ ignoreInitial: false }, gulp.series(compjs))
}