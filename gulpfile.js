const gulp = require('gulp')
// const uglify = require('gulp-uglify')
// const babel = require('gulp-babel')
 
gulp.task('copyJS', () =>
    gulp.src('./src/main.js')
        .pipe(gulp.dest('dist'))
)

gulp.task('copyHTML', () =>
    gulp.src('./src/index.html')
        .pipe(gulp.dest('dist'))
)

gulp.task('copyCSS', () =>
    gulp.src('./src/main.css')
        .pipe(gulp.dest('dist'))
)

gulp.task('default', gulp.series('copyHTML', 'copyCSS', 'copyJS'))
