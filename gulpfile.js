var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var minify = require('gulp-babel-minify');
var buffer = require('vinyl-buffer');
var cachebust = require('gulp-cache-bust');

gulp.task("default", function () {
    browserify(['./src/app.js'])
        .transform("babelify", {
            presets: [
                ["@babel/preset-env", {
                    "targets": {
                        "browsers": ["IE 10", "last 2 versions"]
                    },
                    "useBuiltIns": false
                }]
            ],
            "plugins": ["@babel/plugin-transform-runtime"]
        })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(minify())
        .pipe(gulp.dest("dist"));

    return gulp.src('./index.html')
        .pipe(cachebust({
            type: 'timestamp'
        }))
        .pipe(gulp.dest('.'));
});
