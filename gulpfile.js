// 载入外挂
var gulp = require('gulp'), 
    less = require('gulp-less'),
    path = require('path'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache');
 
// 样式
gulp.task('less', function () {
  return gulp.src('node_modules/bootstrap/less/bootstrap.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('src/styles/'));
});
 
// 脚本
gulp.task('scripts', function() { 
  return gulp.src('public/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('src/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('src/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});
 
// 图片
gulp.task('images', function() { 
  return gulp.src('public/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('src/images'))
    .pipe(notify({ message: 'Images task complete' }));
});
 
// 清理
gulp.task('clean', function() { 
  //return gulp.src(['public/stylesheets', 'public/js', 'public/images'], {read: false})
    //.pipe(clean());
});
 
// 预设任务
gulp.task('default', ['clean'], function() { 
    gulp.start('less', 'scripts', 'images');
});
 
// 看手
gulp.task('watch', function() {
 
  // 看守所有.scss档
  gulp.watch('public/stylesheets/**/*.scss', ['styles']);
 
  // 看守所有.js档
  gulp.watch('public/js/**/*.js', ['scripts']);
 
  // 看守所有图片档
  gulp.watch('public/images/**/*', ['images']);
 
  // 看守所有位在 dist/  目录下的档案，一旦有更动，便进行重整
  gulp.watch(['public/**']).on('change', function(file) {
    server.changed(file.path);
  });
 
});