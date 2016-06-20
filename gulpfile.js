
    var gulp = require('gulp'),
        sass = require('gulp-sass'),
        browserSync = require('browser-sync');

    gulp.task('sass', function () {
        return gulp.src('sass/**/*.sass')
            .pipe(sass())
            .pipe(gulp.dest('css'))
    });

    gulp.task('watch', function () {
       gulp.watch('sass/**/*.sass', ['sass']);
    });

    gulp.task('browser-sync', function () {
        browserSync({
            server: {
                baseDir: 'Eventide'
            },
            notify: false
        });
    })