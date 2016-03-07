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

gulp.task('shaw-components-css', function () {
    return gulp.src(["src/components/**/*.css"])
      .pipe(concat('shaw-components.css'))
      .pipe(gulp.dest('./dist/'));
});

gulp.task("shaw-components-webpack", function () {
    return gulp.src('src/bootstrap.ts')
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
    .pipe(rename("shaw-components.js"))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
    gulp.watch([
        './src/**/*.ts', './src/**/*.html', './src/**/*.css'
    ], ['shaw-components-css', 'shaw-components-webpack']);
});

gulp.task('default', ['shaw-components-css', 'shaw-components-webpack', 'watch']);