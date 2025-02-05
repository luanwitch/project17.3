const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const rename = require('gulp-rename');

// Minificação do CSS
gulp.task('styles', function () {
    return gulp.src('./src/styles/styles.css')
        .pipe(cleanCSS())                      // Minifica o CSS
        .pipe(rename({ suffix: '.min' }))      // Renomeia para styles.min.css
        .pipe(gulp.dest('./dist/styles'));
});

// Minificação do JS
gulp.task('scripts', function () {
    return gulp.src('./src/scripts/app.js')
        .pipe(terser())                        // Minifica o JS
        .pipe(rename({ suffix: '.min' }))      // Renomeia para app.min.js
        .pipe(gulp.dest('./dist/scripts'));
});

// Tarefa para rodar a build
gulp.task('build', gulp.series('styles', 'scripts'));
gulp.src('src/styles/styles.css', { allowEmpty: true })
gulp.src('src/scripts/app.js', { allowEmpty: true })

// Tarefa padrão
gulp.task('default', gulp.series('build'));
