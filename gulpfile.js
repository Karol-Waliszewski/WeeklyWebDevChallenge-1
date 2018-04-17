const gulp = require('gulp'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    imageMin = require('gulp-imagemin');

gulp.task('css', () => {
    return gulp.src('dev/sass/*.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest('build/css'));
})
gulp.task('fonts', () => {
    return gulp.src('dev/fonts/*.*')
        .pipe(gulp.dest('build/fonts'))
})
gulp.task('html', () => {
    return gulp.src('dev/*.html')
        .pipe(gulp.dest('build'));
})

gulp.task('img', () => {
    return gulp.src('dev/img/*.*')
        .pipe(imageMin())
        .pipe(gulp.dest('build/img'));
})

gulp.task('watchers', () => {
    gulp.watch('dev/sass/*.scss', ['css']);
    gulp.watch('dev/*.html', ['html']);
    gulp.watch('dev/img/*.*', ['img']);
})

gulp.task('default', ['css', 'html', 'img', 'fonts', "watchers"])
