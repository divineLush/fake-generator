const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
 
gulp.task('babel', () =>
    gulp.src('./src/main.js')
        .pipe(babel())
        .pipe(gulp.dest('../dist'))
)

gulp.task('copyHTML', () =>
    gulp.src('./src/index.html')
        .pipe(gulp.dest('../dist'))
)

gulp.task('copyCSS', () =>
    gulp.src('./src/main.css')
        .pipe(gulp.dest('../dist'))
)

gulp.task('uglify', () =>
    gulp.src('dist/main.js')
        .pipe(uglify())
)

gulp.task('default', gulp.series('copyHTML', 'copyCSS', 'babel'))
