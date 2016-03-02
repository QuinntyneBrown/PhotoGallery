var gulp = require("gulp");
var gulpUtil = require("gulp-util");
var webpack = require("gulp-webpack");
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var templateCache = require('gulp-angular-templatecache');

var libs = [

]

var paths = {
    npm: './node_modules/',
    lib: './lib/'
};

gulp.task('libs', function () {
    return gulp.src(libs).pipe(gulp.dest(paths.lib));
});

gulp.task('photo-gallery-css', function () {
    return gulp.src(["components/photo-gallery/**/*.css"])
      .pipe(concat('photo-gallery-app.css'))
      .pipe(gulp.dest('./dist/'));
});

gulp.task("photo-gallery-webpack", function () {
    return gulp.src('bootstrap.photo-gallery.ts')
    .pipe(webpack({
        resolve: {
            extensions: ["", ".js", ".ts"]
        },
        module: {
            loaders: [
                {
                    test: /\.ts$/, loader: "ts", exclude: [/node_modules/]
                },
                {
                    test: /\.css$/, exclude: [/node_modules/], loader: "style-loader!css-loader"
                }
            ]
        }
    }))
    .pipe(rename("photo-gallery-app.js"))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
    gulp.watch([
        './components/**/*.ts', './components/**/*.html', './components/**/*.css'
    ], ['photo-gallery-css', 'photo-gallery-webpack']);
});

gulp.task('default', ['photo-gallery-css', 'photo-gallery-webpack', 'watch']);